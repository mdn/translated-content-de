---
title: Iterator.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`flatMap()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt einen neuen [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, der jedes Element im ursprünglichen Iterator durch eine Mapping-Funktion laufen lässt und die Elemente, die von der Mapping-Funktion zurückgegeben werden (und in einem anderen Iterator oder Iterable enthalten sind), ausgibt.

## Syntax

```js-nolint
flatMap(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator produzierte Element ausgeführt wird. Sie sollte einen Iterator oder Iterable zurückgeben, der Elemente liefert, die von `flatMap()` bereitgestellt werden. Beachten Sie, dass im Unterschied zu {{jsxref("Array.prototype.flatMap()")}} keine einzelnen Nicht-Iterator/Iterable-Werte zurückgegeben werden können. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Wenn die `next()`-Methode des Iterator-Helfers das erste Mal aufgerufen wird, ruft sie `callbackFn` auf das erste vom zugrunde liegenden Iterator produzierte Element auf, und der Rückgabewert, der ein Iterator oder Iterable sein sollte, wird einzeln vom Iterator-Helfer ausgegeben (wie {{jsxref("Operators/yield*", "yield*")}}). Das nächste Element wird vom zugrunde liegenden Iterator geholt, wenn das vorherige von `callbackFn` zurückgegebene abgeschlossen ist. Wenn der zugrunde liegende Iterator abgeschlossen ist, ist auch der Iterator-Helfer abgeschlossen (die `next()`-Methode liefert `{ value: undefined, done: true }`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `callbackFn` einen Nicht-Iterator/Iterable-Wert oder ein String-Primitiv zurückgibt.

## Beschreibung

`flatMap` akzeptiert zwei Arten von Rückgabewerten von `callbackFn`: einen Iterator oder Iterable. Sie werden auf die gleiche Weise wie {{jsxref("Iterator.from()")}} behandelt: Wenn der Rückgabewert iterable ist, wird die Methode `[Symbol.iterator]()` aufgerufen und der Rückgabewert verwendet; andernfalls wird der Rückgabewert als Iterator behandelt und seine `next()`-Methode aufgerufen.

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
        // Ein Iterable, das kein Iterator ist
        return { [Symbol.iterator]: () => it };
      case 2:
        // Ein Iterator, der kein Iterable ist
        return it;
      case 3:
        // Ein Iterable-Iterator wird als Iterable behandelt
        return {
          ...it,
          [Symbol.iterator]() {
            console.log("Symbol.iterator aufgerufen");
            return it;
          },
        };
    }
  })
  .toArray();
// Logs "Symbol.iterator aufgerufen"
// Rückgabe [1, 2, 3]
```

## Beispiele

### Zusammenführen von Maps

Das folgende Beispiel fügt zwei {{jsxref("Map")}}-Objekte zu einem zusammen:

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

Dies vermeidet die Erstellung temporärer Kopien des Inhalts der Map. Beachten Sie, dass das Array `[map1, map2]` zuerst in einen Iterator umgewandelt werden muss (unter Verwendung von {{jsxref("Array.prototype.values()")}}), da {{jsxref("Array.prototype.flatMap()")}} nur Arrays und keine Iterables abflacht.

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### Rückgabe von Strings

Strings sind iterable, aber `flatMap()` lehnt speziell String-Primitiven ab, die von `callbackFn` zurückgegeben werden, da das Verhalten des Iterierens nach Codepunkten oft nicht das gewünschte ist.

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap auf nicht-Objekt aufgerufen
```

Sie sollten es möglicherweise stattdessen in ein Array einbetten, sodass der gesamte String als einer ausgegeben wird:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

Oder wenn das Verhalten des Iterierens nach Codepunkten beabsichtigt ist, können Sie {{jsxref("Iterator.from()")}} verwenden, um es in einen ordnungsgemäßen Iterator zu konvertieren:

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
