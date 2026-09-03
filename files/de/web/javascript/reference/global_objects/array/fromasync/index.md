---
title: Array.fromAsync()
short-title: fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: f34bebcf0fec2d69b96bb313c37f7e67b0355830
---

Die statische Methode **`Array.fromAsync()`** erstellt eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), einem [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder einem [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt.

## Syntax

```js-nolint
Array.fromAsync(items)
Array.fromAsync(items, mapFn)
Array.fromAsync(items, mapFn, thisArg)
```

### Parameter

- `items`
  - : Ein asynchrones Iterable, Iterable oder array-ähnliches Objekt, das in ein Array konvertiert werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die auf jedes Element des Arrays angewendet wird. Wenn bereitgestellt, wird jeder Wert, der dem Array hinzugefügt werden soll, zuerst durch diese Funktion geleitet, und der Rückgabewert von `mapFn` wird stattdessen dem Array hinzugefügt (nachdem er [awaited](/de/docs/Web/JavaScript/Reference/Operators/await) wurde). Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird. Wenn `items` ein synchrones Iterable oder array-ähnliches Objekt ist, werden alle Elemente zuerst [awaited](/de/docs/Web/JavaScript/Reference/Operators/await), und `element` wird nie ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) sein. Wenn `items` ein asynchrones Iterable ist, wird jeder erzeugte Wert unverändert übergeben.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` beim Ausführen von `mapFn` verwendet werden soll.

### Rückgabewert

Ein neues {{jsxref("Promise")}}, dessen Erfüllungswert eine neue {{jsxref("Array")}}-Instanz ist.

## Beschreibung

`Array.fromAsync()` ermöglicht es, Arrays zu erstellen aus:

- [asynchronen Iterable-Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) (Objekte wie [`ReadableStream`](/de/docs/Web/API/ReadableStream) und {{jsxref("AsyncGenerator")}}); oder, wenn das Objekt nicht asynchron iterierbar ist,
- [iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (Objekte wie {{jsxref("Map")}} und {{jsxref("Set")}}); oder, wenn das Objekt nicht iterierbar ist,
- array-ähnlichen Objekten (Objekte mit einer `length`-Eigenschaft und indizierten Elementen).

`Array.fromAsync()` iteriert das asynchrone Iterable auf eine Art und Weise, die sehr ähnlich zu {{jsxref("Statements/for-await...of", "for await...of")}} ist. `Array.fromAsync(items)` ist im Allgemeinen äquivalent zu folgendem Code, wenn `items` ein asynchrones Iterable oder synchrones Iterable ist:

```js
const result = [];
for await (const element of items) {
  result.push(element);
}
```

`Array.fromAsync()` ist in Bezug auf das Verhalten fast gleichwertig mit {{jsxref("Array.from()")}}, außer den folgenden Unterschieden:

- `Array.fromAsync()` verarbeitet asynchrone Iterable-Objekte.
- `Array.fromAsync()` gibt ein {{jsxref("Promise")}} zurück, das sich zum Array-Instanz erfüllt.
- Wenn `Array.fromAsync()` mit einem nicht-asynchronen Iterable-Objekt aufgerufen wird, wird jedes Element, das zum Array hinzugefügt werden soll, zuerst [awaited](/de/docs/Web/JavaScript/Reference/Operators/await).
- Wenn ein `mapFn` bereitgestellt wird, wird dessen Ausgabe ebenfalls intern awaited.

`Array.fromAsync()` und {{jsxref("Promise.all()")}} können beide ein Iterable von Promises in ein Promise eines Arrays umwandeln. Es gibt jedoch zwei wesentliche Unterschiede:

- `Array.fromAsync()` wartet auf jeden Wert, der aus dem Objekt erzeugt wird, nacheinander. `Promise.all()` wartet auf alle Werte gleichzeitig.
- `Array.fromAsync()` iteriert das Iterable träge und holt nicht den nächsten Wert, bevor der aktuelle geklärt ist. `Promise.all()` holt alle Werte im Voraus und wartet auf sie alle.

## Beispiele

### Array aus einem asynchronen Iterable

```js
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]
```

Wenn `items` ein asynchrones Iterable ist, bei dem jeder Ergebniswert auch ein Promise ist, werden diese Promises ohne Awaiting dem resultierenden Array hinzugefügt. Dies ist konsistent mit dem Verhalten von `for await...of`.

```js
function createAsyncIter() {
  let i = 0;
  return {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (i > 2) return { done: true };
          i++;
          return { value: Promise.resolve(i), done: false };
        },
      };
    },
  };
}

Array.fromAsync(createAsyncIter()).then((array) => console.log(array));
// (3) [Promise, Promise, Promise]
```

> [!NOTE]
> In der Praxis werden Sie selten ein asynchrones Iterable finden, das Promises liefert, da, wenn Sie es mit einer [asynchronen Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/async_function*) implementieren, der [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Ausdruck automatisch Promises entpackt.

### Array aus einem synchronen Iterable

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### Array aus einem synchronen Iterable, das Promises liefert

```js
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### Array aus einem array-ähnlichen Objekt von Promises

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### Verwendung von mapFn mit einem synchronen Iterable

Wenn `items` ein synchrones Iterable oder array-ähnliches Objekt ist, werden sowohl der Eingang als auch die Ausgabe von `mapFn` intern von `Array.fromAsync()` awaited.

```js
function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2),
).then((array) => console.log(array));
// [2, 4, 6]
```

### Verwendung von mapFn mit einem asynchronen Iterable

Wenn `items` ein asynchrones Iterable ist, wird der Eingang zu `mapFn` nicht awaited, die Ausgabe jedoch schon. Unter Verwendung der gleichen Funktion `createAsyncIter` wie oben:

```js
Array.fromAsync(createAsyncIter(), async (element) => (await element) * 2).then(
  (array) => console.log(array),
);
// [2, 4, 6]
```

Interessanterweise bedeutet dies, dass `Array.fromAsync(createAsyncIter())` nicht äquivalent zu `Array.fromAsync(createAsyncIter(), (element) => element)` ist, da letzteres jeden erzeugten Wert awaited, während ersteres dies nicht tut.

```js
Array.fromAsync(createAsyncIter(), (element) => element).then((array) =>
  console.log(array),
);
// [1, 2, 3]
```

### Vergleich mit Promise.all()

`Array.fromAsync()` wartet auf jeden Wert, der aus dem Objekt erzeugt wird, nacheinander. `Promise.all()` wartet auf alle Werte gleichzeitig.

```js
function* makeIterableOfPromises() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() time");
  await Array.fromAsync(makeIterableOfPromises());
  console.timeEnd("Array.fromAsync() time");
  // Array.fromAsync() time: 503.610ms

  console.time("Promise.all() time");
  await Promise.all(makeIterableOfPromises());
  console.timeEnd("Promise.all() time");
  // Promise.all() time: 101.728ms
})();
```

### Schluss von synchronen Iterables bei Ablehnung

Ähnlich wie bei [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of#iterating_over_sync_iterables_and_generators), wenn das Objekt, das iteriert wird, ein synchrones Iterable ist und ein erzeugtes Promise abgelehnt wird, wird die Methode `return()` des zugrunde liegenden Iterators aufgerufen, falls vorhanden, um dem Iterator zu ermöglichen, Bereinigungen vorzunehmen.

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield Promise.reject(new Error("error"));
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    await Array.fromAsync(generatorWithRejectedPromises());
  } catch (e) {
    console.log("caught", e);
  }
})();
// called finally
// caught Error: error
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array.fromAsync` in `core-js`](https://github.com/zloirock/core-js#arrayfromasync)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
