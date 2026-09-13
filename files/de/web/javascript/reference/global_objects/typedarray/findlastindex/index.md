---
title: TypedArray.prototype.findLastIndex()
short-title: findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLastIndex
l10n:
  sourceCommit: 9f46f08d20b21498293cbf6b84f508103272ec6f
---

Die Methode **`findLastIndex()`** von {{jsxref("TypedArray")}}-Instanzen durchläuft das typisierte Array in umgekehrter Reihenfolge und gibt den Index des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird -1 zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.findLastIndex()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.findLastIndex()")}}

```js interactive-example
function isNegative(element /*, index, array */) {
  return element < 0;
}

const int8 = new Int8Array([10, -20, 30, -40, 50]);

console.log(int8.findLastIndex(isNegative));
// Expected output: 3
```

## Syntax

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `findLastIndex()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet werden soll. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des letzten (höchsten) Elements im typisierten Array, das den Test besteht.
Andernfalls `-1`, wenn kein passendes Element gefunden wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.findLastIndex()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf instanziierten typisierten Arrays aufgerufen werden.

## Beispiele

### Finden Sie den Index der letzten Primzahl in einem typisierten Array

Das folgende Beispiel gibt den Index des letzten Elements im typisierten Array zurück, das eine Primzahl ist, oder `-1`, wenn es keine Primzahl gibt.

```js
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
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

> [!NOTE]
> Die Implementierung von `isPrime()` dient nur zur Demonstration. Für eine reale Anwendung sollten Sie einen stark {{Glossary("Memoization", "memoisierten")}} Algorithmus wie das [Sieb des Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.findLastIndex` in `core-js`](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript-Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
