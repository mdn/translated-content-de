---
title: TypedArray.prototype.reduce()
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`reduce()`**-Methode von {{jsxref("TypedArray")}} Instanzen führt eine benutzerdefinierte "Reducer"-Callback-Funktion auf jedes Element des typisierten Arrays in der Reihenfolge aus und übergibt den Rückgabewert der Berechnung des vorherigen Elements. Das Endergebnis der Ausführung des Reducers über alle Elemente des typisierten Arrays ist ein einzelner Wert. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.reduce()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.reduce()")}}

```js interactive-example
const uint8 = new Uint8Array([0, 1, 2, 3]);

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

console.log(uint8.reduce(sum));
// Expected output: 6
```

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Ihr Rückgabewert wird der Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf ist dessen Wert `initialValue`, falls letzterer angegeben ist; andernfalls ist der Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist dessen Wert `array[0]`, falls `initialValue` angegeben ist; andernfalls ist der Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im typisierten Array. Beim ersten Aufruf ist dessen Wert `0`, falls `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das typisierte Array, auf dem `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, auf den `accumulator` beim ersten Aufruf des Rückrufs initialisiert wird.
    Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Wert im typisierten Array als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` auf den ersten Wert des typisierten Arrays initialisiert, und `callbackFn` beginnt mit dem zweiten Wert im typisierten Array als `currentValue` auszuführen. In diesem Fall wird ein Fehler ausgelöst, falls das typisierte Array leer ist (und es keinen ersten Wert gibt, der als `accumulator` zurückgegeben werden kann).

### Rückgabewert

Der Wert, der sich ergibt, wenn die "Reducer"-Callback-Funktion über das gesamte typisierte Array zur Vollendung ausgeführt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das typisierte Array keine Elemente enthält und `initialValue` nicht angegeben ist.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Alle Werte innerhalb eines Arrays zusammenzählen

```js
const total = new Uint8Array([0, 1, 2, 3]).reduce((a, b) => a + b);
// total === 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.reduce` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
