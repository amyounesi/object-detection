
import mongoose from 'mongoose';
import Position from '../../model/position';

export default defineEventHandler(async() => {
  mongoose.connect("mongodb://localhost:27017/OD")

  return await Position.find({});
  
})