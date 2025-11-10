---
title: TypedArray.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
l10n:
  sourceCommit: 4bfeb5a89c1528da7cb7847a9ccb93f9b00290f0
---

Die **`every()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt `false` zurück, wenn sie ein Element im Array findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls gibt sie `true` zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.every()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.every()")}}

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
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `every()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet werden soll, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, solange `callbackFn` keinen {{Glossary("falsy", "falsy")}} Wert für ein Element des typisierten Arrays zurückgibt. In diesem Fall wird `false` sofort zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.every()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Testen der Größe aller typisierten Array-Elemente

Das folgende Beispiel prüft, ob alle Elemente im typisierten Array 10 oder größer sind.

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
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("Array.prototype.every()")}}
