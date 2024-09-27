---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`some()`**-Methode von {{jsxref("TypedArray")}}-Instanzen prüft, ob mindestens ein Element im typisierten Array den Test besteht, der durch die bereitgestellte Funktion implementiert wird. Sie gibt `true` zurück, wenn sie im typisierten Array ein Element findet, für das die bereitgestellte Funktion `true` zurückgibt; andernfalls gibt sie `false` zurück. Sie ändert das typisierte Array nicht. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.some()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}

## Syntax

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen [falsy](/de/docs/Glossary/Falsy) Wert sonst. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `some()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`false`, es sei denn, `callbackFn` gibt einen [truthy](/de/docs/Glossary/truthy) Wert für ein Element des typisierten Arrays zurück, in diesem Fall wird sofort `true` zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.some()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Testen der Größe aller Elemente eines typisierten Arrays

Im folgenden Beispiel wird getestet, ob ein Element des typisierten Arrays größer als 10 ist.

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
- Anleitung zu [JavaScript-Typisierungen](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("Array.prototype.some()")}}
