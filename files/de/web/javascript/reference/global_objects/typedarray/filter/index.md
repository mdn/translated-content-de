---
title: TypedArray.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`filter()`**-Methode von {{jsxref("TypedArray")}}-Instanzen erstellt eine Kopie eines Teils eines gegebenen Typed Arrays, reduziert auf die Elemente des gegebenen Arrays, die den Test bestehen, der von der bereitgestellten Funktion implementiert wurde. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.filter()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.filter()")}}

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
  - : Eine Funktion, die für jedes Element im Typed Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um das Element im resultierenden Typed Array zu behalten, und einen {{Glossary("Falsy", "falsy")}}-Wert, wenn nicht. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Typed Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Typed Array verarbeitet wird.
    - `array`
      - : Das Typed Array, auf dem `filter()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Eine Kopie des gegebenen Typed Arrays, die nur die Elemente enthält, die den Test bestehen. Wenn keine Elemente den Test bestehen, wird ein leeres Typed Array zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.filter()")}} für weitere Einzelheiten. Diese Methode ist nicht generisch und kann nur auf Typed Array-Instanzen aufgerufen werden.

## Beispiele

### Herausfiltern aller kleinen Werte

Das folgende Beispiel verwendet `filter()`, um ein gefiltertes Typed Array zu erstellen, das alle Elemente mit Werten kleiner als 10 entfernt.

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
