const loop0 = (str: string) => {
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        // console.log(i, str[i])
        for (let j = i + 1; j < str.length; j++) {
            // console.log(j, str[j])
            if (str[i] === str[j]) return false
        }
    }
    return true
}

const loop1 = (str: string) => {
    const tes = new Set(str.toLowerCase())
    console.log(tes.size)

    return new Set(str.toLowerCase()).size === str.length
}

console.log(loop1('haloHALO'))
// console.log(loop1('abcde'))
