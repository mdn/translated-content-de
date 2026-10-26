---
title: TypedArray.prototype.some()
short-title: some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`some()`** von {{jsxref("TypedArray")}}-Instanzen gibt `true` zurück, wenn sie ein Element im Array findet, das die angegebene Testfunktion erfüllt. Andernfalls gibt sie `false` zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.some()")}}.

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
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy-Wert")}} zurückgeben, wenn das Element den Test besteht, andernfalls einen {{Glossary("Falsy", "falsy-Wert")}}. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, für das `some()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der bei der Ausführung von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`false`, sofern `callbackFn` nicht für ein Element des typisierten Arrays einen {{Glossary("truthy", "truthy-Wert")}} zurückgibt. In diesem Fall wird sofort `true` zurückgegeben.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.some()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### Größe der Elemente eines typisierten Arrays prüfen

Das folgende Beispiel prüft, ob ein Element des typisierten Arrays größer als 10 ist.

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

- [Polyfill für `TypedArray.prototype.some` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript: Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) – Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("Array.prototype.some()")}}
