const cacheService = require('../services/cacheService');

function invalidateCache(req, res, next) {
    const originalJson = res.json.bind(res);

    res.json = (data) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
            cacheService.deleteAll();
        }

        return originalJson(data);
    };

    next();
}

module.exports = invalidateCache;