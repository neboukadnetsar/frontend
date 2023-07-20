"use strict";

export function addApiPrefixToPath(path) {
    const cacheKey = + new Date();
    return 'https://rodrigo-12jp.onrender.com' + path + "?v=" + cacheKey;
}
