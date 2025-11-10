---
title: TypedArray.prototype.some()
short-title: some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
l10n:
  sourceCommit: 4bfeb5a89c1528da7cb7847a9ccb93f9b00290f0
---

Die **`some()`**-Methode von {{jsxref("TypedArray")}} Instanzen gibt `true` zurück, wenn sie ein Element im Array findet, das die bereitgestellte Prüf-Funktion erfüllt. Andernfalls gibt sie `false` zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.some()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.some()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, 20, -30, 40, -50]);
const positives = new Int8Array([10, 20, 30, 40, 50]);

console.log(int8.some(isNegative));
// Expected output: true

console.log(positives.some(isNegative));
// Expected output: false
```

## Syntax

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im TypedArray ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert, falls nicht. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im TypedArray verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im TypedArray verarbeitet wird.
    - `array`
      - : Das TypedArray, auf dem `some()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`false`, es sei denn, `callbackFn` gibt einen {{Glossary("truthy", "truthy")}} Wert für ein Element des TypedArrays zurück, in welchem Fall `true` sofort zurückgegeben wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.some()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf TypedArray-Instanzen aufgerufen werden.

## Beispiele

### Prüfen der Größe aller TypedArray-Elemente

Das folgende Beispiel prüft, ob ein Element im TypedArray größer als 10 ist.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.some` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript TypedArrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("Array.prototype.some()")}}
