---
title: Array.fromAsync()
short-title: fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Array.fromAsync()`** erstellt eine neue, flachkopierte `Array`-Instanz aus einem [asynchronen Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [Iterator](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder einem [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt.

## Syntax

```js-nolint
Array.fromAsync(items)
Array.fromAsync(items, mapFn)
Array.fromAsync(items, mapFn, thisArg)
```

### Parameter

- `items`
  - : Ein asynchroner Iterator, Iterator oder array-ähnliches Objekt, das in ein Array konvertiert werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die auf jedes Element des Arrays aufgerufen wird. Wenn übergeben, wird jeder zu dem Array hinzuzufügende Wert zuerst durch diese Funktion geleitet, und der Rückgabewert von `mapFn` wird stattdessen dem Array hinzugefügt (nachdem er [awaitet](/de/docs/Web/JavaScript/Reference/Operators/await) wurde). Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell im Array verarbeitete Element. Wenn `items` ein synchroner Iterator oder ein array-ähnliches Objekt ist, werden zuerst alle Elemente [awaitet](/de/docs/Web/JavaScript/Reference/Operators/await), und `element` wird niemals ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) sein. Wenn `items` ein asynchroner Iterator ist, wird jeder erzeugte Wert so übergeben, wie er ist.
    - `index`
      - : Der Index des aktuell im Array verarbeiteten Elements.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` beim Ausführen von `mapFn` verwendet wird.

### Rückgabewert

Ein neuer {{jsxref("Promise")}}, dessen Erfüllungswert eine neue {{jsxref("Array")}}-Instanz ist.

## Beschreibung

`Array.fromAsync()` ermöglicht die Erstellung von Arrays aus:

- [asynchronen Iterator-Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) (Objekte wie [`ReadableStream`](/de/docs/Web/API/ReadableStream) und {{jsxref("AsyncGenerator")}}); oder, falls das Objekt nicht asynchron iterierbar ist,
- [iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (Objekte wie {{jsxref("Map")}} und {{jsxref("Set")}}); oder, falls das Objekt nicht iterierbar ist,
- array-ähnlichen Objekten (Objekte mit einer `length`-Eigenschaft und indizierten Elementen).

`Array.fromAsync()` iteriert den asynchronen Iterator auf eine Weise, die {{jsxref("Statements/for-await...of", "for await...of")}} sehr ähnlich ist. `Array.fromAsync(items)` entspricht im Allgemeinen dem folgenden Code, wenn `items` ein asynchroner oder synchroner Iterator ist:

```js
const result = [];
for await (const element of items) {
  result.push(element);
}
```

`Array.fromAsync()` ist in Bezug auf das Verhalten fast gleichwertig mit {{jsxref("Array.from()")}}, außer in folgenden Punkten:

- `Array.fromAsync()` verarbeitet asynchrone Iterator-Objekte.
- `Array.fromAsync()` gibt einen {{jsxref("Promise")}} zurück, der sich in die Array-Instanz erfüllt.
- Wenn `Array.fromAsync()` mit einem nicht-asynchronen Iterator-Objekt aufgerufen wird, wird jedes hinzuzufügende Element zuerst [awaitet](/de/docs/Web/JavaScript/Reference/Operators/await).
- Wenn eine `mapFn` bereitgestellt wird, wird deren Ausgabe ebenfalls intern awaited.

`Array.fromAsync()` und {{jsxref("Promise.all()")}} können beide einen Iterator von Promises in einen Promise eines Arrays umwandeln. Es gibt jedoch zwei wesentliche Unterschiede:

- `Array.fromAsync()` wartet jeden Wert ab, der aus dem Objekt nacheinander erzeugt wird. `Promise.all()` wartet alle Werte gleichzeitig ab.
- `Array.fromAsync()` iteriert den Iterator faul und ruft den nächsten Wert erst ab, wenn der aktuelle abgeschlossen ist. `Promise.all()` ruft alle Werte im Voraus ab und wartet auf alle.

## Beispiele

### Array aus einem asynchronen Iterator

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

Wenn `items` ein asynchroner Iterator ist, bei dem jeder Ergebniswert ebenfalls ein Promise ist, dann werden diese Promises dem resultierenden Array hinzugefügt, ohne awaited zu werden. Dies entspricht dem Verhalten von `for await...of`.

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
> In der Praxis werden Sie selten einen asynchronen Iterator finden, der Promises erzeugt, da, wenn Sie ihn mit einer [asynchronen Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/async_function*) implementieren, der [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Ausdruck automatisch Promises entpackt.

### Array aus einem synchronen Iterator

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### Array aus einem synchronen Iterator, der Promises erzeugt

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

### Verwendung von mapFn mit einem synchronen Iterator

Wenn `items` ein synchroner Iterator oder ein array-ähnliches Objekt ist, werden sowohl die Eingabe als auch die Ausgabe von `mapFn` intern von `Array.fromAsync()` awaited.

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

### Verwendung von mapFn mit einem asynchronen Iterator

Wenn `items` ein asynchroner Iterator ist, wird die Eingabe an `mapFn` nicht awaited, aber die Ausgabe wird awaited. Verwenden Sie dieselbe `createAsyncIter`-Funktion wie oben:

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

`Array.fromAsync()` wartet jeden Wert ab, der aus dem Objekt nacheinander erzeugt wird. `Promise.all()` wartet alle Werte gleichzeitig ab.

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

### Keine Fehlerbehandlung für synchrone Iteratoren

Ähnlich wie bei [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of#iterating_over_sync_iterables_and_generators), wenn das zu iterierende Objekt ein synchroner Iterator ist und ein Fehler beim Iterieren auftritt, wird die `return()`-Methode des zugrunde liegenden Iterators nicht aufgerufen, sodass der Iterator nicht geschlossen wird.

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
- [Leitfaden für indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
