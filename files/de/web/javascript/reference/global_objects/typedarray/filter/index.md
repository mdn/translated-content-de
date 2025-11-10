---
title: TypedArray.prototype.filter()
short-title: filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`filter()`**-Methode von {{jsxref("TypedArray")}}-Instanzen erstellt eine Kopie eines Teils eines gegebenen typisierten Arrays, gefiltert auf nur die Elemente aus dem gegebenen typisierten Array, die den Test bestehen, der von der bereitgestellten Funktion implementiert wird. Diese Methode hat den gleichen Algorithmus wie {{jsxref("Array.prototype.filter()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.filter()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, 20, -30, 40, -50]);
const negInt8 = int8.filter(isNegative);

console.log(negInt8);
// Expected output: Int8Array [-10, -30, -50]
```

## Syntax

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um das Element im resultierenden typisierten Array zu behalten, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `filter()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Eine Kopie des gegebenen typisierten Arrays, das nur die Elemente enthält, die den Test bestehen. Wenn kein Element den Test besteht, wird ein leeres typisiertes Array zurückgegeben.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.filter()")}}. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Herausfiltern aller kleinen Werte

Das folgende Beispiel verwendet `filter()`, um ein gefiltertes typisiertes Array zu erstellen, das alle Elemente mit Werten unter 10 entfernt.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(isBigEnough);
// Uint8Array [ 12, 130, 44 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.filter` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- Leitfaden zu [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
