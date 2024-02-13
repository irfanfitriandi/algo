function isPangram(string: string) {
    //...
    const len = new Set(string.toLowerCase()).size
    return len >= 26
}

console.log(isPangram('thequickbrownfoxjumpsoverthelazydog'))
console.log(isPangram('The quick brown fox jumps over the lazyg.'))
console.log(isPangram('The quick brown fox jumps over the la'))
