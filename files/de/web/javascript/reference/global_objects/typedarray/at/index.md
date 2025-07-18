---
title: TypedArray.prototype.at()
short-title: at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`at()`**-Methode von {{jsxref("TypedArray")}} Instanzen nimmt einen ganzzahligen Wert entgegen und gibt das Element an diesem Index zurück, wobei sowohl positive als auch negative Ganzzahlen erlaubt sind. Negative Ganzzahlen zählen rückwärts vom letzten Element des typisierten Arrays. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.at()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.at()")}}

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
  - : Nullbasierter Index des typisierten Array-Elements, das zurückgegeben werden soll, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt rückwärts vom Ende des typisierten Arrays — wenn `index < 0` ist, wird `index + array.length` aufgerufen.

### Rückgabewert

Das Element im typisierten Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length`, ohne zu versuchen, auf die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Siehe {{jsxref("Array.prototype.at()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen eines typisierten Arrays aufgerufen werden.

## Beispiele

### Das letzte Element eines typisierten Arrays zurückgeben

Das folgende Beispiel bietet eine Funktion, die das letzte Element in einem angegebenen Array zurückgibt.

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

Hier vergleichen wir verschiedene Möglichkeiten, um das vorletzte Element (das letzte, aber eins) eines {{jsxref("TypedArray")}} auszuwählen. Während alle untenstehenden Methoden gültig sind, hebt dies die Prägnanz und Lesbarkeit der `at()`-Methode hervor.

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

- [Polyfill von `TypedArray.prototype.at` in `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- [es-shims Polyfill von `TypedArray.prototype.at`](https://www.npmjs.com/package/typedarray.prototype.at)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
