---
title: TypedArray.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
l10n:
  sourceCommit: dd88a6eb2176fa31f5b744d8964efecf3f1f425b
---

Die **`every()`**-Methode von {{jsxref("TypedArray")}} Instanzen gibt `false` zurück, wenn ein Element im Array gefunden wird, das die angegebene Testfunktion nicht erfüllt. Andernfalls gibt sie `true` zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.every()")}}.

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
  - : Eine Funktion, die für jedes Element im Typ-Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Typ-Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Typ-Array verarbeitet wird.
    - `array`
      - : Das Typ-Array, auf welchem `every()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, es sei denn, `callbackFn` gibt einen {{Glossary("falsy", "falsy")}} Wert für ein Typ-Array-Element zurück, in diesem Fall wird `false` sofort zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.every()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Typ-Array-Instanzen angewendet werden.

## Beispiele

### Testen der Größe aller Typ-Array-Elemente

Das folgende Beispiel testet, ob alle Elemente im Typ-Array 10 oder größer sind.

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("Array.prototype.every()")}}
