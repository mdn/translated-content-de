---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`at()`** von {{jsxref("TypedArray")}}-Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück, wobei positive und negative Ganzzahlen erlaubt sind. Negative Ganzzahlen zählen rückwärts vom letzten Element im Typisierten Array. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.at()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.at()")}}

```js interactive-example
const int8 = new Int8Array([0, 10, -10, 20, -30, 40, -50]);

let index = 1;

console.log(`An index of ${index} returns the item ${int8.at(index)}`);
// Expected output: "An index of 1 returns the item 10"

index = -2;

console.log(`An index of ${index} returns the item ${int8.at(index)}`);
// Expected output: "An index of -2 returns the item 40"
```

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des Elements im typisierten Array, das zurückgegeben werden soll, [umgewandelt in eine ganze Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt rückwärts vom Ende des typisierten Arrays — wenn `index < 0`, wird `index + array.length` angesprochen.

### Rückgabewert

Das Element im typisierten Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length`, ohne zu versuchen, die entsprechende Eigenschaft anzusprechen.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.at()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Rückgabe des letzten Werts eines typisierten Arrays

Das folgende Beispiel stellt eine Funktion bereit, die das letzte Element eines angegebenen Arrays zurückgibt.

```js
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem = returnLast(uint8);
console.log(lastItem); // 18
```

### Vergleich von Methoden

Hier vergleichen wir verschiedene Möglichkeiten, um das vorletzte (das letzte, aber eines) Element eines {{jsxref("TypedArray")}} auszuwählen. Während alle unten aufgeführten Methoden gültig sind, wird damit die Prägnanz und Lesbarkeit der `at()`-Methode hervorgehoben.

```js
// Our typed array with values
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// Using length property
const lengthWay = uint8[uint8.length - 2];
console.log(lengthWay); // 11

// Using slice() method. Note an array is returned
const sliceWay = uint8.slice(-2, -1);
console.log(sliceWay[0]); // 11

// Using at() method
const atWay = uint8.at(-2);
console.log(atWay); // 11
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.at` in `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- Leitfaden zu [JavaScript-Typisierten-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
