---
title: TypedArray.prototype.slice()
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`slice()`** von {{jsxref("TypedArray")}}-Instanzen gibt eine Kopie eines Teils eines typisierten Arrays als neues typisiertes Array zurück. Der kopierte Bereich reicht von `start` bis `end`, wobei `end` nicht eingeschlossen ist. `start` und `end` bezeichnen die Indizes der Elemente im typisierten Array. Das ursprüngliche typisierte Array wird nicht verändert. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.slice()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.slice()", "shorter")}}

```js interactive-example
const bytes = new Uint8Array([10, 20, 30, 40, 50]);
const byteSlice = bytes.slice(1, 3);

console.log(byteSlice);
// Expected output: Uint8Array [20, 30]
```

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameter

- `start` {{optional_inline}}
  - : Nullbasierter Index, an dem das Kopieren beginnt; er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Nullbasierter Index, an dem das Kopieren endet; er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` kopiert die Elemente bis zu diesem Index, schließt `end` aber nicht ein.

### Rückgabewert

Ein neues typisiertes Array mit den kopierten Elementen.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.slice()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### Einen Teil eines vorhandenen typisierten Arrays zurückgeben

```js
const bytes = new Uint8Array([1, 2, 3]);
bytes.slice(1); // Uint8Array [ 2, 3 ]
bytes.slice(2); // Uint8Array [ 3 ]
bytes.slice(-2); // Uint8Array [ 2, 3 ]
bytes.slice(0, 1); // Uint8Array [ 1 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.slice` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Polyfill für `TypedArray.prototype.slice` von es-shims](https://www.npmjs.com/package/typedarray.prototype.slice)
- Leitfaden zu [typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
