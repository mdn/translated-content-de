---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
l10n:
  sourceCommit: a815a95e4ab4adf391d8a7bc66a3abbce1a686d8
---

{{JSRef}}

Die **`at()`**-Methode von {{jsxref("TypedArray")}}-Instanzen nimmt einen ganzzahligen Wert an und gibt das Element an diesem Index zurück, wobei sowohl positive als auch negative Ganzzahlen verwendet werden können. Negative Ganzzahlen zählen rückwärts vom letzten Element im typisierten Array. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.at()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des zu retournierenden Elements des typisierten Arrays, [konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Ein negativer Index zählt vom Ende des typisierten Arrays zurück — wenn `index < 0`, wird auf `index + array.length` zugegriffen.

### Rückgabewert

Das Element im typisierten Array, das dem angegebenen Index entspricht. Gibt immer {{jsxref("undefined")}} zurück, wenn `index < -array.length` oder `index >= array.length`, ohne zu versuchen, auf die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.at()")}}. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Den letzten Wert eines typisierten Arrays zurückgeben

Das folgende Beispiel bietet eine Funktion, die das letzte Element in einem angegebenen Array zurückgibt.

```js
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// Eine Funktion, die das letzte Element eines gegebenen Arrays zurückgibt
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem = returnLast(uint8);
console.log(lastItem); // 18
```

### Methoden vergleichen

Hier vergleichen wir verschiedene Möglichkeiten, um das vorletzte Element eines {{jsxref("TypedArray")}} auszuwählen. Während alle unten stehenden Methoden gültig sind, wird die Kürze und Lesbarkeit der `at()`-Methode hervorgehoben.

```js
// Unser typisiertes Array mit Werten
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// Verwendung der Länge-Eigenschaft
const lengthWay = uint8[uint8.length - 2];
console.log(lengthWay); // 11

// Verwendung der slice()-Methode. Beachten Sie, dass ein Array zurückgegeben wird
const sliceWay = uint8.slice(-2, -1);
console.log(sliceWay[0]); // 11

// Verwendung der at()-Methode
const atWay = uint8.at(-2);
console.log(atWay); // 11
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.at` in `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- Anleitung zu [JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
