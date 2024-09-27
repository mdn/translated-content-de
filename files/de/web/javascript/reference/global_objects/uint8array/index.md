---
title: Uint8Array
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Uint8Array`** typisierte Array repräsentiert ein Array von 8-Bit-Integern ohne Vorzeichen. Der Inhalt wird auf `0` initialisiert, sofern nicht explizite Initialisierungsdaten bereitgestellt werden. Sobald es erstellt ist, können Sie auf die Elemente im Array mithilfe der Methoden des Objekts oder mithilfe der Standard-Array-Indexsyntax (d. h. mit Klammernotation) zugreifen.

`Uint8Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Uint8Array/Uint8Array", "Uint8Array()")}}
  - : Erstellt ein neues `Uint8Array`-Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `1` im Fall von `Uint8Array`.

## Statische Methoden

_Erbt statische Methoden von seinem übergeordneten {{jsxref("TypedArray")}}._

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Uint8Array.prototype` definiert und werden von allen `Uint8Array`-Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `1` im Fall eines `Uint8Array`.
- {{jsxref("Object/constructor", "Uint8Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint8Array`-Instanzen ist der Anfangswert der {{jsxref("Uint8Array/Uint8Array", "Uint8Array")}} Konstruktor.

## Instanzmethoden

_Erbt Instanzmethoden von seinem übergeordneten {{jsxref("TypedArray")}}._

## Beispiele

### Verschiedene Möglichkeiten, ein Uint8Array zu erstellen

```js
// From a length
const uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Uint8Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8FromIterable = new Uint8Array(iterable);
console.log(uint8FromIterable);
// Uint8Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint8Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
