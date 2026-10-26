---
title: Int32Array
slug: Web/JavaScript/Reference/Global_Objects/Int32Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das typisierte Array **`Int32Array`** stellt ein Array vorzeichenbehafteter 32-Bit-Ganzzahlen in der Byte-Reihenfolge der Plattform dar. Wenn Sie die Byte-Reihenfolge steuern müssen, verwenden Sie stattdessen {{jsxref("DataView")}}. Die Elemente werden mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten angegeben werden. Nach der Erstellung können Sie über die Methoden des Objekts oder mit der üblichen Syntax für Array-Indizes (also der Klammernotation) auf die Elemente des Arrays zugreifen.

`Int32Array` ist eine Unterklasse der verborgenen Klasse {{jsxref("TypedArray")}}.

## Konstruktor

- {{jsxref("Int32Array/Int32Array", "Int32Array()")}}
  - : Erstellt ein neues `Int32Array`-Objekt.

## Statische Eigenschaften

_Erbt außerdem statische Eigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahl zurück. Bei `Int32Array` ist dies `4`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Int32Array.prototype` definiert und werden von allen `Int32Array`-Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahl zurück. Bei einer `Int32Array`-Instanz ist dies `4`.
- {{jsxref("Object/constructor", "Int32Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Int32Array`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Int32Array/Int32Array", "Int32Array")}}.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Beispiele

### Verschiedene Möglichkeiten, ein Int32Array zu erstellen

```js
// From a length
const int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// From an array
const x = new Int32Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Int32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int32FromIterable = new Int32Array(iterable);
console.log(int32FromIterable);
// Int32Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Int32Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
