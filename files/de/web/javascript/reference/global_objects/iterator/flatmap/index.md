---
title: Iterator.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

Die **`flatMap()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das jedes Element im ursprünglichen Iterator durch eine Mapping-Funktion verarbeitet und die von der Mapping-Funktion zurückgegebenen Elemente bereitstellt (die in einem anderen Iterator oder Iterable enthalten sind).

## Syntax

```js-nolint
flatMap(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, um jedes vom Iterator erzeugte Element auszuführen. Sie sollte einen Iterator oder Iterable zurückgeben, der Elemente liefert, die von `flatMap()` bereitgestellt werden sollen. Beachten Sie, dass im Gegensatz zu {{jsxref("Array.prototype.flatMap()")}} keine einzelnen Nicht-Iterator/Iterable-Werte zurückgegeben werden können. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Das erste Mal, wenn die `next()`-Methode des Iterator-Hilfsobjekts aufgerufen wird, wird `callbackFn` auf das erste vom zugrunde liegenden Iterator erzeugte Element angewendet, und der Rückgabewert, der ein Iterator oder Iterable sein sollte, wird vom Iterator-Hilfsobjekt eins zu eins bereitgestellt (wie {{jsxref("Operators/yield*", "yield*")}}). Das nächste Element wird vom zugrunde liegenden Iterator abgerufen, wenn das vorherige von `callbackFn` zurückgegebene Element vollständig ist. Wenn der zugrunde liegende Iterator abgeschlossen ist, wird auch der Iterator-Hilfsobjekt abgeschlossen (die `next()`-Methode erzeugt `{ value: undefined, done: true }`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `callbackFn` einen Nicht-Iterator/Iterable-Wert oder eine Zeichenfolgen-Primitiv zurückgibt.

## Beschreibung

`flatMap` akzeptiert zwei Arten von Rückgabewerten von `callbackFn`: einen Iterator oder Iterable. Sie werden in derselben Weise wie {{jsxref("Iterator.from()")}} behandelt: Wenn der Rückgabewert ein Iterable ist, wird die `[Symbol.iterator]()`-Methode aufgerufen und der Rückgabewert verwendet; andernfalls wird der Rückgabewert als Iterator behandelt und seine `next()`-Methode aufgerufen.

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

### Merging maps

Das folgende Beispiel fügt zwei {{jsxref("Map")}}-Objekte in eines zusammen:

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

Dies vermeidet die Erstellung von temporären Kopien des Inhalts der Map. Beachten Sie, dass das Array `[map1, map2]` zuerst in einen Iterator umgewandelt werden muss (mittels {{jsxref("Array.prototype.values()")}}), da {{jsxref("Array.prototype.flatMap()")}} nur Arrays und nicht Iterables abflacht.

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### Strings zurückgeben

Zeichenfolgen sind iterable, aber `flatMap()` lehnt speziell Zeichenfolgenprimitiven ab, die von `callbackFn` zurückgegeben werden. Dies liegt daran, dass das Verhalten bei der Iteration nach Codepunkte oft nicht das ist, was gewünscht wird.

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap called on non-object
```

Sie möchten es stattdessen möglicherweise in einem Array einpacken, damit die gesamte Zeichenfolge als eins zurückgegeben wird:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

Oder, wenn das Verhalten der Iteration nach Codepunkten beabsichtigt ist, können Sie {{jsxref("Iterator.from()")}} verwenden, um es in einen ordentlichen Iterator zu konvertieren:

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
