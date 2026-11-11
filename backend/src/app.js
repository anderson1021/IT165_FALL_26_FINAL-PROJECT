import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Favorite from './Favorite.js';
export const app = express();
app.use(cors({origin:process.env.CLIENT_ORIGIN || 'http://localhost:5173'}));
app.use(express.json({limit:'20kb'}));
app.get('/api/health', (req,res) => res.json({status:'ok',message:'Dyckman Kitchen backend is connected!',database:mongoose.connection.readyState===1?'connected':'disconnected'}));
app.get('/api/project', (req,res) => res.json({name:'Dyckman Kitchen',author:'Anderson Benitez Ortiz',description:'Discover recipes and build your personal cookbook.',stack:['MongoDB','Express','React','Node.js']}));
app.get('/api/recipes', async(req,res) => {
 const q=req.query.search ?? 'chicken';
 if(typeof q!=='string'||q.length>80) return res.status(400).json({error:'Search must be text of 80 characters or fewer.'});
 try {
  const upstream=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+encodeURIComponent(q),{signal:AbortSignal.timeout(10000)});
  if(!upstream.ok) throw new Error('Recipe service unavailable');
  const data=await upstream.json();
  res.json({recipes:(data.meals||[]).map(m=>({mealId:m.idMeal,name:m.strMeal,image:m.strMealThumb,category:m.strCategory,area:m.strArea,instructions:m.strInstructions}))});
 } catch {res.status(502).json({error:'The recipe service is unavailable. Please try again.'});}
});
const router=express.Router();
router.use((req,res,next)=>mongoose.connection.readyState===1?next():res.status(503).json({error:'MongoDB is not connected. Configure MONGODB_URI to save or view favorites.'}));
router.get('/',async(req,res)=>res.json({favorites:await Favorite.find().sort({createdAt:-1}).lean()}));
router.post('/',async(req,res)=>{
 const {mealId,name,image,category}=req.body||{};
 if(typeof mealId!=='string'||!/^\d+$/.test(mealId)||typeof name!=='string'||!name.trim()||name.length>200 || (image!==undefined&&(typeof image!=='string'||image.length>1000)) || (category!==undefined&&(typeof category!=='string'||category.length>100))) return res.status(400).json({error:'Provide a numeric mealId and a name (1–200 characters). Image and category must be text.'});
 const favorite=await Favorite.create({mealId,name,image,category});
 res.status(201).json({favorite});
});
app.use('/api/favorites',router);
app.use((req,res)=>res.status(404).json({error:'API route not found.'}));
app.use((err,req,res,next)=>{
 if(err.code===11000) return res.status(409).json({error:'This recipe is already saved.'});
 if(err.name==='ValidationError'||err.type==='entity.parse.failed') return res.status(400).json({error:'Invalid request data.'});
 if(err.type==='entity.too.large') return res.status(413).json({error:'Request is too large.'});
 console.error(err.message);res.status(500).json({error:'An unexpected server error occurred.'});
});
