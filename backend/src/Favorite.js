import mongoose from 'mongoose';
const schema = new mongoose.Schema({
 mealId: {type:String,required:true,unique:true,match:/^\d+$/},
 name: {type:String,required:true,trim:true,maxlength:200},
 image: {type:String,default:'',maxlength:1000},
 category: {type:String,default:'',maxlength:100}
}, {timestamps:true});
export default mongoose.model('Favorite',schema);
