---
title: TypedArray.prototype.at()
short-title: at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`at()`** von {{jsxref("TypedArray")}}-Instanzen nimmt eine Ganzzahl entgegen und gibt das Element an diesem Index zurück. Dabei sind positive und negative Ganzzahlen zulässig. Negative Ganzzahlen zählen vom letzten Element des typisierten Arrays rückwärts. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.at()")}}.

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
  - : Nullbasierter Index des zurückzugebenden Elements des typisierten Arrays, der [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) wird. Ein negativer Index zählt vom Ende des typisierten Arrays rückwärts – wenn `index < 0`, wird auf `index + array.length` zugegriffen.

### Rückgabewert

Das Element des typisierten Arrays am angegebenen Index. Wenn `index < -array.length` oder `index >= array.length`, wird immer {{jsxref("undefined")}} zurückgegeben, ohne zu versuchen, auf die entsprechende Eigenschaft zuzugreifen.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.at()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### Den letzten Wert eines typisierten Arrays zurückgeben

Das folgende Beispiel zeigt eine Funktion, die das letzte Element eines angegebenen Arrays zurückgibt.

```js
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem = returnLast(uint8);
console.log(lastItem); // 18
```

### Methoden vergleichen

Hier vergleichen wir verschiedene Möglichkeiten, das vorletzte Element eines {{jsxref("TypedArray")}} auszuwählen. Alle folgenden Methoden sind gültig; der Vergleich verdeutlicht jedoch, wie knapp und gut lesbar die Methode `at()` ist.

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

- [Polyfill für `TypedArray.prototype.at` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [es-shims-Polyfill für `TypedArray.prototype.at`](https://www.npmjs.com/package/typedarray.prototype.at)
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
