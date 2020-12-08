/**
 * Returns the current category id that's set by the server.
 *
 * @returns {string|null}
 * */
export function getCurrentCategoryId() {
    return window.currentCategoryId;
}

/**
 * Returns all categories that's set by the server.
 *
 * @returns {[]|null}
 * */
export function getAllCategories() {
    return window.categories;
}
