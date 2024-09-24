---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Float32Array`** typisierte Array repräsentiert ein Array von 32-Bit Fließkommazahlen in der Byte-Reihenfolge der Plattform. Wenn Kontrolle über die Byte-Reihenfolge erforderlich ist, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten angegeben. Nach der Erstellung können Sie auf die Elemente im Array über die Methoden des Objekts oder mit der Standard-Array-Index-Syntax (das heißt, mit Klammernotation) zugreifen.

`Float32Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Float32Array/Float32Array", "Float32Array()")}}
  - : Erstellt ein neues `Float32Array`-Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : Gibt eine Zahlenwert der Elementgröße zurück. `4` im Fall von `Float32Array`.

## Statische Methoden

_Erbt statische Methoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Float32Array.prototype` definiert und werden von allen `Float32Array`-Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt eine Zahlenwert der Elementgröße zurück. `4` im Fall eines `Float32Array`.
- {{jsxref("Object/constructor", "Float32Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Float32Array`-Instanzen ist der Anfangswert der {{jsxref("Float32Array/Float32Array", "Float32Array")}}-Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Möglichkeiten, ein Float32Array zu erstellen

```js
// Aus einer Länge
const float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// Aus einem Array
const x = new Float32Array([21, 31]);
console.log(x[1]); // 31

// Aus einem anderen TypedArray
const y = new Float32Array(x);
console.log(y[0]); // 21

// Aus einem ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Float32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// Aus einem Iterable
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

- [Polyfill von `Float32Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Anleitung
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
