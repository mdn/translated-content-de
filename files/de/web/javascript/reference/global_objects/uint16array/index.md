---
title: Uint16Array
slug: Web/JavaScript/Reference/Global_Objects/Uint16Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das typisierte Array **`Uint16Array`** stellt ein Array vorzeichenloser 16-Bit-Ganzzahlen in der Byte-Reihenfolge der Plattform dar. Wenn Sie die Byte-Reihenfolge festlegen müssen, verwenden Sie stattdessen {{jsxref("DataView")}}. Die Elemente werden mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten bereitgestellt werden. Nach der Erstellung können Sie über die Methoden des Objekts oder mit der üblichen Array-Index-Syntax (also der Klammernotation) auf die Elemente zugreifen.

`Uint16Array` ist eine Unterklasse der verborgenen Klasse {{jsxref("TypedArray")}}.

## Konstruktor

- {{jsxref("Uint16Array/Uint16Array", "Uint16Array()")}}
  - : Erstellt ein neues `Uint16Array`-Objekt.

## Statische Eigenschaften

_Erbt außerdem statische Eigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint16Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahl zurück. Bei `Uint16Array` ist der Wert `2`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Uint16Array.prototype` definiert und werden von allen `Uint16Array`-Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint16Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahl zurück. Bei einer `Uint16Array`-Instanz ist der Wert `2`.
- {{jsxref("Object/constructor", "Uint16Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Uint16Array`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Uint16Array/Uint16Array", "Uint16Array")}}.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Beispiele

### Verschiedene Möglichkeiten, ein Uint16Array zu erstellen

```js
// From a length
const uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Uint16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Uint16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint16FromIterable = new Uint16Array(iterable);
console.log(uint16FromIterable);
// Uint16Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Uint16Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
