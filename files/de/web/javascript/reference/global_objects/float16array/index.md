---
title: Float16Array
slug: Web/JavaScript/Reference/Global_Objects/Float16Array
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das getypte Array **`Float16Array`** repräsentiert ein Array von 16-Bit-Gleitkommazahlen in der Byte-Reihenfolge der Plattform. Wenn Kontrolle über die Byte-Reihenfolge erforderlich ist, verwenden Sie stattdessen {{jsxref("DataView")}}. Die Inhalte werden auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Einmal erstellt, können Sie auf Elemente im Array mit den Methoden des Objekts oder mit der Standard-Array-Indizierungs-Syntax (d. h. unter Verwendung der Klammernotation) zugreifen.

`Float16Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}} Klasse.

> [!NOTE]
> Float16-Unterstützung ist weder in der JavaScript-API noch in der zugrunde liegenden CPU-Architektur universell. Die Verwendung kann auf einigen Plattformen zu einer langsameren Leistung führen. Es ist für die Interaktion mit hochoptimierten und leistungsempfindlichen Systemen wie [float-backed-Leinwänden](https://github.com/w3c/ColorWeb-CG/blob/main/canvas_float.md), WebGPU, WebGL und tiefem Lernen, einschließlich [stable diffusion](https://github.com/huggingface/blog/blob/main/stable_diffusion.md) gedacht.

## Konstruktor

- {{jsxref("Float16Array/Float16Array", "Float16Array()")}}
  - : Erstellt ein neues `Float16Array`-Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `2` im Fall von `Float16Array`.

## Statische Methoden

_Erbt statische Methoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Float16Array.prototype` definiert und werden von allen `Float16Array`-Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `2` im Fall eines `Float16Array`.
- {{jsxref("Object/constructor", "Float16Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Float16Array`-Instanzen ist der Anfangswert der {{jsxref("Float16Array/Float16Array", "Float16Array")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Möglichkeiten zur Erstellung eines Float16Array

```js
// From a length
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Float16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Float16Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float16FromIterable = new Float16Array(iterable);
console.log(float16FromIterable);
// Float16Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
