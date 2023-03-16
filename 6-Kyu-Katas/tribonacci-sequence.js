function tribonacci(signature, n) {

    if (n === 0) return []

    else if (n <= 3)
        return signature.splice(0, n)

    else {
        let result = [...signature]
        for (let i = 0; i < n - 3; i++) {
            result.push(result[i] + result[i + 1] + result[i + 2])
        }
        return result
    }

}