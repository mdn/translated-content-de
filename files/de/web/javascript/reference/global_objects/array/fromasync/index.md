---
title: Array.fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: dd668beef72fc6230ae5a0cbf1b8d68fbdc1c1ae
---

{{JSRef}}

Die statische Methode **`Array.fromAsync()`** erstellt eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt.

## Syntax

```js-nolint
Array.fromAsync(arrayLike)
Array.fromAsync(arrayLike, mapFn)
Array.fromAsync(arrayLike, mapFn, thisArg)
```

### Parameter

- `arrayLike`
  - : Ein asynchrones iterierbares, iterierbares oder array-ähnliches Objekt, das in ein Array konvertiert werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die auf jedes Element des Arrays angewendet wird. Wenn angegeben, wird jeder Wert, der zum Array hinzugefügt werden soll, zuerst durch diese Funktion geleitet, und der Rückgabewert der Funktion `mapFn` wird dem Array hinzugefügt (nachdem es [awaited](/de/docs/Web/JavaScript/Reference/Operators/await) wurde). Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird. Da alle Elemente zuerst [awaited](/de/docs/Web/JavaScript/Reference/Operators/await) werden, wird dieser Wert niemals ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) sein.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `mapFn` ausgeführt wird.

### Rückgabewert

Ein neues {{jsxref("Promise")}}, dessen Erfüllungswert eine neue {{jsxref("Array")}}-Instanz ist.

## Beschreibung

`Array.fromAsync()` lässt Sie Arrays erstellen aus:

- [Asynchronen iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) (Objekten wie {{domxref("ReadableStream")}} und {{jsxref("AsyncGenerator")}}); oder, wenn das Objekt nicht asynchron iterierbar ist,
- [Iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (Objekten wie {{jsxref("Map")}} und {{jsxref("Set")}}); oder, wenn das Objekt nicht iterierbar ist,
- Array-ähnlichen Objekten (Objekten mit einer `length`-Eigenschaft und indizierten Elementen).

`Array.fromAsync()` iteriert das asynchrone iterierbare Objekt in einer Weise, die {{jsxref("Statements/for-await...of", "for await...of")}} sehr ähnlich ist. `Array.fromAsync()` ist fast gleichwertig mit {{jsxref("Array.from()")}} in Bezug auf das Verhalten, mit den folgenden Ausnahmen:

- `Array.fromAsync()` verarbeitet asynchrone iterierbare Objekte.
- `Array.fromAsync()` gibt ein {{jsxref("Promise")}} zurück, das auf die Array-Instanz erfüllt wird.
- Wenn `Array.fromAsync()` mit einem nicht asynchronen iterierbaren Objekt aufgerufen wird, wird jedes Element, das zum Array hinzugefügt werden soll, zuerst [awaited](/de/docs/Web/JavaScript/Reference/Operators/await).
- Wenn ein `mapFn` bereitgestellt wird, wird dessen Eingabe und Ausgabe intern awaited.

`Array.fromAsync()` und {{jsxref("Promise.all()")}} können beide ein iterierbares Objekt von Promises in ein Promise eines Arrays umwandeln. Es gibt jedoch zwei wesentliche Unterschiede:

- `Array.fromAsync()` wartet auf jeden Wert, der aus dem Objekt nacheinander geliefert wird. `Promise.all()` wartet auf alle Werte gleichzeitig.
- `Array.fromAsync()` iteriert das iterierbare Objekt träge und ruft den nächsten Wert nicht ab, bis der aktuelle Wert erledigt ist. `Promise.all()` ruft alle Werte im Voraus ab und wartet auf alle.

## Beispiele

### Array aus einem asynchronen iterierbaren Objekt

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

### Array aus einem synchronen iterierbaren Objekt

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### Array aus einem synchronen iterierbaren Objekt, das Promises liefert

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

### Verwendung von mapFn

Sowohl die Eingabe als auch die Ausgabe von `mapFn` werden intern von `Array.fromAsync()` awaited.

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

`Array.fromAsync()` wartet auf jeden Wert, der aus dem Objekt nacheinander geliefert wird. `Promise.all()` wartet auf alle Werte gleichzeitig.

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

Ähnlich wie bei [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of#iterating_over_sync_iterables_and_generators), wenn das Objekt, das iteriert wird, ein synchroner Iterable ist und ein Fehler beim Iterieren auftritt, wird die `return()`-Methode des zugrunde liegenden Iterators nicht aufgerufen, daher wird der Iterator nicht geschlossen.

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield Promise.reject(3);
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
// caught 3
// Keine "called finally" Nachricht
```

Wenn Sie den Iterator schließen müssen, müssen Sie stattdessen eine {{jsxref("Statements/for...of", "for...of")}}-Schleife verwenden und jeden Wert selbst `awaiten`.

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
- Leitfaden zu [indexierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
