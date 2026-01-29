import httpStatus from 'http-status';
import { Post } from '../post/post.model';
import { IComment } from './comment.interface';
import { Comment } from './comment.model';
import AppError from '../../error/appError';

const createComment = async (payload: IComment) => {
  const commentPost = await Post.findById(payload.post);

  if (!commentPost) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
  }

  const result = await Comment.create(payload);
  return result;
};

export const CommentService = {
  createComment,
};
