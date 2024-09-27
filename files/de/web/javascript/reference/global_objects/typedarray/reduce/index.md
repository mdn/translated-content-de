---
title: TypedArray.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`reduce()`**-Methode von {{jsxref("TypedArray")}}-Instanzen führt eine vom Benutzer bereitgestellte „Reducer“-Rückruffunktion auf jedes Element des typisierten Arrays in Reihenfolge aus und übergibt dabei den Rückgabewert aus der Berechnung des vorhergehenden Elements. Das endgültige Ergebnis der Ausführung des Reducers über alle Elemente des typisierten Arrays ist ein einzelner Wert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.reduce()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-reduce.html")}}

## Syntax

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Ihr Rückgabewert wird der Wert des Parameters `accumulator` beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert der Rückgabewert von `reduce()`. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf ist sein Wert `initialValue`, wenn letzterer angegeben ist; andernfalls ist sein Wert `array[0]`.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert `array[0]`, wenn `initialValue` angegeben ist; andernfalls ist sein Wert `array[1]`.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im typisierten Array. Beim ersten Aufruf ist sein Wert `0`, wenn `initialValue` angegeben ist, andernfalls `1`.
    - `array`
      - : Das typisierte Array, auf dem `reduce()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Ein Wert, mit dem `accumulator` beim ersten Aufruf des Callbacks initialisiert wird.
    Wenn `initialValue` angegeben ist, beginnt `callbackFn` mit dem ersten Wert im typisierten Array als `currentValue`.
    Wenn `initialValue` _nicht_ angegeben ist, wird `accumulator` mit dem ersten Wert im typisierten Array initialisiert, und `callbackFn` beginnt mit dem zweiten Wert im typisierten Array als `currentValue`. In diesem Fall wird, wenn das typisierte Array leer ist (sodass es keinen ersten Wert gibt, der als `accumulator` zurückgegeben werden kann), ein Fehler ausgelöst.

### Rückgabewert

Der Wert, der aus der vollständigen Ausführung der „Reducer“-Rückruffunktion über das gesamte typisierte Array resultiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das typisierte Array keine Elemente enthält und `initialValue` nicht angegeben ist.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.reduce()")}}. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

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
- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
