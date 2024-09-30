---
title: TypedArray.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`reduceRight()`**-Methode von {{jsxref("TypedArray")}}-Instanzen wendet eine Funktion auf einen Akkumulator und jeden Wert des typisierten Arrays (von rechts nach links) an, um ihn auf einen einzelnen Wert zu reduzieren. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.reduceRight()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-reduceright.html")}}

## Syntax

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Ihr Rückgabewert wird zum Wert des `accumulator`-Parameters beim nächsten Aufruf von `callbackFn`. Beim letzten Aufruf wird der Rückgabewert zum Rückgabewert von `reduceRight()`. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `accumulator`
      - : Der Wert, der sich aus dem vorherigen Aufruf von `callbackFn` ergibt. Beim ersten Aufruf ist sein Wert `initialValue`, wenn letzteres angegeben ist; andernfalls ist sein Wert das letzte Element des typisierten Arrays.
    - `currentValue`
      - : Der Wert des aktuellen Elements. Beim ersten Aufruf ist sein Wert das letzte Element, wenn `initialValue` angegeben ist; andernfalls ist sein Wert das vorletzte Element.
    - `currentIndex`
      - : Die Indexposition von `currentValue` im typisierten Array. Beim ersten Aufruf ist sein Wert `array.length - 1`, wenn `initialValue` angegeben ist, andernfalls `array.length - 2`.
    - `array`
      - : Das typisierte Array, auf dem `reduceRight()` aufgerufen wurde.
- `initialValue` {{optional_inline}}
  - : Wert, der als Akkumulator beim ersten Aufruf von `callbackFn` verwendet wird. Wenn kein Anfangswert angegeben wird, wird das letzte Element im typisierten Array verwendet und übersprungen. Der Aufruf von `reduceRight()` auf ein leeres typisiertes Array ohne Anfangswert erzeugt einen `TypeError`.

### Rückgabewert

Der Wert, der aus der Reduktion resultiert.

## Beschreibung

Siehe {{jsxref("Array.prototype.reduceRight()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanz-Typisierungs-Arrays aufgerufen werden.

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
