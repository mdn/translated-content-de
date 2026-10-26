---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das typisierte Array **`Uint8ClampedArray`** stellt ein Array vorzeichenloser 8-Bit-Ganzzahlen dar, deren Werte auf den Bereich von 0 bis 255 begrenzt werden. Die Elemente werden mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten angegeben werden. Nach der Erstellung können Sie mit den Methoden des Objekts oder mit der üblichen Array-Indexsyntax (also der Klammerschreibweise) auf die Elemente zugreifen.

`Uint8ClampedArray` ist eine Unterklasse der verborgenen Klasse {{jsxref("TypedArray")}}.

## Konstruktor

- {{jsxref("Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray()")}}
  - : Erstellt ein neues `Uint8ClampedArray`-Objekt.

## Statische Eigenschaften

_Erbt außerdem statische Eigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Größe eines Elements zurück. Bei `Uint8ClampedArray` ist dieser Wert `1`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Uint8ClampedArray.prototype` definiert und werden von allen `Uint8ClampedArray`-Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Größe eines Elements zurück. Bei einer `Uint8ClampedArray`-Instanz ist dieser Wert `1`.
- {{jsxref("Object/constructor", "Uint8ClampedArray.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint8ClampedArray`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray")}}.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Beispiele

### Verschiedene Möglichkeiten, ein Uint8ClampedArray zu erstellen

```js
// From a length
const uint8c = new Uint8ClampedArray(2);
uint8c[0] = 42;
uint8c[1] = 1337;
console.log(uint8c[0]); // 42
console.log(uint8c[1]); // 255 (clamped)
console.log(uint8c.length); // 2
console.log(uint8c.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8cFromIterable = new Uint8ClampedArray(iterable);
console.log(uint8cFromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Uint8ClampedArray` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
