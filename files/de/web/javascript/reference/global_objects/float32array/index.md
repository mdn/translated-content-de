---
title: Float32Array
slug: Web/JavaScript/Reference/Global_Objects/Float32Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Float32Array`** typisierte Array repräsentiert ein Array von 32-Bit-Gleitkommazahlen in der Byte-Reihenfolge der Plattform. Wenn Kontrolle über die Byte-Reihenfolge benötigt wird, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten angegeben. Sobald es erstellt wurde, können Sie auf die Elemente im Array mithilfe der Methoden des Objekts oder mit der Standard-Array-Index-Syntax (d. h. unter Verwendung der Klammernotation) zugreifen.

`Float32Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Float32Array/Float32Array", "Float32Array()")}}
  - : Erstellt ein neues `Float32Array` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem Eltern {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float32Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `4` im Fall von `Float32Array`.

## Statische Methoden

_Erbt statische Methoden von seinem Eltern {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Eltern {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Float32Array.prototype` definiert und werden von allen `Float32Array` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `4` im Fall eines `Float32Array`.
- {{jsxref("Object/constructor", "Float32Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Float32Array` Instanzen ist der Anfangswert der {{jsxref("Float32Array/Float32Array", "Float32Array")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Eltern {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Arten, ein Float32Array zu erstellen

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

- [Polyfill von `Float32Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
