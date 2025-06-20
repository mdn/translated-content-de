---
title: AsyncGenerator.prototype.return()
short-title: return()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/return
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`return()`** Methode von {{jsxref("AsyncGenerator")}} Instanzen wirkt so, als ob ein `return` Statement an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, wodurch der Generator beendet wird und es ihm ermöglicht wird, Säuberungsoperationen durchzuführen, wenn sie mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) Block kombiniert wird.

## Syntax

```js-nolint
asyncGeneratorInstance.return()
asyncGeneratorInstance.return(value)
```

### Parameter

- `value` {{optional_inline}}
  - : Der Wert, der zurückgegeben werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Object")}} aufgelöst wird, das zwei Eigenschaften enthält:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn der Kontrollfluss der Generatorfunktion das Ende noch nicht erreicht hat und weitere Werte erzeugen kann. Dies kann nur passieren, wenn das `return` in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) erfasst wird und es mehr `yield` Ausdrücke im `finally` Block gibt.
- `value`
  - : Der Wert, der als Argument übergeben wird, oder, wenn der `yield` Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingeschlossen ist, der Wert, der aus dem `finally` Block erzeugt/zurückgegeben wird.

## Beschreibung

Die `return()` Methode, wenn sie aufgerufen wird, kann so gesehen werden, als ob ein `return value;` Statement im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, wobei `value` der Wert ist, der an die `return()` Methode übergeben wird. Daher wird in einem typischen Ablauf das Aufrufen von `return(value)` zurückgeben `{ done: true, value: value }`. Wenn jedoch der `yield` Ausdruck in einem `try...finally` Block eingeschlossen ist, verlässt der Kontrollfluss den Funktionskörper nicht, sondern geht stattdessen zum `finally` Block über. In diesem Fall kann der zurückgegebene Wert unterschiedlich sein, und `done` kann sogar `false` sein, wenn es mehr `yield` Ausdrücke innerhalb des `finally` Blocks gibt.

## Beispiele

### Verwendung von return()

Das folgende Beispiel zeigt einen async Generator und die `return` Methode.

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

Wenn kein `value` Argument an die `return()` Methode übergeben wird, wird das Versprechen so aufgelöst, als ob die [next()](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next) Methode aufgerufen wurde. In diesem Beispiel ist der Generator abgeschlossen, sodass der zurückgegebene Wert `undefined` ist.

`return()` kann auch noch aufgerufen werden, nachdem der Generator in einem "abgeschlossen" Zustand ist, jedoch bleibt der Generator in diesem Zustand.

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
