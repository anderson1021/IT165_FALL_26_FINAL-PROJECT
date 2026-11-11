import 'dotenv/config';
import mongoose from 'mongoose';
import {app} from './app.js';
if(process.env.MONGODB_URI){
 try {await mongoose.connect(process.env.MONGODB_URI,{serverSelectionTimeoutMS:5000});console.log('MongoDB connected');}
 catch(err){console.error('MongoDB connection failed:',err.message);}
} else console.log('MONGODB_URI not set; health and recipe endpoints remain available.');
const server=app.listen(process.env.PORT||5000,()=>console.log('API running on port '+(process.env.PORT||5000)));
async function shutdown(){server.close();await mongoose.disconnect();process.exit(0);}
process.on('SIGINT',shutdown);process.on('SIGTERM',shutdown);
