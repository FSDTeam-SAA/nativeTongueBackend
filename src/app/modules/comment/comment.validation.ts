import { z } from 'zod';

const createCommentValidationSchema = z.object({
  body: z.object({
    post: z.string({
      required_error: 'Post ID is required',
    }),
    content: z.string({
      required_error: 'Content is required',
    }),
  }),
});

export const CommentValidation = {
  createCommentValidationSchema,
};
