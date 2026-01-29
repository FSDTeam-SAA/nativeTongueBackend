import express from 'express';
import auth from '../../middlewares/auth';
import { userRole } from '../user/user.constant';
import { CommentController } from './comment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CommentValidation } from './comment.validation';

const router = express.Router();

router.post(
  '/',
  auth(userRole.admin, userRole.client),
  validateRequest(CommentValidation.createCommentValidationSchema),
  CommentController.createComment,
);

export const CommentRoutes = router;
