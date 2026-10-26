---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das typisierte Array **`Int8Array`** stellt ein Array aus vorzeichenbehafteten 8-Bit-Ganzzahlen dar. Die Inhalte werden mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten angegeben werden. Nach der Erstellung können Sie über die Methoden des Objekts oder mit der üblichen Array-Indexsyntax (also der Klammerschreibweise) auf die Elemente zugreifen.

`Int8Array` ist eine Unterklasse der verborgenen Klasse {{jsxref("TypedArray")}}.

## Konstruktor

- {{jsxref("Int8Array/Int8Array", "Int8Array()")}}
  - : Erstellt ein neues `Int8Array`-Objekt.

## Statische Eigenschaften

_Erbt außerdem statische Eigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahlenwert zurück. Bei `Int8Array` ist der Wert `1`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Int8Array.prototype` definiert und werden von allen `Int8Array`-Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int8Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt die Größe eines Elements als Zahlenwert zurück. Bei einem `Int8Array` ist der Wert `1`.
- {{jsxref("Object/constructor", "Int8Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Int8Array`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Int8Array/Int8Array", "Int8Array")}}.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

## Beispiele

### Verschiedene Möglichkeiten, ein Int8Array zu erstellen

```js
// From a length
const int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Int8Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Int8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int8FromIterable = new Int8Array(iterable);
console.log(int8FromIterable);
// Int8Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Int8Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
