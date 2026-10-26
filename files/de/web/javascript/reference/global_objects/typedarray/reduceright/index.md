---
title: TypedArray.prototype.reduceRight()
short-title: reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`reduceRight()`** von {{jsxref("TypedArray")}}-Instanzen wendet eine Funktion auf einen Akkumulator und jeden Wert des typisierten Arrays an (von rechts nach links), um die Werte auf einen einzigen Wert zu reduzieren. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.reduceRight()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.reduceRight()")}}

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
  - : Eine Funktion, die für jedes Element des typisierten Arrays ausgeführt wird. Ihr Rückgabewert wird beim nächsten Aufruf von `callbackFn` zum Wert des Parameters `accumulator`. Beim letzten Aufruf wird ihr Rückgabewert zum Rückgabewert von `reduceRight()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieser angegeben wurde; andernfalls ist er das letzte Element des typisierten Arrays.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist dies das letzte Element, wenn `initialValue` angegeben wurde; andernfalls ist es das vorletzte Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im typisierten Array. Beim ersten Aufruf ist ihr Wert `array.length - 1`, wenn `initialValue` angegeben wurde; andernfalls ist er `array.length - 2`.
    - `array`
      - : Das typisierte Array, für das `reduceRight()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Der Wert, der beim ersten Aufruf von `callbackFn` als Akkumulator verwendet wird. Wird kein Anfangswert angegeben, wird das letzte Element des typisierten Arrays verwendet und bei der Iteration übersprungen. Ein Aufruf von `reduceRight()` für ein leeres typisiertes Array ohne Anfangswert löst einen `TypeError` aus.

### Rückgabewert

Der Wert, der sich aus der Reduktion ergibt.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.reduceRight()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### Alle Werte in einem Array summieren

```js
const total = new Uint8Array([0, 1, 2, 3]).reduceRight((a, b) => a + b);
// total === 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.reduceRight` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
