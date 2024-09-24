---
title: AsyncGenerator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/return
l10n:
  sourceCommit: ccaef74d1a4436097c9395f907ddbb2d477efda4
---

{{JSRef}}

Die **`return()`** Methode von {{jsxref("AsyncGenerator")}} Instanzen wirkt so, als ob eine `return` Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, was den Generator beendet und dem Generator erlaubt, alle Aufräumarbeiten durchzuführen, wenn sie mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) Block kombiniert wird.

## Syntax

```js-nolint
asyncGeneratorInstance.return()
asyncGeneratorInstance.return(value)
```

### Parameter

- `value` {{optional_inline}}
  - : Der zurückzugebende Wert.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem {{jsxref("Object")}} aufgelöst wird, das zwei Eigenschaften enthält:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Kontrollfluss der Generatorfunktion das Ende erreicht hat.
    - `false`, wenn der Kontrollfluss der Generatorfunktion das Ende nicht erreicht hat und noch mehr Werte erzeugen kann. Dies kann nur passieren, wenn das `return` in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) erfasst wird und im `finally` Block mehr `yield` Ausdrücke existieren.
- `value`
  - : Der Wert, der als Argument gegeben wird, oder, wenn der `yield` Ausdruck in einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) umschlossen ist, der Wert, der aus dem `finally` Block zurückgegeben/geyieldet wird.

## Beschreibung

Die `return()` Methode kann, wenn sie aufgerufen wird, so interpretiert werden, als ob eine `return value;` Anweisung im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, wobei `value` der Wert ist, der der `return()` Methode übergeben wird. Daher wird im normalen Ablauf durch das Aufrufen von `return(value)` `{ done: true, value: value }` zurückgegeben. Wenn jedoch der `yield` Ausdruck in einem `try...finally` Block umschlossen ist, verlässt der Kontrollfluss den Funktionskörper nicht, sondern geht stattdessen in den `finally` Block. In diesem Fall kann der zurückgegebene Wert anders sein, und `done` kann sogar `false` sein, wenn es im `finally` Block noch mehr `yield` Ausdrücke gibt.

## Beispiele

### Verwendung von return()

Das folgende Beispiel zeigt einen einfachen asynchronen Generator und die `return` Methode.

```js
// Eine asynchrone Aufgabe. Nehmen Sie an, dass sie in der Praxis etwas Nützlicheres tut.
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

Wenn kein `value` Argument an die `return()` Methode übergeben wird, wird das Promise so aufgelöst, als ob die [next()](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next) Methode aufgerufen wurde. In diesem Beispiel ist der Generator abgeschlossen, daher ist der zurückgegebene Wert `undefined`.

`return()` kann immer noch aufgerufen werden, nachdem der Generator im Zustand "abgeschlossen" ist, jedoch bleibt der Generator in diesem Zustand.

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
// Der Wert wird als undefined zurückgegeben, da kein Wert übergeben und der Generator 'abgeschlossen' ist
asyncGen.return().then((res) => console.log(res)); // { value: undefined, done: true }
// Wir können immer noch einen Wert zurückgeben, nachdem der Generator abgeschlossen ist
asyncGen.return(1).then((res) => console.log(res)); // { value: 1, done: true }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterators und Generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Anleitung
