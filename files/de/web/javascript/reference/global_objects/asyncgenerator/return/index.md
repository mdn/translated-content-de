---
title: AsyncGenerator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/return
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Die **`return()`**-Methode von {{jsxref("AsyncGenerator")}}-Instanzen wirkt so, als ob eine `return`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird. Dies beendet den Generator und ermöglicht es dem Generator, alle Aufräumarbeiten durchzuführen, wenn sie mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block kombiniert wird.

## Syntax

```js-nolint
asyncGeneratorInstance.return()
asyncGeneratorInstance.return(value)
```

### Parameter

- `value` {{optional_inline}}
  - : Der zurückzugebende Wert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Object")}} mit zwei Eigenschaften aufgelöst wird:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn der Kontrollfluss der Generatorfunktion das Ende nicht erreicht hat und mehr Werte erzeugen kann. Dies kann nur passieren, wenn das `return` in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) abgefangen wird und es weitere `yield`-Ausdrücke im `finally`-Block gibt.
- `value`
  - : Der Wert, der als Argument übergeben wird, oder, wenn der `yield`-Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingefasst ist, der Wert, der aus dem `finally`-Block ge-yielded/zurückgegeben wird.

## Beschreibung

Die `return()`-Methode kann, wenn sie aufgerufen wird, so gesehen werden, als ob eine `return value;`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, wobei `value` der Wert ist, der an die `return()`-Methode übergeben wird. Daher wird im typischen Ablauf durch den Aufruf von `return(value)` `{ done: true, value: value }` zurückgegeben. Wird der `yield`-Ausdruck jedoch in einem `try...finally`-Block eingefasst, verlässt der Kontrollfluss nicht den Funktionskörper, sondern geht stattdessen zum `finally`-Block über. In diesem Fall kann der zurückgegebene Wert unterschiedlich sein, und `done` kann sogar `false` sein, wenn es weitere `yield`-Ausdrücke im `finally`-Block gibt.

## Beispiele

### Verwendung von return()

Das folgende Beispiel zeigt einen asynchronen Generator und die `return`-Methode.

```js
// An async task. Pretend it's doing something more useful
// in practice.
function delayedValue(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* createAsyncGenerator() {
  yield delayedValue(500, 1);
  yield delayedValue(500, 2);
  yield delayedValue(500, 3);
}

const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res)); // { value: 1, done: false }
asyncGen.return("foo").then((res) => console.log(res)); // { value: "foo", done: true }
asyncGen.next().then((res) => console.log(res)); // { value: undefined, done: true }
```

### Verwendung von return(), nachdem ein Generator abgeschlossen ist

Wenn kein `value`-Argument an die `return()`-Methode übergeben wird, wird das Promise so aufgelöst wie wenn die [next()](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next)-Methode aufgerufen worden wäre. In diesem Beispiel ist der Generator abgeschlossen, sodass der zurückgegebene Wert `undefined` ist.

`return()` kann auch aufgerufen werden, nachdem sich der Generator in einem "abgeschlossenen" Zustand befindet, jedoch bleibt der Generator in diesem Zustand.

```js
async function* createAsyncGenerator() {
  yield Promise.resolve(1);
  yield await Promise.resolve(2);
  yield 3;
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res)); // { value: 1, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 3, done: false }
// value is returned undefined, as no value is passed and generator is 'done'
asyncGen.return().then((res) => console.log(res)); // { value: undefined, done: true }
// we can still return a value once the generator is complete
asyncGen.return(1).then((res) => console.log(res)); // { value: 1, done: true }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
