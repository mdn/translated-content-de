---
title: Iterator.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/reduce
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`reduce()`** Methode von {{jsxref("Iterator")}} Instanzen ähnelt {{jsxref("Array.prototype.reduce")}}: Sie führt eine benutzerdefinierte "Reducer"-Callback-Funktion für jedes vom Iterator erzeugte Element aus und übergibt dabei den Rückgabewert der Berechnung des vorherigen Elements. Das Endergebnis der Ausführung des Reducers über alle Elemente hinweg ist ein einzelner Wert.

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird der Wert des `accumulator` Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls letzterer angegeben ist; andernfalls ist sein Wert das erste Element des Iterators.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert das erste Element des Iterators, wenn `initialValue` angegeben ist; andernfalls ist sein Wert das zweite Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue`. Beim ersten Aufruf ist sein Wert `0`, wenn `initialValue` angegeben ist, andernfalls `1`.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` beim ersten Aufruf des Callbacks initialisiert wird. Wenn `initialValue` angegeben ist, beginnt die Ausführung von `callbackFn` mit dem ersten Element als `currentValue`. Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` auf das erste Element initialisiert, und `callbackFn` beginnt die Ausführung mit dem zweiten Element als `currentValue`. In diesem Fall, wenn der Iterator leer ist (also kein erster Wert als `accumulator` zurückzugeben ist), wird ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der sich aus der vollständigen Ausführung der "Reducer"-Callback-Funktion über den gesamten Iterator ergibt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Iterator keine Elemente enthält und `initialValue` nicht angegeben ist.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für Details dazu, wie `reduce()` funktioniert. Im Gegensatz zu den meisten anderen Iterator-Hilfsmethoden funktioniert es nicht gut mit unendlichen Iteratoren, da es nicht "lazy" ist.

## Beispiele

### Verwendung von reduce()

Das folgende Beispiel erstellt einen Iterator, der Terme in der Fibonacci-Sequenz liefert, und addiert dann die ersten zehn Terme:

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
- [es-shims Polyfill von `Iterator.prototype.reduce`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
