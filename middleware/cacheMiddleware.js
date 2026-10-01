const cacheService = require('../services/cacheService');

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl;

    const cached = cacheService.get(key);

    if (cached) {
        res.set('X-Cache', 'HIT');

        return res.json(cached.value);
    }

    res.set('X-Cache', 'MISS');

    const originalJson = res.json.bind(res);

    res.json = (data) => {
        cacheService.set(key, data);

        return originalJson(data);
    };

    next();
}

module.exports = cacheMiddleware;