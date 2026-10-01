const cache = new Map();

function get(key) {
    return cache.get(key);
}

function set(key, value) {
    cache.set(key, {
        value,
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