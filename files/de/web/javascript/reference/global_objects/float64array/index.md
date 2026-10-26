---
title: Float64Array
slug: Web/JavaScript/Reference/Global_Objects/Float64Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das typisierte Array **`Float64Array`** stellt ein Array aus 64-Bit-Gleitkommazahlen in der Byte-Reihenfolge der Plattform dar. Wenn Sie die Byte-Reihenfolge steuern müssen, verwenden Sie stattdessen {{jsxref("DataView")}}. Die Elemente werden mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten angegeben werden. Nach dem Erstellen können Sie über die Methoden des Objekts oder mit der üblichen Array-Index-Syntax (also der Klammernotation) auf die Elemente zugreifen.

`Float64Array` ist eine Unterklasse der verborgenen Klasse {{jsxref("TypedArray")}}.

## Konstruktor

- {{jsxref("Float64Array/Float64Array", "Float64Array()")}}
  - : Erstellt ein neues `Float64Array`-Objekt.

## Statische Eigenschaften

_Erbt außerdem statische Eigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float64Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Größe eines Elements zurück. Bei `Float64Array` ist dieser Wert `8`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Float64Array.prototype` definiert und werden von allen `Float64Array`-Instanzen gemeinsam verwendet.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Größe eines Elements zurück. Bei einem `Float64Array` ist dieser Wert `8`.
- {{jsxref("Object/constructor", "Float64Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Float64Array`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Float64Array/Float64Array", "Float64Array")}}.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Beispiele

### Verschiedene Möglichkeiten, ein Float64Array zu erstellen

```js
// From a length
const float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new Float64Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new Float64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float64FromIterable = new Float64Array(iterable);
console.log(float64FromIterable);
// Float64Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Float64Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
