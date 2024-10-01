---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`some()`**-Methode von {{jsxref("TypedArray")}}-Instanzen überprüft, ob mindestens ein Element im verketteten Array den Test besteht, der von der bereitgestellten Funktion implementiert wird. Sie gibt `true` zurück, wenn sie ein Element findet, für das die bereitgestellte Funktion `true` zurückgibt; andernfalls gibt sie `false` zurück. Die Methode ändert das verkettete Array nicht. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.some()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}

## Syntax

```js-nolint
some(callbackFn)
some(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im verketteten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert ansonsten. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im verketteten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im verketteten Array verarbeitet wird.
    - `array`
      - : Das verkettete Array, auf dem `some()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

`false`, es sei denn, `callbackFn` gibt einen {{Glossary("truthy", "truthy")}} Wert für ein Element im verketteten Array zurück, in welchem Fall `true` sofort zurückgegeben wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.some()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf verketteten Array-Instanzen aufgerufen werden.

## Beispiele

### Größe aller Elemente im verketteten Array testen

Das folgende Beispiel testet, ob irgendein Element im verketteten Array größer als 10 ist.

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
- [JavaScript verkettete Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("Array.prototype.some()")}}
