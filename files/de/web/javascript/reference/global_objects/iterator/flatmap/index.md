---
title: Iterator.prototype.flatMap()
short-title: flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`flatMap()`** von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück. Es übergibt jedes Element des ursprünglichen Iterators an eine Abbildungsfunktion und liefert nacheinander die Elemente, die diese Funktion zurückgibt. Diese Elemente müssen in einem anderen Iterator oder Iterable enthalten sein.

## Syntax

```js-nolint
flatMap(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie muss einen Iterator oder ein Iterable zurückgeben, dessen Elemente von `flatMap()` geliefert werden. Anders als bei {{jsxref("Array.prototype.flatMap()")}} können Sie keine einzelnen Werte zurückgeben, die weder Iteratoren noch Iterables sind. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Beim ersten Aufruf der `next()`-Methode des Iterator-Hilfsobjekts wird `callbackFn` mit dem ersten Element aufgerufen, das der zugrunde liegende Iterator erzeugt. Die Elemente des Rückgabewerts, der ein Iterator oder Iterable sein muss, werden vom Iterator-Hilfsobjekt nacheinander geliefert (wie bei {{jsxref("Operators/yield*", "yield*")}}). Das nächste Element wird erst dann vom zugrunde liegenden Iterator abgerufen, wenn der zuvor von `callbackFn` zurückgegebene Iterator oder das Iterable vollständig durchlaufen wurde. Ist der zugrunde liegende Iterator vollständig durchlaufen, ist auch das Iterator-Hilfsobjekt vollständig durchlaufen (die `next()`-Methode gibt `{ value: undefined, done: true }` zurück).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `callbackFn` einen Wert zurückgibt, der weder ein Iterator noch ein Iterable ist, oder einen primitiven String-Wert.

## Beschreibung

`flatMap` akzeptiert zwei Arten von Rückgabewerten von `callbackFn`: Iteratoren und Iterables. Sie werden genauso behandelt wie bei {{jsxref("Iterator.from()")}}: Ist der Rückgabewert ein Iterable, wird dessen `[Symbol.iterator]()`-Methode aufgerufen und deren Rückgabewert verwendet. Andernfalls wird der Rückgabewert als Iterator behandelt und dessen `next()`-Methode aufgerufen.

```js
[1, 2, 3]
  .values()
  .flatMap((x) => {
    let itDone = false;
    const it = {
      next() {
        if (itDone) {
          return { value: undefined, done: true };
        }
        itDone = true;
        return { value: x, done: false };
      },
    };
    switch (x) {
      case 1:
        // An iterable that's not an iterator
        return { [Symbol.iterator]: () => it };
      case 2:
        // An iterator that's not an iterable
        return it;
      case 3:
        // An iterable iterator is treated as an iterable
        return {
          ...it,
          [Symbol.iterator]() {
            console.log("Symbol.iterator called");
            return it;
          },
        };
      default:
        return undefined;
    }
  })
  .toArray();
// Logs "Symbol.iterator called"
// Returns [1, 2, 3]
```

## Beispiele

### Maps zusammenführen

Das folgende Beispiel führt zwei {{jsxref("Map")}}-Objekte zu einem zusammen:

```js
const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
const map2 = new Map([
  ["d", 4],
  ["e", 5],
  ["f", 6],
]);

const merged = new Map([map1, map2].values().flatMap((x) => x));
console.log(merged.get("a")); // 1
console.log(merged.get("e")); // 5
```

Dabei werden keine temporären Kopien der Inhalte der Maps erstellt. Beachten Sie, dass das Array `[map1, map2]` zuerst in einen Iterator umgewandelt werden muss (mithilfe von {{jsxref("Array.prototype.values()")}}), da {{jsxref("Array.prototype.flatMap()")}} nur Arrays abflacht, nicht aber Iterables.

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### Strings zurückgeben

Strings sind iterierbar, aber `flatMap()` weist primitive String-Werte, die von `callbackFn` zurückgegeben werden, ausdrücklich zurück. Der Grund dafür ist, dass eine Iteration über Codepoints oft nicht das gewünschte Verhalten ist.

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap called on non-object
```

Sie können den String stattdessen in ein Array einschließen, damit er als Ganzes geliefert wird:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

Wenn Sie dagegen über die Codepoints iterieren möchten, können Sie den String mit {{jsxref("Iterator.from()")}} in einen Iterator umwandeln:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => Iterator.from(String(x * 10)))
  .toArray();
// ['1', '0', '2', '0', '3', '0']
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.prototype.flatMap` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.flatMap` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
