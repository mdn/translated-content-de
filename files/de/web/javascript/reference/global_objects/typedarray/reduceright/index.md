---
title: TypedArray.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`reduceRight()`**-Methode von {{jsxref("TypedArray")}}-Instanzen wendet eine Funktion gegen einen Akkumulator und jedes Wertpaar im TypedArray an (von rechts nach links), um es auf einen einzigen Wert zu reduzieren. Diese Methode verwendet den gleichen Algorithmus wie {{jsxref("Array.prototype.reduceRight()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.reduceRight()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30]);

const result = uint8.reduceRight(
  (accumulator, currentValue) => `${accumulator}, ${currentValue}`,
);

console.log(result);
// Expected output: "30, 20, 10"
```

## Syntax

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im TypedArray ausgeführt wird. Ihr Rückgabewert wird der Wert des Parameters `accumulator` beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduceRight()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf ist sein Wert entweder `initialValue` (falls dieser angegeben ist) oder der letzte Wert des TypedArrays.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert entweder der letzte Wert des Arrays (falls `initialValue` angegeben ist) oder der vorletzte Wert.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im TypedArray. Beim ersten Aufruf ist sein Wert `array.length - 1`, wenn `initialValue` angegeben ist, ansonsten `array.length - 2`.
    - `array`
      - : Das TypedArray, auf dem `reduceRight()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Wert, der als Akkumulator beim ersten Aufruf der `callbackFn` verwendet wird. Wenn kein Initialwert angegeben wird, wird das letzte Element im TypedArray verwendet und übersprungen. Der Versuch, `reduceRight()` auf einem leeren TypedArray ohne Initialwert aufzurufen, führt zu einem `TypeError`.

### Rückgabewert

Der Wert, der aus der Reduktion resultiert.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduceRight()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf TypedArray-Instanzen aufgerufen werden.

## Beispiele

### Alle Werte innerhalb eines Arrays addieren

```js
const total = new Uint8Array([0, 1, 2, 3]).reduceRight((a, b) => a + b);
// total === 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.reduceRight` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-TypedArrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
