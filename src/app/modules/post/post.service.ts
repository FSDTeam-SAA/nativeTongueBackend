import pagination, { IOption } from '../../helper/pagination';
import { IPost } from './post.interface';
import { Post } from './post.model';

const createPost = async (payload: IPost) => {
  const result = await Post.create(payload);
  return result;
};

const getAllPosts = async (query: IOption) => {
  const { limit, skip, sortBy } = pagination(query);

  const result = await Post.find()
    .populate('user', 'firstName lastName')
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        select: 'firstName lastName',
      },
    })
    .sort({ [sortBy]: -1 })
    .skip(skip)
    .limit(limit);
  return result;
};

export const PostService = {
  createPost,
  getAllPosts,
};
