// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
function getLucky(s: string, k: number): number | string {
    let integer: any = s.split("").reduce((acc: string, char: string) => {
        return acc + (char.charCodeAt(0) - 96);
    }, '');
    while (k > 0) {
        integer = integer
            .toString()
            .split("")
            .reduce((sum: number, num: string): number => {
                return Number(sum + (+num));
            }, 0);
        k--;
    }
    return integer;
}

console.log(getLucky('dbvmfhnttvr', 5));
