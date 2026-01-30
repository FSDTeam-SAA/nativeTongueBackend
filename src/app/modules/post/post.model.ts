import { Schema, model } from 'mongoose';
import { IPost } from './post.interface';

const postSchema = new Schema<IPost>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    sport: {
      type: String,
      required: true,
    },
    betType: {
      type: String,
      required: true,
    },
    odds: {
      type: String,
      required: true,
    },
    stake: {
      type: String,
      required: true,
    },
    confidence: {
      type: Number,
      required: true,
    },
    reasoning: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

postSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'post',
});

export const Post = model<IPost>('Post', postSchema);
