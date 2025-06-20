---
title: Iterator.prototype.flatMap()
short-title: flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`flatMap()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das jedes Element im ursprünglichen Iterator nimmt, es durch eine Abbildungsfunktion verarbeitet und Elemente zurückgibt, die durch die Abbildungsfunktion zurückgegeben werden (die in einem anderen Iterator oder Iterable enthalten sind).

## Syntax

```js-nolint
flatMap(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes durch den Iterator erzeugte Element ausgeführt wird. Sie sollte einen Iterator oder Iterable zurückgeben, der Elemente erzeugt, die von `flatMap()` zurückgegeben werden sollen. Beachten Sie, dass Sie im Gegensatz zu {{jsxref("Array.prototype.flatMap()")}} keine einzelnen Nicht-Iterator/Iterable-Werte zurückgeben können. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Wenn die `next()` Methode des Iterator-Hilfsobjekts das erste Mal aufgerufen wird, ruft sie `callbackFn` für das erste Element auf, das vom zugrunde liegenden Iterator erzeugt wird, und der Rückgabewert, der ein Iterator oder Iterable sein sollte, wird vom Iterator-Hilfsobjekt eins-zu-eins zurückgegeben (wie {{jsxref("Operators/yield*", "yield*")}}). Das nächste Element wird vom zugrunde liegenden Iterator abgerufen, wenn das vorherige, das von `callbackFn` zurückgegeben wurde, abgeschlossen ist. Wenn der zugrunde liegende Iterator abgeschlossen ist, ist auch das Iterator-Hilfsobjekt abgeschlossen (die `next()` Methode erzeugt `{ value: undefined, done: true }`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `callbackFn` einen Nicht-Iterator/Iterable-Wert oder eine String-Primitiv zurückgibt.

## Beschreibung

`flatMap` akzeptiert zwei Arten von Rückgabewerten von `callbackFn`: einen Iterator oder Iterable. Sie werden auf die gleiche Weise wie {{jsxref("Iterator.from()")}} behandelt: Wenn der Rückgabewert iterable ist, wird die Methode `[Symbol.iterator]()` aufgerufen und der Rückgabewert verwendet; andernfalls wird der Rückgabewert als Iterator betrachtet und seine `next()` Methode wird aufgerufen.

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

Das folgende Beispiel führt zwei {{jsxref("Map")}} Objekte zu einem zusammen:

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

Dies vermeidet das Erstellen von temporären Kopien des Inhaltes der Map. Beachten Sie, dass das Array `[map1, map2]` zuerst in einen Iterator umgewandelt werden muss (mithilfe von {{jsxref("Array.prototype.values()")}}), da {{jsxref("Array.prototype.flatMap()")}} nur Arrays, nicht Iterables, abflacht.

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### Rückgabe von Strings

Strings sind iterable, aber `flatMap()` lehnt spezifisch String-Primitiven ab, die von `callbackFn` zurückgegeben werden, da das Verhalten des Iterierens nach Codepunkten oft nicht das ist, was Sie möchten.

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap called on non-object
```

Sie sollten es stattdessen in ein Array einbetten, damit der gesamte String als ein Element zurückgegeben wird:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

Oder, wenn das Verhalten des Iterierens nach Codepunkten beabsichtigt ist, können Sie {{jsxref("Iterator.from()")}} verwenden, um es in einen ordnungsgemäßen Iterator zu konvertieren:

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
- [es-shims polyfill von `Iterator.prototype.flatMap`](https://www.npmjs.com/package/es-iterator-helpers)
