import { Types } from 'mongoose';

export type IPost = {
  user: Types.ObjectId;
  content: string;
  sport: string;
  betType: string;
  odds: string;
  stake: string;
  confidence: number;
  reasoning: string;
  likes: number;
  isDeleted: boolean;
};
