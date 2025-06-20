---
title: Iterator.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/reduce
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`reduce()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.reduce")}}: Sie führt eine vom Benutzer bereitgestellte "Reducer"-Callback-Funktion für jedes Element aus, das vom Iterator erzeugt wird, und übergibt dabei den Rückgabewert aus der Berechnung des vorhergehenden Elements. Das Endergebnis des Ausführens des Reducers über alle Elemente ist ein einzelner Wert.

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Anruf von `callbackFn` resultiert. Beim ersten Aufruf ist sein Wert `initialValue`, wenn letzterer angegeben ist; andernfalls ist sein Wert das erste Element des Iterators.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert das erste Element des Iterators, wenn `initialValue` angegeben ist; andernfalls ist sein Wert das zweite Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue`. Beim ersten Aufruf ist sein Wert `0`, wenn `initialValue` angegeben ist, andernfalls `1`.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` beim ersten Aufruf des Callback initialisiert wird. Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Element als `currentValue` zu arbeiten. Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` mit dem ersten Element initialisiert, und `callbackFn` beginnt mit dem zweiten Element als `currentValue`. In diesem Fall, wenn der Iterator leer ist (sodass es keinen ersten Wert gibt, der als `accumulator` zurückgegeben werden kann), wird ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der durch die vollständige Ausführung der "Reducer"-Callback-Funktion über den gesamten Iterator resultiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Iterator keine Elemente enthält und `initialValue` nicht bereitgestellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für Details darüber, wie `reduce()` funktioniert. Im Gegensatz zu den meisten anderen Iterator-Hilfsmethoden funktioniert es nicht gut mit unendlichen Iteratoren, da es nicht "lazy" ist.

## Beispiele

### Verwendung von reduce()

Das folgende Beispiel erstellt einen Iterator, der Terme in der Fibonacci-Sequenz liefert, und summiert dann die ersten zehn Terme:

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
