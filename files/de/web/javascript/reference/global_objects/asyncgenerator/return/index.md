---
title: AsyncGenerator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/return
l10n:
  sourceCommit: ccaef74d1a4436097c9395f907ddbb2d477efda4
---

{{JSRef}}

Die Methode **`return()`** von {{jsxref("AsyncGenerator")}}-Instanzen wirkt so, als ob eine `return`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird. Dadurch wird der Generator beendet und ermöglicht es dem Generator, Aufräumarbeiten durchzuführen, wenn er mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block kombiniert wird.

## Syntax

```js-nolint
asyncGeneratorInstance.return()
asyncGeneratorInstance.return(value)
```

### Parameter

- `value` {{optional_inline}}
  - : Der Wert, der zurückgegeben werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{jsxref("Object")}} mit zwei Eigenschaften aufgelöst wird:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn der Kontrollfluss der Generatorfunktion das Ende nicht erreicht hat und weitere Werte erzeugen kann. Dies kann nur passieren, wenn das `return` in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) erfasst wird und es weitere `yield`-Ausdrücke im `finally`-Block gibt.
- `value`
  - : Der Wert, der als Argument angegeben wurde, oder, wenn der `yield`-Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) eingeschlossen ist, der aus dem `finally`-Block zurückgegebene/geyieldete Wert.

## Beschreibung

Die `return()`-Methode, wenn sie aufgerufen wird, kann so gesehen werden, als ob eine `return wert;`-Anweisung im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, wobei `wert` der an die `return()`-Methode übergebene Wert ist. Daher wird bei einem typischen Ablauf durch den Aufruf von `return(wert)` `{ done: true, value: wert }` zurückgegeben. Wenn jedoch der `yield`-Ausdruck in einem `try...finally`-Block eingeschlossen ist, verlässt der Kontrollfluss nicht den Funktionskörper, sondern geht weiter in den `finally`-Block. In diesem Fall kann der zurückgegebene Wert unterschiedlich sein, und `done` kann sogar `false` sein, wenn es weitere `yield`-Ausdrücke innerhalb des `finally`-Blocks gibt.

## Beispiele

### Verwendung von return()

Das folgende Beispiel zeigt einen einfachen asynchronen Generator und die `return`-Methode.

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

### Verwendung von return() nachdem ein Generator abgeschlossen ist

Wenn kein `value`-Argument an die Methode `return()` übergeben wird, wird das Promise aufgelöst, als ob die Methode [next()](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next) aufgerufen worden wäre. In diesem Beispiel ist der Generator abgeschlossen, daher ist der zurückgegebene Wert `undefined`.

`return()` kann auch nach dem Abschluss des Generators aufgerufen werden, der Generator bleibt jedoch in diesem Zustand.

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
