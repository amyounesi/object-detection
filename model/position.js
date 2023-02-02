import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const positionSchema = new Schema({  
  Category:String,
  Longitude:Number,
  Latitude:Number,
  Condition:String,
  Image:String
});

const Position = model('Position', positionSchema);
export default Position;