function* cores() {
    yield* ['vermelho', 'verde', 'azul'];
}

const gen = cores();

console.log(gen.next().value); // { value: 'vermelho', done: false }