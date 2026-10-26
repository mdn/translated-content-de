---
title: TypedArray.prototype.filter()
short-title: filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`filter()`** von {{jsxref("TypedArray")}}-Instanzen erstellt eine Kopie eines Teils eines typisierten Arrays. Diese enthält nur die Elemente des ursprünglichen typisierten Arrays, die den von der übergebenen Funktion implementierten Test bestehen. Die Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.filter()")}}.

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
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um das Element im resultierenden typisierten Array zu behalten, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, für das `filter()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der beim Ausführen von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Eine Kopie des übergebenen typisierten Arrays, die nur die Elemente enthält, die den Test bestehen. Wenn kein Element den Test besteht, wird ein leeres typisiertes Array zurückgegeben.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.filter()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### Alle kleinen Werte herausfiltern

Das folgende Beispiel verwendet `filter()`, um ein gefiltertes typisiertes Array zu erstellen, aus dem alle Elemente mit einem Wert kleiner als 10 entfernt wurden.

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

- [Polyfill für `TypedArray.prototype.filter` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
