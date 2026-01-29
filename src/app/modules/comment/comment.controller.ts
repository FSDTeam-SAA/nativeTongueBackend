import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CommentService } from './comment.service';

const createComment = catchAsync(async (req, res) => {
  const userId = req.user.id;
  req.body.user = userId;

  const result = await CommentService.createComment(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Comment created successfully',
    data: result,
  });
});

export const CommentController = {
  createComment,
};
