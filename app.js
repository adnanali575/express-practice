import express from 'express';
import authRoutes from './authRoutes/auth.routes.js';

const createApp = () => {
    const app = express();
    const apiRouter = express.Router();

    app.use(express.json());
    apiRouter.use('/api', authRoutes);

    app.use(apiRouter);
    return app;
};

export default createApp;