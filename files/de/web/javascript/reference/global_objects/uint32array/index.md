---
title: Uint32Array
slug: Web/JavaScript/Reference/Global_Objects/Uint32Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das typisierte Array **`Uint32Array`** stellt ein Array vorzeichenloser 32-Bit-Ganzzahlen in der Byte-Reihenfolge der Plattform dar. Wenn Sie die Byte-Reihenfolge steuern müssen, verwenden Sie stattdessen {{jsxref("DataView")}}. Die Elemente werden mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten bereitgestellt werden. Nach dem Erstellen können Sie über die Methoden des Objekts oder mit der üblichen Array-Index-Syntax (also mit eckigen Klammern) auf die Elemente des Arrays zugreifen.

`Uint32Array` ist eine Unterklasse der verborgenen Klasse {{jsxref("TypedArray")}}.

## Konstruktor

- {{jsxref("Uint32Array/Uint32Array", "Uint32Array()")}}
  - : Erstellt ein neues `Uint32Array`-Objekt.

## Statische Eigenschaften

_Erbt außerdem statische Eigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint32Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahl zurück. Bei `Uint32Array` ist der Wert `4`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Uint32Array.prototype` definiert und werden von allen `Uint32Array`-Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahl zurück. Bei einer `Uint32Array`-Instanz ist der Wert `4`.
- {{jsxref("Object/constructor", "Uint32Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint32Array`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Uint32Array/Uint32Array", "Uint32Array")}}.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Beispiele

### Verschiedene Möglichkeiten, ein Uint32Array zu erstellen

```js
// From a length
const uint32 = new Uint32Array(2);
uint32[0] = 42;
console.log(uint32[0]); // 42
console.log(uint32.length); // 2
console.log(uint32.BYTES_PER_ELEMENT); // 4

// From an array
const x = new Uint32Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Uint32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint32FromIterable = new Uint32Array(iterable);
console.log(uint32FromIterable);
// Uint32Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Uint32Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
