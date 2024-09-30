---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`BigInt64Array`** Typfeld repräsentiert ein Array von 64-Bit-Ganzzahlen mit Vorzeichen in der Byte-Reihenfolge der Plattform. Wenn die Kontrolle über die Byte-Reihenfolge erforderlich ist, verwenden Sie stattdessen {{jsxref("DataView")}}. Die Inhalte werden zu `0n` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Einmal erstellt, können Sie auf Elemente im Array mit den Methoden des Objekts oder unter Verwendung der Standard-Array-Index-Syntax (d.h. mit Klammernotation) zugreifen.

`BigInt64Array` ist eine Unterklasse der verborgenen {{jsxref("TypedArray")}} Klasse.

{{EmbedInteractiveExample("pages/js/typedarray-bigint64.html", "taller")}}

## Konstruktor

- {{jsxref("BigInt64Array/BigInt64Array", "BigInt64Array()")}}
  - : Erzeugt ein neues `BigInt64Array` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seiner Elternklasse {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : Gibt den Zahlenwert der Elementgröße zurück. `8` im Fall von `BigInt64Array`.

## Statische Methoden

_Erbt statische Methoden von seiner Elternklasse {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seiner Elternklasse {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `BigInt64Array.prototype` definiert und werden von allen `BigInt64Array` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt den Zahlenwert der Elementgröße zurück. `8` im Fall eines `BigInt64Array`.
- {{jsxref("Object/constructor", "BigInt64Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `BigInt64Array` Instanzen ist der anfängliche Wert der {{jsxref("BigInt64Array/BigInt64Array", "BigInt64Array")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von seiner Elternklasse {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Wege zur Erstellung eines BigInt64Array

```js
// From a length
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// From another TypedArray
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array [1n, 2n, 3n]
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
