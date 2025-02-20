---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`findIndex()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt den Index des ersten Elements in einem TypedArray zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird `-1` zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.findIndex()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.findIndex()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([10, -20, 30, -40, 50]);

console.log(int8.findIndex(isNegative));
// Expected output: 1
```

## Syntax

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im TypedArray ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}}-Wert, wenn dies nicht der Fall ist. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im TypedArray verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im TypedArray verarbeitet wird.
    - `array`
      - : Das TypedArray, auf dem `findIndex()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet werden soll, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des ersten Elements im TypedArray, das den Test besteht. Andernfalls `-1`.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.findIndex()")}}. Diese Methode ist nicht generisch und kann nur auf TypedArray-Instanzen aufgerufen werden.

## Beispiele

### Den Index der ersten Primzahl in einem TypedArray finden

Das folgende Beispiel gibt den Index des ersten Elements im TypedArray zurück, welches eine Primzahl ist, oder `-1`, wenn keine Primzahl vorhanden ist.

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

const uint8 = new Uint8Array([4, 6, 8, 12]);
const uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, not found
console.log(uint16.findIndex(isPrime)); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript TypedArrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findIndex()")}}
