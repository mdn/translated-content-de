---
title: TypedArray.prototype.findIndex()
short-title: findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`findIndex()`** Methode von {{jsxref("TypedArray")}} Instanzen gibt den Index des ersten Elements in einem typisierten Array zurück, das die angegebene Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird -1 zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.findIndex()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.findIndex()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([10, -20, 30, -40, 50]);

console.log(int8.findIndex(isNegative));
// Expected output: 1
```

## Syntax

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein übereinstimmendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell im typisierten Array verarbeitete Element.
    - `index`
      - : Der Index des aktuell im typisierten Array verarbeiteten Elements.
    - `array`
      - : Das typisierte Array, auf dem `findIndex()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Der Index des ersten Elements im typisierten Array, das den Test besteht. Andernfalls `-1`.

## Beschreibung

Siehe {{jsxref("Array.prototype.findIndex()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Finden Sie den Index der ersten Primzahl in einem typisierten Array

Das folgende Beispiel gibt den Index des ersten Elements im typisierten Array zurück, das eine Primzahl ist, oder `-1`, wenn es keine Primzahl gibt.

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

const uint8 = new Uint8Array([4, 6, 8, 12]);
const uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, not found
console.log(uint16.findIndex(isPrime)); // 2
```

> [!NOTE]
> Die `isPrime()` Implementation dient nur zur Demonstration. Für eine Anwendung in der realen Welt sollten Sie einen stark memoisierten Algorithmus wie das [Sieb des Eratosthenes](https://de.wikipedia.org/wiki/Sieb_des_Eratosthenes) verwenden, um wiederholte Berechnungen zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findIndex()")}}
