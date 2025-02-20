---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`every()`**-Methode von {{jsxref("TypedArray")}}-Instanzen überprüft, ob alle Elemente im TypedArray den Test bestehen, der von der bereitgestellten Funktion implementiert wurde. Sie gibt einen Boolean-Wert zurück. Diese Methode folgt demselben Algorithmus wie {{jsxref("Array.prototype.every()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.every()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, -20, -30, -40, -50]);

console.log(int8.every(isNegative));
// Expected output: true
```

## Syntax

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im TypedArray ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy-Wert")}} zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy-Wert")}} andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im TypedArray verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im TypedArray verarbeitet wird.
    - `array`
      - : Das TypedArray, auf dem `every()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, es sei denn, `callbackFn` gibt für ein Element des TypedArrays einen {{Glossary("Falsy", "falsy-Wert")}} zurück, in diesem Fall wird sofort `false` zurückgegeben.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.every()")}}. Diese Methode ist nicht generisch und kann nur auf TypedArray-Instanzen aufgerufen werden.

## Beispiele

### Überprüfen der Größe aller Elemente des TypedArrays

Das folgende Beispiel überprüft, ob alle Elemente im TypedArray 10 oder größer sind.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough); // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.every` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Leitfaden zu JavaScript TypedArrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("Array.prototype.every()")}}
