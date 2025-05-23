---
title: Array.fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Die statische Methode **`Array.fromAsync()`** erstellt eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), einem [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder einem [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt.

## Syntax

```js-nolint
Array.fromAsync(arrayLike)
Array.fromAsync(arrayLike, mapFn)
Array.fromAsync(arrayLike, mapFn, thisArg)
```

### Parameter

- `arrayLike`
  - : Ein asynchrones Iterable, Iterable oder array-ähnliches Objekt, das in ein Array konvertiert werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die auf jedes Element des Arrays angewendet wird. Falls angegeben, wird jeder Wert, der zum Array hinzugefügt wird, zuerst durch diese Funktion geleitet, und der Rückgabewert von `mapFn` wird dem Array hinzugefügt (nachdem er [erwartet](/de/docs/Web/JavaScript/Reference/Operators/await) wurde). Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird. Da alle Elemente zuerst [erwartet](/de/docs/Web/JavaScript/Reference/Operators/await) werden, wird dieser Wert niemals ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) sein.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `mapFn` ausgeführt wird.

### Rückgabewert

Ein neues {{jsxref("Promise")}}, dessen Erfüllungswert eine neue {{jsxref("Array")}}-Instanz ist.

## Beschreibung

`Array.fromAsync()` ermöglicht die Erstellung von Arrays aus:

- [Asynchronen iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) (Objekte wie z.B. [`ReadableStream`](/de/docs/Web/API/ReadableStream) und {{jsxref("AsyncGenerator")}}); oder, wenn das Objekt nicht asynchron iterierbar ist,
- [Iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (Objekte wie z.B. {{jsxref("Map")}} und {{jsxref("Set")}}); oder, wenn das Objekt nicht iterierbar ist,
- Array-ähnlichen Objekten (Objekte mit einer `length`-Eigenschaft und indizierten Elementen).

`Array.fromAsync()` iteriert das asynchrone Iterable auf eine Weise, die der von {{jsxref("Statements/for-await...of", "for await...of")}} sehr ähnlich ist. `Array.fromAsync()` ist in Bezug auf das Verhalten fast gleichwertig zu {{jsxref("Array.from()")}}, mit den folgenden Unterschieden:

- `Array.fromAsync()` behandelt asynchrone iterierbare Objekte.
- `Array.fromAsync()` gibt ein {{jsxref("Promise")}} zurück, das zur Array-Instanz erfüllt wird.
- Wenn `Array.fromAsync()` mit einem nicht-asynchronen iterierbaren Objekt aufgerufen wird, wird jedes Element, das zum Array hinzugefügt werden soll, zuerst [erwartet](/de/docs/Web/JavaScript/Reference/Operators/await).
- Wenn ein `mapFn` angegeben ist, werden dessen Eingaben und Ausgaben intern erwartet.

`Array.fromAsync()` und {{jsxref("Promise.all()")}} können beide ein Iterable von Promises in ein Promise eines Arrays umwandeln. Es gibt jedoch zwei wesentliche Unterschiede:

- `Array.fromAsync()` wartet jeden Wert ab, der vom Objekt sequentiell geliefert wird. `Promise.all()` wartet alle Werte gleichzeitig ab.
- `Array.fromAsync()` iteriert das Iterable lazy und ruft den nächsten Wert erst ab, wenn der aktuelle erledigt ist. `Promise.all()` ruft alle Werte im Voraus ab und wartet auf alle.

## Beispiele

### Array von einem asynchronen Iterable

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

### Array von einem synchronen Iterable

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### Array von einem synchronen Iterable, das Promises liefert

```js
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### Array von einem array-ähnlichen Objekt von Promises

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### Verwendung von mapFn

Sowohl die Eingaben als auch die Ausgaben von `mapFn` werden intern von `Array.fromAsync()` erwartet.

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

### Vergleich mit Promise.all()

`Array.fromAsync()` wartet jeden Wert ab, der vom Objekt sequentiell geliefert wird. `Promise.all()` wartet alle Werte gleichzeitig ab.

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

### Keine Fehlerbehandlung für synchrone Iterables

Ähnlich wie bei [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of#iterating_over_sync_iterables_and_generators), wenn das zu durchlaufende Objekt ein synchrones Iterable ist und während der Iteration ein Fehler auftritt, wird die `return()`-Methode des zugrunde liegenden Iterators nicht aufgerufen, sodass der Iterator nicht geschlossen wird.

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
// caught Error: error
// No "called finally" message
```

Wenn Sie den Iterator schließen müssen, sollten Sie stattdessen eine {{jsxref("Statements/for...of", "for...of")}}-Schleife verwenden und jeden Wert selbst erwarten.

```js
(async () => {
  const arr = [];
  try {
    for (const val of generatorWithRejectedPromises()) {
      arr.push(await val);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// called finally
// caught 3
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
