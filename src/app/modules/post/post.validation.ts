import { z } from 'zod';

const createPostValidationSchema = z.object({
  body: z.object({
    content: z.string().min(1, 'Content is required'),
    tag: z.enum(['sport', 'bet', 'odds', 'stake', 'conf']),
  }),
});

export const PostValidation = {
  createPostValidationSchema,
};
