---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`some()`**-Methode von {{jsxref("TypedArray")}}-Instanzen prüft, ob mindestens ein Element im Typed Array den Test besteht, der durch die bereitgestellte Funktion implementiert wurde. Sie gibt `true` zurück, wenn sie ein Element im Typed Array findet, für das die bereitgestellte Funktion `true` zurückgibt; andernfalls gibt sie `false` zurück. Sie verändert das Typed Array nicht. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.some()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.some()")}}

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
  - : Eine Funktion, die für jedes Element im Typed Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}}-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im Typed Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im Typed Array verarbeitet wird.
    - `array`
      - : Das Typed Array, auf das `some()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`false`, es sei denn, `callbackFn` gibt einen {{Glossary("Truthy", "truthy")}}-Wert für ein Element im Typed Array zurück; in diesem Fall wird sofort `true` zurückgegeben.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.some()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von Typed Arrays aufgerufen werden.

## Beispiele

### Prüfung der Größe aller Elemente im Typed Array

Das folgende Beispiel prüft, ob ein Element im Typed Array größer als 10 ist.

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
- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("Array.prototype.some()")}}
