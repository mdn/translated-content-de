---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
l10n:
  sourceCommit: 4e32a881872958fdf928d8b4d42189fba2e11459
---

{{JSRef}}

Die **`every()`** Methode von {{jsxref("TypedArray")}} Instanzen prüft, ob alle Elemente im TypedArray den durch die bereitgestellte Funktion implementierten Test bestehen. Sie gibt einen Booleschen Wert zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.every()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-every.html")}}

## Syntax

```js-nolint
every(callbackFn)
every(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im TypedArray ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen [falsy](/de/docs/Glossary/Falsy) Wert andernfalls. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im TypedArray verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im TypedArray verarbeitet wird.
    - `array`
      - : Das TypedArray, auf dem `every()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`true`, es sei denn, `callbackFn` gibt einen [falsy](/de/docs/Glossary/falsy) Wert für ein TypedArray-Element zurück, in diesem Fall wird sofort `false` zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.every()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf TypedArray-Instanzen aufgerufen werden.

## Beispiele

### Testen der Größe aller TypedArray-Elemente

Im folgenden Beispiel wird geprüft, ob alle Elemente im TypedArray 10 oder größer sind.

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
