const soma = (...valores) => {
    const somar = val => {
        let total = 0;
        for (let v of val) {
            total += v;
        }
        return total;
    };

    return somar(valores);
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

valor = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

console.log(soma(...valor)); // 231