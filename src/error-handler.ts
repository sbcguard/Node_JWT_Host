import { NextFunction, Request, Response } from 'express';
import { ErrorCode, HttpException } from './exceptions/root';
import { InternalException } from './exceptions/internal-exception';
import logger from './logger/logger';

export const errorHandler = (method: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next);
    } catch (error: any) {
      // If error is not an instance of HttpException, wrap it into InternalException
      const exception =
        error instanceof HttpException
          ? error
          : new InternalException(
              'Internal Server Error.',
              error,
              ErrorCode.INTERNAL_EXCEPTION
            );
      // Log the error details
      logger.error(
        `Error occurred: ${exception.message}, Status Code: ${exception.statusCode}, Stack: ${exception.stack}`
      );
      next(exception);
    }
  };
};
