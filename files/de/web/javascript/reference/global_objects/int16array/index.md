---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das typisierte Array **`Int16Array`** stellt ein Array vorzeichenbehafteter 16-Bit-Ganzzahlen in der Byte-Reihenfolge der Plattform dar. Wenn Sie die Byte-Reihenfolge steuern müssen, verwenden Sie stattdessen {{jsxref("DataView")}}. Die Elemente werden mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten angegeben werden. Nach dem Erstellen können Sie über die Methoden des Objekts oder mit der üblichen Array-Index-Syntax (also mit eckigen Klammern) auf die Elemente zugreifen.

`Int16Array` ist eine Unterklasse der verborgenen Klasse {{jsxref("TypedArray")}}.

## Konstruktor

- {{jsxref("Int16Array/Int16Array", "Int16Array()")}}
  - : Erstellt ein neues `Int16Array`-Objekt.

## Statische Eigenschaften

_Erbt außerdem statische Eigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahl zurück. Bei `Int16Array` ist der Wert `2`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Int16Array.prototype` definiert und werden von allen `Int16Array`-Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int16Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahl zurück. Bei einer `Int16Array`-Instanz ist der Wert `2`.
- {{jsxref("Object/constructor", "Int16Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Int16Array`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Int16Array/Int16Array", "Int16Array")}}.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Beispiele

### Verschiedene Möglichkeiten, ein Int16Array zu erstellen

```js
// From a length
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Int16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Int16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int16FromIterable = new Int16Array(iterable);
console.log(int16FromIterable);
// Int16Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Int16Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
