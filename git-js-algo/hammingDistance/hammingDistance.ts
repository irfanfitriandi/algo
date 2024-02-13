const hammingDistance = (a: string, b: string) => {
    if (a.length !== b.length) {
        throw new Error('asu')
    }
    let res = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            res++
        }
    }
    return res
}

export default hammingDistance
