---
title: Iterator.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/reduce
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`reduce()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.reduce")}}: Sie führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion für jedes vom Iterator erzeugte Element aus und übergibt dabei den Rückgabewert aus der Berechnung des vorherigen Elements. Das endgültige Ergebnis des Ausführens des Reducers über alle Elemente ist ein einzelner Wert.

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird der Wert des `accumulator` Parameters bei der nächsten Ausführung von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist dessen Wert `initialValue`, falls letzterer angegeben ist; andernfalls ist es das erste Element des Iterators.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist dessen Wert das erste Element des Iterators, falls `initialValue` angegeben ist; andernfalls ist es das zweite Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue`. Beim ersten Aufruf ist dessen Wert `0`, falls `initialValue` angegeben ist, andernfalls `1`.
- `initialValue` {{optional_inline}}
  - : Ein Wert, dem `accumulator` beim ersten Aufruf des Callbacks initialisiert ist. Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Element als `currentValue` auszuführen. Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` auf das erste Element initialisiert, und `callbackFn` beginnt mit dem zweiten Element als `currentValue` zu laufen. In diesem Fall, wenn der Iterator leer ist (sodass es keinen ersten Wert gibt, der als `accumulator` zurückgegeben werden kann), wird ein Fehler geworfen.

### Rückgabewert

Der Wert, der sich ergibt, wenn die "Reducer"-Callback-Funktion über den gesamten Iterator vollständig ausgeführt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn der Iterator keine Elemente enthält und `initialValue` nicht bereitgestellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für Details darüber, wie `reduce()` funktioniert. Im Gegensatz zu den meisten anderen Iterator-Hilfsmethoden funktioniert es nicht gut mit unendlichen Iteratoren, da es nicht lazy ist.

## Beispiele

### Verwendung von reduce()

Das folgende Beispiel erzeugt einen Iterator, der Terme in der Fibonacci-Folge liefert, und summiert dann die ersten zehn Terme:

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
