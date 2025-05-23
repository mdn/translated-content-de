---
title: Iterator.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Die **`flatMap()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das jedes Element des ursprünglichen Iterators nimmt, es durch eine Mapping-Funktion laufen lässt und die Elemente ausgibt, die von der Mapping-Funktion zurückgegeben werden (die in einem anderen Iterator oder einer anderen Iterierbaren enthalten sind).

## Syntax

```js-nolint
flatMap(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator produzierte Element ausgeführt wird. Sie sollte einen Iterator oder eine Iterierbare zurückgeben, die Elemente ausgibt, die von `flatMap()` ausgegeben werden. Beachten Sie, dass im Gegensatz zu {{jsxref("Array.prototype.flatMap()")}} keine einzelnen Nicht-Iterator/iterierbaren Werte zurückgegeben werden können. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.

### Rückgabewert

Ein neues [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Wenn die `next()` Methode des Iterator-Helfers das erste Mal aufgerufen wird, wird `callbackFn` auf das erste Element angewendet, das vom zugrunde liegenden Iterator produziert wird. Der Rückgabewert, der ein Iterator oder eine Iterierbare sein sollte, wird elementweise vom Iterator-Helfer ausgegeben (wie {{jsxref("Operators/yield*", "yield*")}}). Das nächste Element wird vom zugrunde liegenden Iterator abgefragt, wenn das vorherige von `callbackFn` zurückgegebene Element abgeschlossen ist. Wenn der zugrunde liegende Iterator abgeschlossen ist, wird auch der Iterator-Helfer abgeschlossen (die `next()` Methode produziert `{ value: undefined, done: true }`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `callbackFn` einen Nicht-Iterator/iterierbaren Wert oder einen String-Primitive zurückgibt.

## Beschreibung

`flatMap` akzeptiert zwei Arten von Rückgabewerten von `callbackFn`: einen Iterator oder eine Iterierbare. Diese werden auf dieselbe Weise wie in {{jsxref("Iterator.from()")}} behandelt: Wenn der Rückgabewert iterierbar ist, wird die `[Symbol.iterator]()` Methode aufgerufen und der Rückgabewert verwendet; andernfalls wird der Rückgabewert als Iterator behandelt und seine `next()` Methode aufgerufen.

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

### Zusammenführen von Maps

Das folgende Beispiel fügt zwei {{jsxref("Map")}} Objekte zu einem zusammen:

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

Dies vermeidet die Erstellung temporärer Kopien des Inhalts der Maps. Beachten Sie, dass das Array `[map1, map2]` zuerst in einen Iterator umgewandelt werden muss (mithilfe von {{jsxref("Array.prototype.values()")}}), da {{jsxref("Array.prototype.flatMap()")}} nur Arrays und nicht Iterierbare abflacht.

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### Rückgabe von Strings

Strings sind iterierbar, aber `flatMap()` lehnt speziell String-Primitives ab, die von `callbackFn` zurückgegeben werden, weil das Verhalten der Iteration nach Codepunkten oft nicht das ist, was Sie möchten.

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap called on non-object
```

Sie könnten es in ein Array einwickeln, damit der gesamte String als einer ausgegeben wird:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

Oder, wenn das Verhalten der Iteration nach Codepunkten beabsichtigt ist, können Sie {{jsxref("Iterator.from()")}} verwenden, um es in einen richtigen Iterator zu konvertieren:

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

- [Polyfill von `Iterator.prototype.flatMap` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator.prototype.flatMap`](https://www.npmjs.com/package/es-iterator-helpers)
