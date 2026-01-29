import { Types } from 'mongoose';
import { TAG_TYPES } from './tag.constant';

export interface IPost {
  user: Types.ObjectId;
  content: string;
  tag: keyof typeof TAG_TYPES;
  likes: number;
  isDeleted: boolean;
}
