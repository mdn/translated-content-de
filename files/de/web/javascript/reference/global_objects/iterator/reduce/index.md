---
title: Iterator.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/reduce
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`reduce()`**-Methode von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.reduce")}}: Sie führt eine benutzerdefinierte "Reducer"-Callback-Funktion für jedes vom Iterator erzeugte Element aus und übergibt dabei den Rückgabewert der Berechnung des vorhergehenden Elements. Das Endergebnis des Reducers über alle Elemente ist ein Einzelwert.

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert der Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf entspricht sein Wert `initialValue`, falls letzterer angegeben ist; andernfalls entspricht sein Wert dem ersten Element des Iterators.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf entspricht sein Wert dem ersten Element des Iterators, falls `initialValue` angegeben ist; andernfalls entspricht sein Wert dem zweiten Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue`. Beim ersten Aufruf entspricht sein Wert `0`, wenn `initialValue` angegeben ist, andernfalls `1`.
- `initialValue` {{optional_inline}}
  - : Ein Wert, auf den `accumulator` beim ersten Aufruf des Callbacks initialisiert wird. Wenn `initialValue` angegeben wird, beginnt `callbackFn` mit dem ersten Element als `currentValue` auszuführen. Ist `initialValue` _nicht_ angegeben, wird `accumulator` auf das erste Element initialisiert, und `callbackFn` beginnt mit dem zweiten Element als `currentValue` zu arbeiten. In diesem Fall wird ein Fehler ausgelöst, wenn der Iterator leer ist (sodass kein erster Wert als `accumulator` zurückgegeben werden kann).

### Rückgabewert

Der Wert, der sich ergibt, nachdem die "Reducer"-Callback-Funktion über den gesamten Iterator vollständig ausgeführt wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Iterator keine Elemente enthält und `initialValue` nicht angegeben ist.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für Details, wie `reduce()` arbeitet. Im Gegensatz zu den meisten anderen Hilfsmethoden für Iteratoren funktioniert es nicht gut mit unendlichen Iteratoren, da es nicht lazy ist.

## Beispiele

### Verwendung von reduce()

Im folgenden Beispiel wird ein Iterator erstellt, der Begriffe der Fibonacci-Folge erzeugt und dann die ersten zehn Begriffe summiert:

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
