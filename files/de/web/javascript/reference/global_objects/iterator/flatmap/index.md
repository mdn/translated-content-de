---
title: Iterator.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`flatMap()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt einen neuen [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, der jedes Element im ursprünglichen Iterator nimmt, es durch eine Abbildungsfunktion laufen lässt und Elemente liefert, die von der Abbildungsfunktion zurückgegeben werden (die in einem anderen Iterator oder Iterable enthalten sind).

## Syntax

```js-nolint
flatMap(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element ausgeführt wird, das vom Iterator produziert wird. Sie sollte einen Iterator oder ein Iterable zurückgeben, das die Elemente liefert, die von `flatMap()` bereitgestellt werden. Beachten Sie, dass im Gegensatz zu {{jsxref("Array.prototype.flatMap()")}} keine einzelnen nicht-Iterator/Iterable-Werte zurückgegeben werden können. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Wenn die `next()`-Methode des Iterator-Helfers zum ersten Mal aufgerufen wird, ruft sie `callbackFn` auf das erste Element auf, das vom zugrundeliegenden Iterator bereitgestellt wird, und der Rückgabewert, der ein Iterator oder Iterable sein sollte, wird nacheinander vom Iterator-Helfer geliefert (wie {{jsxref("Operators/yield*", "yield*")}}). Das nächste Element wird vom zugrundeliegenden Iterator abgerufen, wenn das vorherige von `callbackFn` zurückgegebene Element abgeschlossen ist. Wenn der zugrundeliegende Iterator abgeschlossen ist, wird auch der Iterator-Helfer abgeschlossen (die `next()`-Methode produziert `{ value: undefined, done: true }`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `callbackFn` einen nicht-Iterator/Iterable-Wert oder einen String-Primitiv zurückgibt.

## Beschreibung

`flatMap` akzeptiert zwei Arten von Rückgabewerten von `callbackFn`: einen Iterator oder ein Iterable. Diese werden auf die gleiche Weise wie {{jsxref("Iterator.from()")}} behandelt: Wenn der Rückgabewert iterable ist, wird die Methode `[Symbol.iterator]()` aufgerufen und der Rückgabewert verwendet; andernfalls wird der Rückgabewert als Iterator behandelt und seine `next()`-Methode wird aufgerufen.

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

Dies vermeidet die Erstellung temporärer Kopien des Inhalts der Map. Beachten Sie, dass das Array `[map1, map2]` zunächst in einen Iterator umgewandelt werden muss (mithilfe von {{jsxref("Array.prototype.values()")}}), da {{jsxref("Array.prototype.flatMap()")}} nur Arrays, nicht Iterable, abflacht.

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### Zurückgeben von Strings

Strings sind iterable, aber `flatMap()` lehnt String-Primitiva, die von `callbackFn` zurückgegeben werden, explizit ab, da das Verhalten der Iteration über Codepunkte oft nicht das gewünschte ist.

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap called on non-object
```

Möglicherweise möchten Sie es stattdessen in ein Array einwickeln, sodass der gesamte String als Einheit geliefert wird:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

Oder, wenn das Verhalten der Iteration über Codepunkte beabsichtigt ist, können Sie {{jsxref("Iterator.from()")}} verwenden, um es in einen ordnungsgemäßen Iterator zu konvertieren:

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
