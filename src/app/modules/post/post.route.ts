import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PostValidation } from './post.validation';
import { PostController } from './post.controller';
import { userRole } from '../user/user.constant';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth(userRole.admin, userRole.client),
  validateRequest(PostValidation.createPostValidationSchema),
  PostController.createPost,
);
router.get('/', PostController.getAllPosts);

export const PostRoutes = router;
