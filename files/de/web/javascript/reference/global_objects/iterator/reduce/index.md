---
title: Iterator.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/reduce
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`reduce()`**-Methode von {{jsxref("Iterator")}}-Instanzen ähnelt der {{jsxref("Array.prototype.reduce")}}: Sie führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion bei jedem vom Iterator erzeugten Element aus und übergibt den Rückgabewert der Berechnung des vorherigen Elements. Das Endergebnis des Reducers über alle Elemente hinweg ist ein einzelner Wert.

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird der Wert des `accumulator`-Parameters bei der nächsten Ausführung von `callbackFn`. Bei der letzten Ausführung wird der Rückgabewert der Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieses angegeben ist, andernfalls ist es das erste Element des Iterators.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert das erste Element des Iterators, wenn `initialValue` angegeben ist, andernfalls ist es das zweite Element.
    - `currentIndex`
      - : Der Index des `currentValue`. Beim ersten Aufruf ist sein Wert `0`, wenn `initialValue` angegeben ist, andernfalls `1`.
- `initialValue` {{optional_inline}}
  - : Ein Wert, auf den `accumulator` beim ersten Aufruf des Rückrufs initialisiert wird. Wenn `initialValue` angegeben ist, beginnt die Ausführung von `callbackFn` mit dem ersten Element als `currentValue`. Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` auf das erste Element gesetzt und `callbackFn` beginnt mit dem zweiten Element als `currentValue`. In diesem Fall, wenn der Iterator leer ist (sodass kein erster Wert als `accumulator` zurückgegeben werden kann), wird ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der sich aus dem vollständigen Ausführen der "Reducer"-Callback-Funktion über den gesamten Iterator ergibt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Iterator keine Elemente enthält und `initialValue` nicht bereitgestellt ist.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für Details darüber, wie `reduce()` funktioniert. Anders als die meisten anderen Iterator-Hilfsmethoden funktioniert es nicht gut mit unendlichen Iteratoren, da es nicht lazy ist.

## Beispiele

### Verwendung von reduce()

Das folgende Beispiel erstellt einen Iterator, der Terme der Fibonacci-Sequenz erzeugt, und summiert dann die ersten zehn Terme:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(
  fibonacci()
    .take(10)
    .reduce((a, b) => a + b),
); // 143
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
