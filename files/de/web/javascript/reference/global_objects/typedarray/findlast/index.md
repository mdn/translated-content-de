---
title: TypedArray.prototype.findLast()
short-title: findLast()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLast
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`findLast()`** Methode von {{jsxref("TypedArray")}} Instanzen iteriert das typisierte Array in umgekehrter Reihenfolge und gibt den Wert des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt. Wenn keine Elemente die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben. Diese Methode hat den gleichen Algorithmus wie {{jsxref("Array.prototype.findLast()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.findLast()")}}

```js interactive-example
function isNegative(element /*, index, array */) {
  return element < 0;
}

const int8 = new Int8Array([10, 0, -10, 20, -30, 40, 50]);

console.log(int8.find(isNegative));
// Expected output: -30
```

## Syntax

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `findLast()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das letzte (höchste Index-) Element im typisierten Array, das die bereitgestellte Testfunktion erfüllt; {{jsxref("undefined")}} falls kein passendes Element gefunden wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.findLast()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Das letzte Primzahl im typisierten Array finden

Das folgende Beispiel gibt das letzte Element im typisierten Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn es keine Primzahl gibt.

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
console.log(uint8.findLast(isPrime)); // undefined (no primes in array)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLast(isPrime)); // 11
```

> [!NOTE]
> Die `isPrime()` Implementierung dient nur zur Demonstration. Für eine Anwendung in der realen Welt sollten Sie einen stark memoisierten Algorithmus wie das [Sieb des Eratosthenes](https://de.wikipedia.org/wiki/Sieb_des_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.findLast` in `core-js`](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript-Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.findLast()")}}
