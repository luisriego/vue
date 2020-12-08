import { getAllCategories } from './page-context';

/**
 * @returns Promise
 */
export function fetchCategories() {
    return new Promise((resolve, reject) => {
        resolve({
            data: {
                'hydra:member': getAllCategories(),
            },
        });
    });
}
