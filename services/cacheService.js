const cache = new Map();

const TTL = 60 * 1000; 

function get(key) {
    const cached = cache.get(key);

    if (!cached) {
        return null;
    }

    const age = Date.now() - cached.createdAt;

    if (age > TTL) {
        cache.delete(key);

        return null;
    }

    return cached;
}

function set(key, value) {
    cache.set(key, {
        value: value,
        createdAt: Date.now()
    });
}

function deleteAll() {
    cache.clear();
}

module.exports = {
    get,
    set,
    deleteAll
};