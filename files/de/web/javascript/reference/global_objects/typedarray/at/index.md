---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
l10n:
  sourceCommit: a815a95e4ab4adf391d8a7bc66a3abbce1a686d8
---

{{JSRef}}

Die **`at()`** Methode von {{jsxref("TypedArray")}} Instanzen nimmt einen ganzzahligen Wert und gibt das Element an diesem Index zurück, wobei sowohl positive als auch negative Ganzzahlen zulässig sind. Negative Ganzzahlen zählen vom letzten Element des typisierten Arrays rückwärts. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.at()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des Elements im typisierten Array, das zurückgegeben werden soll, [umgewandelt in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt vom Ende des typisierten Arrays zurück — wenn `index < 0`, wird auf `index + array.length` zugegriffen.

### Rückgabewert

Das Element im typisierten Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length` ist, ohne zu versuchen, auf die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Siehe {{jsxref("Array.prototype.at()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Rückgabe des letzten Werts eines typisierten Arrays

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

Hier vergleichen wir verschiedene Wege, um das vorletzte Element (das letzte, aber eins) eines {{jsxref("TypedArray")}} auszuwählen. Obwohl alle unten stehenden Methoden gültig sind, wird die Prägnanz und Lesbarkeit der `at()`-Methode hervorgehoben.

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
- [Leitfaden für JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
