---
title: Array.fromAsync()
short-title: fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Array.fromAsync()`** statische Methode erstellt eine neue, flach kopierte `Array`-Instanz aus einem [asynchronen iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt.

## Syntax

```js-nolint
Array.fromAsync(items)
Array.fromAsync(items, mapFn)
Array.fromAsync(items, mapFn, thisArg)
```

### Parameter

- `items`
  - : Ein asynchrones iterierbares, iterierbares oder array-ähnliches Objekt, das in ein Array konvertiert werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die für jedes Element des Arrays aufgerufen wird. Wenn bereitgestellt, wird jeder Wert, der dem Array hinzugefügt werden soll, zuerst durch diese Funktion geleitet, und der Rückgabewert von `mapFn` wird stattdessen dem Array hinzugefügt (nachdem er [abgewartet](/de/docs/Web/JavaScript/Reference/Operators/await) wurde). Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird. Wenn `items` ein synchrones iterierbares oder array-ähnliches Objekt ist, werden alle Elemente zuerst [abgewartet](/de/docs/Web/JavaScript/Reference/Operators/await), und `element` wird niemals ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) sein. Wenn `items` ein asynchrones iterierbares Objekt ist, wird jeder erzeugte Wert unverändert übergeben.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Wert, der als `this` beim Ausführen von `mapFn` verwendet wird.

### Rückgabewert

Ein neues {{jsxref("Promise")}}, dessen Erfüllungswert eine neue {{jsxref("Array")}}-Instanz ist.

## Beschreibung

`Array.fromAsync()` ermöglicht das Erstellen von Arrays aus:

- [asynchronen iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) (Objekten wie [`ReadableStream`](/de/docs/Web/API/ReadableStream) und {{jsxref("AsyncGenerator")}}); oder, wenn das Objekt nicht asynchron iterierbar ist,
- [iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (Objekten wie {{jsxref("Map")}} und {{jsxref("Set")}}); oder, wenn das Objekt nicht iterierbar ist,
- array-ähnlichen Objekten (Objekten mit einer `length`-Eigenschaft und indizierten Elementen).

`Array.fromAsync()` durchläuft das asynchrone Iterierbare auf eine Weise, die sehr ähnlich zu {{jsxref("Statements/for-await...of", "for await...of")}} ist. `Array.fromAsync(items)` ist im Allgemeinen äquivalent zu folgendem Code, wenn `items` ein asynchrones oder synchrones Iterierbares ist:

```js
const result = [];
for await (const element of items) {
  result.push(element);
}
```

`Array.fromAsync()` ist in Bezug auf das Verhalten fast gleichwertig zu {{jsxref("Array.from()")}}, außer in folgenden Punkten:

- `Array.fromAsync()` verarbeitet asynchrone iterierbare Objekte.
- `Array.fromAsync()` gibt ein {{jsxref("Promise")}} zurück, das sich in die Array-Instanz erfüllt.
- Wenn `Array.fromAsync()` mit einem nicht-asynchronen iterierbaren Objekt aufgerufen wird, wird jedes Element, das dem Array hinzugefügt werden soll, zuerst [abgewartet](/de/docs/Web/JavaScript/Reference/Operators/await).
- Wenn ein `mapFn` bereitgestellt wird, wird dessen Ausgabe intern ebenfalls abgewartet.

`Array.fromAsync()` und {{jsxref("Promise.all()")}} können beide ein iterierbares Objekt von Versprechen in ein Versprechen eines Arrays umwandeln. Es gibt jedoch zwei Hauptunterschiede:

- `Array.fromAsync()` wartet jeden Wert ab, der aus dem Objekt sequentiell erzeugt wird. `Promise.all()` wartet alle Werte gleichzeitig ab.
- `Array.fromAsync()` iteriert das Iterierbare träge und ruft den nächsten Wert erst ab, wenn der aktuelle abgeschlossen ist. `Promise.all()` ruft alle Werte im Voraus ab und wartet sie alle ab.

## Beispiele

### Array von einem asynchronen Iterierbaren

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

Wenn `items` ein asynchrones Iterierbares ist, bei dem jeder `value` ebenfalls ein Promise ist, werden diese Promises dem resultierenden Array ohne Warten hinzugefügt. Dies steht im Einklang mit dem Verhalten von `for await...of`.

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
> In der Praxis werden Sie selten ein asynchrones Iterierbares antreffen, das Promises erzeugt, da wenn Sie es mit einer [asynchronen Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/async_function*) implementieren, dann der [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield)-Ausdruck automatisch Promises entpackt.

### Array von einem synchronen Iterierbaren

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### Array von einem synchronen Iterierbaren, das Promises erzeugt

```js
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### Array von einem array-ähnlichen Objekt mit Promises

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### Verwendung von mapFn mit einem synchronen Iterierbaren

Wenn `items` ein synchrones Iterierbares oder array-ähnliches Objekt ist, werden sowohl die Eingabe als auch die Ausgabe von `mapFn` intern durch `Array.fromAsync()` abgewartet.

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

### Verwendung von mapFn mit einem asynchronen Iterierbaren

Wenn `items` ein asynchrones Iterierbares ist, wird die Eingabe an `mapFn` nicht abgewartet, aber die Ausgabe schon. Unter Verwendung der gleichen `createAsyncIter` Funktion von oben:

```js
Array.fromAsync(createAsyncIter(), async (element) => (await element) * 2).then(
  (array) => console.log(array),
);
// [2, 4, 6]
```

Interessanterweise bedeutet dies, dass `Array.fromAsync(createAsyncIter())` nicht gleichwertig ist mit `Array.fromAsync(createAsyncIter(), (element) => element)`, da letztere jeden erzeugten Wert abwartet, während ersteres dies nicht tut.

```js
Array.fromAsync(createAsyncIter(), (element) => element).then((array) =>
  console.log(array),
);
// [1, 2, 3]
```

### Vergleich mit Promise.all()

`Array.fromAsync()` wartet jeden Wert ab, der aus dem Objekt sequentiell erzeugt wird. `Promise.all()` wartet alle Werte gleichzeitig ab.

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

### Kein Fehlerhandling für synchrone Iterierbare

Ähnlich wie [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of#iterating_over_sync_iterables_and_generators), wenn das Objekt, das durchlaufen wird, ein synchrones Iterierbares ist und ein Fehler beim Durchlaufen geworfen wird, wird die `return()` Methode des zugrunde liegenden Iterators nicht aufgerufen, sodass der Iterator nicht geschlossen wird.

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

Wenn Sie den Iterator schließen müssen, müssen Sie eine {{jsxref("Statements/for...of", "for...of")}} Schleife verwenden und jeden Wert selbst abwarten.

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
- [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
