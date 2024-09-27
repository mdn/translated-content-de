---
title: Float64Array
slug: Web/JavaScript/Reference/Global_Objects/Float64Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Float64Array`** Typ-Array stellt ein Array von 64-Bit-Gleitkommazahlen in der Byte-Reihenfolge der Plattform dar. Wenn Kontrolle über die Byte-Reihenfolge benötigt wird, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Nach der Einrichtung können Sie auf die Elemente im Array über die Methoden des Objekts oder mit der Standard-Array-Index-Syntax (d. h. unter Verwendung der Klammernotation) zugreifen.

`Float64Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Float64Array/Float64Array", "Float64Array()")}}
  - : Erstellt ein neues `Float64Array` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float64Array.BYTES_PER_ELEMENT")}}
  - : Gibt den Zahlenwert der Elementgröße zurück. `8` im Fall von `Float64Array`.

## Statische Methoden

_Erbt statische Methoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Float64Array.prototype` definiert und werden von allen `Float64Array` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Float64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt den Zahlenwert der Elementgröße zurück. `8` im Fall einer `Float64Array`.
- {{jsxref("Object/constructor", "Float64Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Float64Array` Instanzen ist der anfängliche Wert der {{jsxref("Float64Array/Float64Array", "Float64Array")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

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

- [Polyfill von `Float64Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
