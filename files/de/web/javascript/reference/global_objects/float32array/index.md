---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das typisierte Array **`Float32Array`** stellt ein Array aus 32-Bit-Gleitkommazahlen in der Byte-Reihenfolge der Plattform dar. Wenn Sie die Byte-Reihenfolge steuern müssen, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten angegeben werden. Nach der Erstellung können Sie über die Methoden des Objekts oder mit der üblichen Array-Indexsyntax (also der Klammernotation) auf die Elemente des Arrays zugreifen.

`Float32Array` ist eine Unterklasse der verborgenen Klasse {{jsxref("TypedArray")}}.

## Konstruktor

- {{jsxref("Float32Array/Float32Array", "Float32Array()")}}
  - : Erstellt ein neues `Float32Array`-Objekt.

## Statische Eigenschaften

_Erbt außerdem statische Eigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahlenwert zurück. Bei `Float32Array` ist dieser Wert `4`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Float32Array.prototype` definiert und werden von allen `Float32Array`-Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahlenwert zurück. Bei einer `Float32Array`-Instanz ist dieser Wert `4`.
- {{jsxref("Object/constructor", "Float32Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Float32Array`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Float32Array/Float32Array", "Float32Array")}}.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Beispiele

### Verschiedene Möglichkeiten, ein Float32Array zu erstellen

```js
// From a length
const float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// From an array
const x = new Float32Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Float32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Float32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float32FromIterable = new Float32Array(iterable);
console.log(float32FromIterable);
// Float32Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Float32Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
