---
title: Array.fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: 1376e180f628ff8e81f7d5441840ad9ad24d15df
---

{{JSRef}}

Die statische Methode **`Array.fromAsync()`** erstellt eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), einem [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder einem [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt.

## Syntax

```js-nolint
Array.fromAsync(items)
Array.fromAsync(items, mapFn)
Array.fromAsync(items, mapFn, thisArg)
```

### Parameter

- `items`
  - : Ein asynchrones Iterable, Iterable oder array-ähnliches Objekt, das in ein Array umgewandelt werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die auf jedes Element des Arrays angewendet wird. Wenn angegeben, wird jeder Wert, der dem Array hinzugefügt werden soll, zuerst durch diese Funktion geleitet, und der Rückgabewert von `mapFn` wird dem Array hinzugefügt (nachdem er [awaited](/de/docs/Web/JavaScript/Reference/Operators/await) wurde). Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird. Wenn `items` ein synchrones Iterable oder array-ähnliches Objekt ist, werden alle Elemente zuerst [awaited](/de/docs/Web/JavaScript/Reference/Operators/await), und `element` wird niemals ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) sein. Wenn `items` ein asynchrones Iterable ist, wird jeder übergebene Wert wie er ist übergeben.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` verwendet wird, wenn `mapFn` ausgeführt wird.

### Rückgabewert

Ein neues {{jsxref("Promise")}}, dessen Erfüllungswert eine neue {{jsxref("Array")}}-Instanz ist.

## Beschreibung

`Array.fromAsync()` ermöglicht das Erstellen von Arrays aus:

- [asynchronen Iterable-Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) (Objekte wie [`ReadableStream`](/de/docs/Web/API/ReadableStream) und {{jsxref("AsyncGenerator")}}); oder, wenn das Objekt nicht asynchron iterierbar ist,
- [iterablen Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (Objekte wie {{jsxref("Map")}} und {{jsxref("Set")}}); oder, wenn das Objekt nicht iterierbar ist,
- array-ähnlichen Objekten (Objekte mit einer `length`-Eigenschaft und indizierten Elementen).

`Array.fromAsync()` durchläuft das asynchrone Iterable in einer Weise, die der Schleife {{jsxref("Statements/for-await...of", "for await...of")}} sehr ähnlich ist. `Array.fromAsync(items)` ist im Allgemeinen gleichwertig mit dem folgenden Code, wenn `items` ein asynchrones oder synchrones Iterable ist:

```js
const result = [];
for await (const element of items) {
  result.push(element);
}
```

`Array.fromAsync()` ist im Hinblick auf das Verhalten fast äquivalent zu {{jsxref("Array.from()")}}, außer in den folgenden Punkten:

- `Array.fromAsync()` verarbeitet asynchrone iterierbare Objekte.
- `Array.fromAsync()` gibt ein {{jsxref("Promise")}} zurück, das auf die Array-Instanz erfüllt wird.
- Wenn `Array.fromAsync()` mit einem nicht-asynchronen iterierbaren Objekt aufgerufen wird, wird jedes Element, das dem Array hinzugefügt werden soll, zuerst [awaited](/de/docs/Web/JavaScript/Reference/Operators/await).
- Wenn ein `mapFn` angegeben ist, wird dessen Ausgabe intern ebenfalls awaited.

`Array.fromAsync()` und {{jsxref("Promise.all()")}} können beide ein Iterable von Versprechen in ein Versprechen eines Arrays umwandeln. Es gibt jedoch zwei wesentliche Unterschiede:

- `Array.fromAsync()` wartet jeden Wert ab, der vom Objekt sequentiell übergeben wird. `Promise.all()` wartet alle Werte gleichzeitig ab.
- `Array.fromAsync()` durchläuft das Iterable faul und ruft den nächsten Wert erst ab, wenn der aktuelle abgeschlossen ist. `Promise.all()` ruft alle Werte im Voraus ab und wartet auf sie alle.

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

Wenn `items` ein asynchrones Iterable ist, bei dem der `value` jedes Ergebnisses ebenfalls ein Versprechen ist, dann werden diese Versprechen dem resultierenden Array hinzugefügt, ohne awaited zu werden. Dies entspricht dem Verhalten von `for await...of`.

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
> In der Praxis werden Sie selten auf ein asynchrones Iterable stoßen, das Versprechen liefert, weil beim Implementieren mit einer [asynchronen Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/async_function*) der [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Ausdruck Versprechen automatisch entpackt.

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

### Array aus einem synchronen Iterable, das Versprechen liefert

```js
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### Array aus einem array-ähnlichen Objekt von Versprechen

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### Nutzung von mapFn mit einem synchronen Iterable

Wenn `items` ein synchrones Iterable oder array-ähnliches Objekt ist, werden sowohl die Eingabe als auch die Ausgabe von `mapFn` intern von `Array.fromAsync()` awaited.

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

### Nutzung von mapFn mit einem asynchronen Iterable

Wenn `items` ein asynchrones Iterable ist, wird die Eingabe zu `mapFn` nicht awaited, die Ausgabe jedoch schon. Unter Verwendung der gleichen `createAsyncIter`-Funktion wie oben:

```js
Array.fromAsync(createAsyncIter(), async (element) => (await element) * 2).then(
  (array) => console.log(array),
);
// [2, 4, 6]
```

Interessanterweise bedeutet dies, dass `Array.fromAsync(createAsyncIter())` nicht gleichwertig ist mit `Array.fromAsync(createAsyncIter(), (element) => element)`, da letzteres jeden übergebenen Wert awaited, während ersteres dies nicht tut.

```js
Array.fromAsync(createAsyncIter(), (element) => element).then((array) =>
  console.log(array),
);
// [1, 2, 3]
```

### Vergleich mit Promise.all()

`Array.fromAsync()` wartet jeden Wert ab, der vom Objekt sequentiell übergeben wird. `Promise.all()` wartet alle Werte gleichzeitig ab.

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

Ähnlich wie bei [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of#iterating_over_sync_iterables_and_generators), wird, wenn das zu durchlaufende Objekt ein synchrones Iterable ist und ein Fehler während des Durchlaufens auftritt, die `return()`-Methode des zugrunde liegenden Iterators nicht aufgerufen, sodass der Iterator nicht geschlossen wird.

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

Wenn Sie den Iterator schließen müssen, sollten Sie stattdessen eine {{jsxref("Statements/for...of", "for...of")}}-Schleife verwenden und jeden Wert selbst `awaiten`.

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
- [Leitfaden für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
