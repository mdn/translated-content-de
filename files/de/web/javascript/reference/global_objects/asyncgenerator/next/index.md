---
title: AsyncGenerator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`next()`**-Methode von {{jsxref("AsyncGenerator")}}-Instanzen gibt den nächsten Wert in der Sequenz zurück.

## Syntax

```js-nolint
next()
next(value)
```

### Parameter

- `value` {{optional_inline}}
  - : Ein optionaler Wert, der verwendet wird, um den internen Zustand des Generators zu ändern. Ein an die `next()`-Methode übergebener Wert wird von `yield` empfangen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das, wenn es aufgelöst wird, ein {{jsxref("Object")}} mit zwei Eigenschaften zurückgibt:

- `done`
  - : Ein boolescher Wert:
    - `true`, wenn der Generator über das Ende seines Kontrollflusses hinaus ist. In diesem Fall gibt `value` den _Rückgabewert_ des Generators an (der undefiniert sein kann).
    - `false`, wenn der Generator in der Lage ist, weitere Werte zu erzeugen.
- `value`
  - : Jeder von dem Generator zurückgegebene oder erzeugte JavaScript-Wert.

## Beispiele

### Verwendung von next()

Das folgende Beispiel zeigt einen einfachen Generator und das Objekt, das die `next`-Methode zurückgibt:

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
asyncGen.next().then((res) => console.log(res)); // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 3, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: undefined, done: true }
```

### Werte an den Generator senden

In diesem Beispiel wird `next` mit einem Wert aufgerufen.

> [!NOTE]
> Der erste Aufruf protokolliert nichts, da der Generator zunächst nichts liefert.

```js
// An async task. Pretend it's doing something more useful
// in practice.
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function* createAsyncGenerator() {
  while (true) {
    await sleep(500);
    const value = yield;
    console.log(value);
  }
}

async function main() {
  const asyncGen = createAsyncGenerator();
  // No log at this step: the first value sent through `next` is lost
  console.log(await asyncGen.next(1)); // { value: undefined, done: false }
  // Logs 2: the value sent through `next`
  console.log(await asyncGen.next(2)); // { value: undefined, done: false }
}

main();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
