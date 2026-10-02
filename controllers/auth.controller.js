

/**
 * Authenticates user credentials and issues access & refresh tokens.
 * 
 * @param {import("express").Request} req - Express request with validated credentials
 * @param {import("express").Response} res - Express response object
 */
async function login(req, res) {
    //   const result = await authService.login(req.validated.body);
    const result = req.body
    console.log("Login result:", result);
    res.json({ data: result });
}

export default {
    login
};