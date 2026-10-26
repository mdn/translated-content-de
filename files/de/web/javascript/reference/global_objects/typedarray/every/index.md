---
title: TypedArray.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`every()`** von {{jsxref("TypedArray")}}-Instanzen gibt `false` zurück, wenn sie ein Element im Array findet, das die angegebene Prüffunktion nicht erfüllt. Andernfalls gibt sie `true` zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.every()")}}.

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
  - : Eine Funktion, die für jedes Element im Typed Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn das Element den Test besteht, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element im Typed Array.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements im Typed Array.
    - `array`
      - : Das Typed Array, für das `every()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der beim Ausführen von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, es sei denn, `callbackFn` gibt für ein Element des Typed Arrays einen {{Glossary("falsy", "falsy")}}-Wert zurück. In diesem Fall wird sofort `false` zurückgegeben.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.every()")}}. Diese Methode ist nicht generisch und kann nur für Typed-Array-Instanzen aufgerufen werden.

## Beispiele

### Größe aller Elemente eines Typed Arrays prüfen

Das folgende Beispiel prüft, ob alle Elemente im Typed Array mindestens 10 sind.

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

- [Polyfill für `TypedArray.prototype.every` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("Array.prototype.every()")}}
