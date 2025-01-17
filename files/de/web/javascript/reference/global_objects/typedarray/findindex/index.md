---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
l10n:
  sourceCommit: 9d3e6e4e561c276f8a31d848c3a392de1b0a69d4
---

{{JSRef}}

Die **`findIndex()`**-Methode von {{jsxref("TypedArray")}} Instanzen gibt den Index des ersten Elements in einem typisierten Array zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird -1 zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.findIndex()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-findindex.html")}}

## Syntax

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `findIndex()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative methods](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des ersten Elements im typisierten Array, das den Test besteht. Andernfalls `-1`.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.findIndex()")}}. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Den Index der ersten Primzahl in einem typisierten Array finden

Das folgende Beispiel gibt den Index des ersten Elements im typisierten Array zurück, das eine Primzahl ist, oder `-1`, wenn es keine Primzahl gibt.

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

const uint8 = new Uint8Array([4, 6, 8, 12]);
const uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, not found
console.log(uint16.findIndex(isPrime)); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Leitfaden zu JavaScript-typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findIndex()")}}
