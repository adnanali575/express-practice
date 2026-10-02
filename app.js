const express = require('express');
const authRoutes = require('./authRoutes/auth.routes');

const createApp = () => {
    const app = express();
    const apiRouter = express.Router();

    app.use(express.json());
    apiRouter.use('/api', authRoutes);

    app.use(apiRouter);
    return app;
};

module.exports = createApp;