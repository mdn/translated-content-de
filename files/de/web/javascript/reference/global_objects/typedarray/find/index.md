---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
l10n:
  sourceCommit: 9d3e6e4e561c276f8a31d848c3a392de1b0a69d4
---

{{JSRef}}

Die **`find()`** Methode von {{jsxref("TypedArray")}} Instanzen gibt das erste Element im angegebenen typisierten Array zurück, das die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben. Diese Methode verwendet den gleichen Algorithmus wie {{jsxref("Array.prototype.find()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-find.html")}}

## Syntax

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `find()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das erste Element im typisierten Array, das die bereitgestellte Testfunktion erfüllt.
Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.find()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Finde die erste Primzahl in einem typisierten Array

Das folgende Beispiel gibt das erste Element im typisierten Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn keine Primzahl vorhanden ist.

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

const uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime)); // 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.find` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
