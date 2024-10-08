---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`find()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt das erste Element im bereitgestellten `typed array` zurück, das die angegebene Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.find()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-find.html")}}

## Syntax

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im `typed array` ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im `typed array` verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im `typed array` verarbeitet wird.
    - `array`
      - : Das `typed array`, auf dem `find()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das erste Element im `typed array`, das die angegebene Testfunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.find()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf `typed array`-Instanzen aufgerufen werden.

## Beispiele

### Eine Primzahl in einem `typed array` finden

Im folgenden Beispiel wird ein Element im `typed array` gefunden, das eine Primzahl ist (oder {{jsxref("undefined")}} zurückgegeben, wenn keine Primzahl vorhanden ist).

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
- [JavaScript `typed arrays`](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
