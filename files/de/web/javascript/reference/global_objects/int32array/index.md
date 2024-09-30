---
title: Int32Array
slug: Web/JavaScript/Reference/Global_Objects/Int32Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Int32Array`** typisierte Array repräsentiert ein Array von 32-Bit-Ganzzahlen im plattformspezifischen Byte-Order. Wenn Kontrolle über die Byte-Reihenfolge benötigt wird, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Sobald das Array erstellt ist, können Sie auf die Elemente im Array über die Methoden des Objekts oder mit der Standard-Array-Index-Syntax (d.h. durch Klammernotation) zugreifen.

`Int32Array` ist eine Unterklasse der verborgenen {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Int32Array/Int32Array", "Int32Array()")}}
  - : Erstellt ein neues `Int32Array` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `4` im Fall von `Int32Array`.

## Statische Methoden

_Erbt statische Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Int32Array.prototype` definiert und werden von allen `Int32Array` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `4` im Fall eines `Int32Array`.
- {{jsxref("Object/constructor", "Int32Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Int32Array`-Instanzen ist der Anfangswert der {{jsxref("Int32Array/Int32Array", "Int32Array")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

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

- [Polyfill von `Int32Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
