---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`reduce()`** Methode von {{jsxref("TypedArray")}} Instanzen führt eine benutzerdefinierte "Reducer"-Callback-Funktion für jedes Element des typisierten Arrays aus, in Reihenfolge, wobei der Rückgabewert der Berechnung des vorherigen Elements übergeben wird. Das Endergebnis des Ablaufens des Reducers über alle Elemente des typisierten Arrays ist ein einzelner Wert. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.reduce()")}}.

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
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters bei der nächsten Ausführung von `callbackFn`. Bei der letzten Ausführung wird der Rückgabewert zum Rückgabewert von `reduce()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls letzterer angegeben ist; andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, falls `initialValue` angegeben ist; andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im typisierten Array. Beim ersten Aufruf ist sein Wert `0`, falls `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das typisierte Array, auf dem `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` initialisiert wird, wenn das Callback zum ersten Mal aufgerufen wird.
    Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Wert im typisierten Array als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` auf den ersten Wert im typisierten Array initialisiert und `callbackFn` beginnt mit dem zweiten Wert im typisierten Array als `currentValue`. In diesem Fall, wenn das typisierte Array leer ist (sodass es keinen ersten Wert gibt, der als `accumulator` zurückgegeben werden kann), wird ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der sich ergibt, wenn die "Reducer"-Callback-Funktion über das gesamte typisierte Array vollständig ausgeführt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das typisierte Array keine Elemente enthält und `initialValue` nicht bereitgestellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduce()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen eines typisierten Arrays aufgerufen werden.

## Beispiele

### Summe aller Werte innerhalb eines Arrays

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
