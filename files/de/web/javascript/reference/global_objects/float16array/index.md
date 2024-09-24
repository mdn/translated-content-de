---
title: Float16Array
slug: Web/JavaScript/Reference/Global_Objects/Float16Array
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`Float16Array`** typisierte Array repräsentiert ein Array von 16-Bit-Gleitkommazahlen in der Byte-Reihenfolge der Plattform. Wenn Kontrolle über die Byte-Reihenfolge benötigt wird, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden Initialisierungsdaten explizit bereitgestellt. Einmal festgelegt, können Sie auf die Elemente im Array entweder über die Methoden des Objekts oder mithilfe der Standard-Array-Indizierungs-Syntax (das heißt mit Klammernotation) zugreifen.

`Float16Array` ist eine Unterklasse der verborgenen {{jsxref("TypedArray")}} Klasse.

> [!NOTE]
> Die Unterstützung für Float16 ist nicht universell, sowohl in der JavaScript-API als auch in der zugrunde liegenden CPU-Architektur. Die Verwendung kann auf einigen Plattformen zu einer langsameren Leistung führen. Es ist vorgesehen für die Interaktion mit hochoptimierten und leistungsorientierten Systemen wie [float-basierten Leinwänden](https://github.com/w3c/ColorWeb-CG/blob/main/canvas_float.md), WebGPU, WebGL und Deep-Learning-Modellen einschließlich [stable diffusion](https://github.com/huggingface/blog/blob/main/stable_diffusion.md).

## Konstruktor

- {{jsxref("Float16Array/Float16Array", "Float16Array()")}}
  - : Erstellt ein neues `Float16Array`-Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `2` im Fall von `Float16Array`.

## Statische Methoden

_Erbt statische Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Float16Array.prototype` definiert und werden von allen `Float16Array`-Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float16Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `2` im Fall eines `Float16Array`.
- {{jsxref("Object/constructor", "Float16Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Float16Array`-Instanzen ist der Anfangswert der {{jsxref("Float16Array/Float16Array", "Float16Array")}} Konstruktor.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Methoden zur Erstellung eines Float16Array

```js
// Aus einer Länge
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// Aus einem Array
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// Aus einem anderen TypedArray
const y = new Float16Array(x);
console.log(y[0]); // 21

// Aus einem ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Float16Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// Aus einem iterablen Objekt
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

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
