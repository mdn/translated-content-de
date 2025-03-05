---
title: Iterator.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`flatMap()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das jedes Element im ursprünglichen Iterator nimmt, es durch eine Abbildungsfunktion ausführt und die von der Abbildungsfunktion zurückgegebenen Elemente liefert (die in einem anderen Iterator oder Iterable enthalten sind).

## Syntax

```js-nolint
flatMap(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element, das vom Iterator erzeugt wird, ausgeführt wird. Sie sollte einen Iterator oder ein Iterable zurückgeben, das die Elemente liefert, die von `flatMap()` geliefert werden sollen. Beachten Sie, dass im Gegensatz zu {{jsxref("Array.prototype.flatMap()")}} keine einzelnen Nicht-Iterator/Iterable-Werte zurückgegeben werden können. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Wenn die `next()`-Methode des Iterator-Hilfsobjekts das erste Mal aufgerufen wird, ruft sie `callbackFn` auf das erste von dem zugrunde liegenden Iterator produzierte Element auf, und der Rückgabewert, der ein Iterator oder Iterable sein sollte, wird von dem Iterator-Hilfsobjekt nacheinander geliefert (wie {{jsxref("Operators/yield*", "yield*")}}). Das nächste Element wird vom zugrunde liegenden Iterator geholt, wenn das vorherige von `callbackFn` zurückgegebene Element abgeschlossen ist. Wenn der zugrunde liegende Iterator abgeschlossen ist, wird auch das Iterator-Hilfsobjekt abgeschlossen (die `next()`-Methode erzeugt `{ value: undefined, done: true }`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `callbackFn` einen Nicht-Iterator/Iterable-Wert oder ein String-Primitive zurückgibt.

## Beschreibung

`flatMap` akzeptiert zwei Arten von Rückgabewerten von `callbackFn`: einen Iterator oder ein Iterable. Sie werden auf die gleiche Weise wie bei {{jsxref("Iterator.from()")}} behandelt: Wenn der Rückgabewert Iterable ist, wird die `[Symbol.iterator]()` Methode aufgerufen und der Rückgabewert verwendet; andernfalls wird der Rückgabewert als Iterator behandelt und seine `next()`-Methode aufgerufen.

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
    }
  })
  .toArray();
// Logs "Symbol.iterator called"
// Returns [1, 2, 3]
```

## Beispiele

### Zusammenführen von Maps

Das folgende Beispiel vereint zwei {{jsxref("Map")}} Objekte zu einem:

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

Dies vermeidet das Erstellen temporärer Kopien des Inhalts der Map. Beachten Sie, dass das Array `[map1, map2]` zunächst in einen Iterator konvertiert werden muss (mithilfe von {{jsxref("Array.prototype.values()")}}), da {{jsxref("Array.prototype.flatMap()")}} nur Arrays, nicht aber Iterables abflacht.

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### Zurückgeben von Strings

Strings sind Iterable, aber `flatMap()` lehnt speziell String-Primitives, die von `callbackFn` zurückgegeben werden, ab, da das Verhalten des Iterierens nach Codepunkten oft nicht das ist, was man möchte.

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap called on non-object
```

Man könnte es stattdessen in ein Array einwickeln, damit der gesamte String als ein Element geliefert wird:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

Oder, wenn das Verhalten des Iterierens nach Codepunkten beabsichtigt ist, können Sie {{jsxref("Iterator.from()")}} verwenden, um es in einen richtigen Iterator zu konvertieren:

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
