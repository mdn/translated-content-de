---
title: Int32Array
slug: Web/JavaScript/Reference/Global_Objects/Int32Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Int32Array`**-typisierte Array repräsentiert ein Array von 32-Bit-Ganzzahlen mit Vorzeichen in der Byte-Reihenfolge der Plattform. Wenn Kontrolle über die Byte-Reihenfolge benötigt wird, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Sobald es etabliert ist, können Sie auf Elemente im Array mit den Methoden des Objekts oder mit der standardmäßigen Array-Index-Syntax (das heißt, mit der Klammernotation) zugreifen.

`Int32Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}}-Klasse.

## Konstruktor

- {{jsxref("Int32Array/Int32Array", "Int32Array()")}}
  - : Erstellt ein neues `Int32Array`-Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `4` im Fall von `Int32Array`.

## Statische Methoden

_Erbt statische Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Int32Array.prototype` definiert und werden von allen `Int32Array`-Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `4` im Fall eines `Int32Array`.
- {{jsxref("Object/constructor", "Int32Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Int32Array`-Instanzen ist der Anfangswert der {{jsxref("Int32Array/Int32Array", "Int32Array")}}-Konstruktor.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Wege, ein Int32Array zu erstellen

```js
// Von einer Länge
const int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// Von einem Array
const x = new Int32Array([21, 31]);
console.log(x[1]); // 31

// Von einem anderen TypedArray
const y = new Int32Array(x);
console.log(y[0]); // 21

// Von einem ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Int32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// Von einem Iterable
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

- [Polyfill von `Int32Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Anleitung
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
