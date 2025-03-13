---
title: TypedArray.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`reduceRight()`** Methode von {{jsxref("TypedArray")}} Instanzen wendet eine Funktion gegen einen Akkumulator und jeden Wert des typisierten Arrays (von rechts nach links) an, um es auf einen einzigen Wert zu reduzieren. Diese Methode folgt demselben Algorithmus wie {{jsxref("Array.prototype.reduceRight()")}}.

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
  - : Eine Funktion, die für jedes Element im Typenarray ausgeführt wird. Ihr Rückgabewert wird der Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduceRight()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der aus dem vorherigen Aufruf von `callbackFn` resultiert. Beim ersten Aufruf ist sein Wert `initialValue`, falls dieses angegeben ist; andernfalls ist es der letzte Wert des Typenarrays.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert das letzte Element, falls `initialValue` angegeben ist; andernfalls der vorletzte Wert.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im Typenarray. Beim ersten Aufruf ist sein Wert `array.length - 1`, falls `initialValue` angegeben ist, andernfalls `array.length - 2`.
    - `array`
      - : Das Typenarray, auf dem `reduceRight()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Wert, der als Akkumulator beim ersten Aufruf von `callbackFn` verwendet wird. Wenn kein Anfangswert angegeben wird, wird das letzte Element im Typenarray verwendet und übersprungen. Das Aufrufen von `reduceRight()` auf einem leeren Typenarray ohne Anfangswert erzeugt einen `TypeError`.

### Rückgabewert

Der Wert, der aus der Reduktion resultiert.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduceRight()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Typenarray-Instanzen aufgerufen werden.

## Beispiele

### Alle Werte innerhalb eines Arrays aufsummieren

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
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("Object.groupBy()")}}
- {{jsxref("Map.groupBy()")}}
