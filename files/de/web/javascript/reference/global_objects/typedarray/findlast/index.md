---
title: TypedArray.prototype.findLast()
short-title: findLast()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLast
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`findLast()`** von {{jsxref("TypedArray")}}-Instanzen durchläuft das typisierte Array in umgekehrter Reihenfolge und gibt den Wert des ersten Elements zurück, das die angegebene Prüffunktion erfüllt. Erfüllt kein Element die Prüffunktion, wird {{jsxref("undefined")}} zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.findLast()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.findLast()")}}

```js interactive-example
function isNegative(element /*, index, array */) {
  return element < 0;
}

const int8 = new Int8Array([10, 0, -10, 20, -30, 40, 50]);

console.log(int8.findLast(isNegative));
// Expected output: -30
```

## Syntax

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element des typisierten Arrays ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn ein passendes Element gefunden wurde, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell im typisierten Array verarbeitete Element.
    - `index`
      - : Der Index des aktuell im typisierten Array verarbeiteten Elements.
    - `array`
      - : Das typisierte Array, auf dem `findLast()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der beim Ausführen von `callbackFn` als `this` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das letzte Element (mit dem höchsten Index) im typisierten Array, das die angegebene Prüffunktion erfüllt; {{jsxref("undefined")}}, wenn kein passendes Element gefunden wird.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.findLast()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### Die letzte Primzahl in einem typisierten Array finden

Das folgende Beispiel gibt das letzte Element im typisierten Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn keine Primzahl vorhanden ist.

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
> Die Implementierung von `isPrime()` dient nur zur Veranschaulichung. In einer praktischen Anwendung sollten Sie einen Algorithmus mit umfassender {{Glossary("Memoization", "Memoisierung")}} wie das [Sieb des Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.findLast` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.findLast()")}}
