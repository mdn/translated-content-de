---
title: TypedArray.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLastIndex
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`findLastIndex()`** Methode von {{jsxref("TypedArray")}} Instanzen durchläuft das typisierte Array in umgekehrter Reihenfolge und gibt den Index des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird -1 zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.findLastIndex()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-findlastindex.html")}}

## Syntax

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen [falsy](/de/docs/Glossary/Falsy) Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `findLastIndex()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des letzten (höchstindexierten) Elements im typisierten Array, das den Test besteht.
Andernfalls `-1`, wenn kein passendes Element gefunden wird.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.findLastIndex()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Den Index der letzten Primzahl in einem typisierten Array finden

Das folgende Beispiel gibt den Index des letzten Elements im typisierten Array zurück, das eine Primzahl ist, oder `-1`, wenn keine Primzahl vorhanden ist.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

let uint8 = new Uint8Array([4, 6, 8, 12]);
console.log(uint8.findLastIndex(isPrime));
// -1 (no primes in array)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLastIndex(isPrime));
// 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.findLastIndex` in `core-js`](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
