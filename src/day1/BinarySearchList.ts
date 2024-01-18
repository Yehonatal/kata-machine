export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] > needle) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
}
