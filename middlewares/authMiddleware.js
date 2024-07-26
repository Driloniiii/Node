const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearers ', '');
    if (!token) return res.status(401).json({error: 'Acces Denied'});

    try { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch(error) {
        res.status(400).json({error: 'Invalid token'})
    }
};

module.exports = authMiddleware;