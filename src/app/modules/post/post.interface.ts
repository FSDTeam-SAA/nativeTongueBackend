import { Types } from 'mongoose';

export type IPost = {
  user: Types.ObjectId;
  content: string;
  tag: string;
  sport: string;
  betType: string;
  summary: string;
  odds: string;
  stake: string;
  confidence: number;
  reasoning: string;
  likes: number;
  isDeleted: boolean;
};
