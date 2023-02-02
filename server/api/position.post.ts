import mongoose from 'mongoose';
import Position from '../../model/position';

export default defineEventHandler(async(e) => {
  const body = await readBody(e)
  mongoose.connect("mongodb://localhost:27017/OD")
  const newPos = new Position({
    ...body,
    Image:'String'
  });
  await newPos.save();
  return newPos;
})
