---
title: TypedArray.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLast
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

Die **`findLast()`**-Methode von {{jsxref("TypedArray")}}-Instanzen durchläuft das typisierte Array in umgekehrter Reihenfolge und gibt den Wert des ersten Elements zurück, das die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben. Diese Methode hat den gleichen Algorithmus wie {{jsxref("Array.prototype.findLast()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-findlast.html")}}

## Syntax

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy)-Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen [falsy](/de/docs/Glossary/Falsy)-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `findLast()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Das letzte (höchstindexierte) Element im typisierten Array, das die bereitgestellte Testfunktion erfüllt; {{jsxref("undefined")}}, wenn kein passendes Element gefunden wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.findLast()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Finde die letzte Primzahl in einem typisierten Array

Das folgende Beispiel gibt den Wert des letzten Elements im typisierten Array zurück, das eine Primzahl ist, oder {{jsxref("undefined")}}, wenn keine Primzahl vorhanden ist.

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
console.log(uint8.findLast(isPrime)); // undefined (no primes in array)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLast(isPrime)); // 11
```

### Alle Elemente werden besucht und können vom Callback modifiziert werden

Die folgenden Beispiele zeigen, dass alle Elemente _besucht_ werden und dass der Callback-Wert ihr Wert beim Besuch ist:

```js
// Declare array with no elements at indexes 2, 3, and 4
// The missing elements will be initialized to zero.
const uint8 = new Uint8Array([0, 1, , , , 5, 6]);

// Iterate through the elements in reverse order.
// Note that all elements are visited.
uint8.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
});

// Shows all indexes, including deleted
uint8.findLast((value, index) => {
  // Modify element 3 on first iteration
  if (index === 6) {
    console.log("Set uint8[3] to 44");
    uint8[3] = 44;
  }
  // Element 3 is still visited but will have a new value.
  console.log(`Visited index ${index} with value ${value}`);
});
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value 0
// Visited index 3 with value 0
// Visited index 2 with value 0
// Visited index 1 with value 1
// Visited index 0 with value 0
// Set uint8[3] to 44
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value 0
// Visited index 3 with value 44
// Visited index 2 with value 0
// Visited index 1 with value 1
// Visited index 0 with value 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.findLast` in `core-js`](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.findLast()")}}
