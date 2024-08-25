import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { PORT } from './secrets';
import rootRouter from './routes';
import logger from './logger/logger';

const app: Express = express();
app.use(express.json());

app.use(cookieParser());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api', rootRouter);

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
