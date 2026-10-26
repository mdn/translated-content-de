---
title: Array.fromAsync()
short-title: fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Array.fromAsync()`** erstellt eine neue, flach kopierte `Array`-Instanz aus einem [asynchron iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), [iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder [array-ähnlichen](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects) Objekt.

## Syntax

```js-nolint
Array.fromAsync(items)
Array.fromAsync(items, mapFn)
Array.fromAsync(items, mapFn, thisArg)
```

### Parameter

- `items`
  - : Ein asynchron iterierbares, iterierbares oder array-ähnliches Objekt, das in ein Array umgewandelt werden soll.
- `mapFn` {{optional_inline}}
  - : Eine Funktion, die für jedes Element des Arrays aufgerufen wird. Wenn sie angegeben ist, wird jeder Wert, der dem Array hinzugefügt werden soll, zuerst an diese Funktion übergeben. Stattdessen wird der Rückgabewert von `mapFn` dem Array hinzugefügt (nachdem er mit [await](/de/docs/Web/JavaScript/Reference/Operators/await) aufgelöst wurde). Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird. Wenn `items` ein synchron iterierbares oder array-ähnliches Objekt ist, werden zunächst alle Elemente mit [await](/de/docs/Web/JavaScript/Reference/Operators/await) aufgelöst, und `element` ist niemals ein [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables). Wenn `items` asynchron iterierbar ist, wird jeder ausgegebene Wert unverändert übergeben.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
- `thisArg` {{optional_inline}}
  - : Der Wert, der beim Ausführen von `mapFn` als `this` verwendet wird.

### Rückgabewert

Ein neues {{jsxref("Promise")}}, dessen Erfüllungswert eine neue {{jsxref("Array")}}-Instanz ist.

## Beschreibung

Mit `Array.fromAsync()` können Sie Arrays aus Folgendem erstellen:

- [asynchron iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) (beispielsweise [`ReadableStream`](/de/docs/Web/API/ReadableStream) und {{jsxref("AsyncGenerator")}}); oder, wenn das Objekt nicht asynchron iterierbar ist,
- [iterierbaren Objekten](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (beispielsweise {{jsxref("Map")}} und {{jsxref("Set")}}); oder, wenn das Objekt nicht iterierbar ist,
- array-ähnlichen Objekten (Objekten mit einer `length`-Eigenschaft und indizierten Elementen).

`Array.fromAsync()` durchläuft das asynchron iterierbare Objekt auf eine Weise, die {{jsxref("Statements/for-await...of", "for await...of")}} sehr ähnlich ist. Wenn `items` asynchron oder synchron iterierbar ist, entspricht `Array.fromAsync(items)` im Allgemeinen dem folgenden Code:

```js
const result = [];
for await (const element of items) {
  result.push(element);
}
```

Das Verhalten von `Array.fromAsync()` entspricht weitgehend dem von {{jsxref("Array.from()")}}, mit folgenden Ausnahmen:

- `Array.fromAsync()` verarbeitet asynchron iterierbare Objekte.
- `Array.fromAsync()` gibt ein {{jsxref("Promise")}} zurück, das mit der Array-Instanz erfüllt wird.
- Wenn `Array.fromAsync()` mit einem nicht asynchron iterierbaren Objekt aufgerufen wird, wird jedes Element, das dem Array hinzugefügt werden soll, zunächst mit [await](/de/docs/Web/JavaScript/Reference/Operators/await) aufgelöst.
- Wenn eine `mapFn` angegeben ist, wird auch ihr Ergebnis intern mit `await` aufgelöst.

Sowohl `Array.fromAsync()` als auch {{jsxref("Promise.all()")}} können ein iterierbares Objekt mit Promises in ein Promise für ein Array umwandeln. Es gibt jedoch zwei wesentliche Unterschiede:

- `Array.fromAsync()` wartet nacheinander auf jeden vom Objekt ausgegebenen Wert. `Promise.all()` wartet gleichzeitig auf alle Werte.
- `Array.fromAsync()` durchläuft das iterierbare Objekt verzögert und ruft den nächsten Wert erst ab, wenn der aktuelle abgeschlossen ist. `Promise.all()` ruft alle Werte im Voraus ab und wartet auf sie.

## Beispiele

### Array aus einem asynchron iterierbaren Objekt

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

Wenn `items` asynchron iterierbar ist und der `value` jedes Ergebnisses ebenfalls ein Promise ist, werden diese Promises dem resultierenden Array hinzugefügt, ohne dass auf ihre Auflösung gewartet wird. Dies entspricht dem Verhalten von `for await...of`.

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
> In der Praxis werden Sie selten auf ein asynchron iterierbares Objekt stoßen, das Promises ausgibt. Wenn Sie es mit einer [asynchronen Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/async_function*) implementieren, löst der Ausdruck [`yield`](/de/docs/Web/JavaScript/Reference/Operators/yield) Promises automatisch auf.

### Array aus einem synchron iterierbaren Objekt

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### Array aus einem synchron iterierbaren Objekt, das Promises ausgibt

```js
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### Array aus einem array-ähnlichen Objekt mit Promises

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### `mapFn` mit einem synchron iterierbaren Objekt verwenden

Wenn `items` ein synchron iterierbares oder array-ähnliches Objekt ist, werden sowohl die Eingabe als auch die Ausgabe von `mapFn` intern durch `Array.fromAsync()` mit `await` aufgelöst.

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

### `mapFn` mit einem asynchron iterierbaren Objekt verwenden

Wenn `items` asynchron iterierbar ist, wird die Eingabe für `mapFn` nicht mit `await` aufgelöst, die Ausgabe jedoch schon. Im Folgenden wird dieselbe Funktion `createAsyncIter` wie oben verwendet:

```js
Array.fromAsync(createAsyncIter(), async (element) => (await element) * 2).then(
  (array) => console.log(array),
);
// [2, 4, 6]
```

Interessanterweise bedeutet das, dass `Array.fromAsync(createAsyncIter())` nicht gleichbedeutend mit `Array.fromAsync(createAsyncIter(), (element) => element)` ist: Bei Letzterem wird jeder ausgegebene Wert mit `await` aufgelöst, bei Ersterem nicht.

```js
Array.fromAsync(createAsyncIter(), (element) => element).then((array) =>
  console.log(array),
);
// [1, 2, 3]
```

### Vergleich mit Promise.all()

`Array.fromAsync()` wartet nacheinander auf jeden vom Objekt ausgegebenen Wert. `Promise.all()` wartet gleichzeitig auf alle Werte.

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

### Synchron iterierbare Objekte bei einer Ablehnung schließen

Ähnlich wie bei [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of#iterating_over_sync_iterables_and_generators) wird bei einem synchron iterierbaren Objekt die Methode `return()` des zugrunde liegenden Iterators aufgerufen, wenn ein ausgegebenes Promise abgelehnt wird und die Methode vorhanden ist. So kann der Iterator Aufräumarbeiten durchführen.

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

- [Polyfill für `Array.fromAsync` in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
