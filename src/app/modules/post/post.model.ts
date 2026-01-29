import { Schema, model } from 'mongoose';
import { IPost } from './post.interface';
import { TAG_TYPES } from './tag.constant';

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
    tag: {
      type: String,
      enum: Object.keys(TAG_TYPES),
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
