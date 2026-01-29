import { z } from 'zod';

const createPostValidationSchema = z.object({
  body: z.object({
    content: z.string({ required_error: 'Content is required' }),
    tag: z.string({ required_error: 'Tag is required' }),
    sport: z.string({ required_error: 'Sport is required' }),
    betType: z.string({ required_error: 'Bet Type is required' }),
    summary: z.string({ required_error: 'Summary is required' }),
    odds: z.string({ required_error: 'Odds is required' }),
    stake: z.string({ required_error: 'Stake is required' }),
    confidence: z.number({ required_error: 'Confidence is required' }),
    reasoning: z.string({ required_error: 'Reasoning is required' }),
  }),
});

const updatePostValidationSchema = z.object({
  body: z.object({
    content: z.string().optional(),
    tag: z.string().optional(),
    sport: z.string().optional(),
    betType: z.string().optional(),
    summary: z.string().optional(),
    odds: z.string().optional(),
    stake: z.string().optional(),
    confidence: z.number().optional(),
    reasoning: z.string().optional(),
  }),
});

export const PostValidation = {
  createPostValidationSchema,
  updatePostValidationSchema,
};
