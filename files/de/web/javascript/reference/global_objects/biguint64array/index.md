---
title: BigUint64Array
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`BigUint64Array`** ist ein typisiertes Array, das ein Array von 64-Bit-Unsigned-Integern in der Byte-Reihenfolge der Plattform repräsentiert. Wenn Kontrolle über die Byte-Reihenfolge benötigt wird, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0n` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Sobald das Array erstellt wurde, können Sie die Elemente im Array über die Methoden des Objekts oder mit der Standard-Array-Index-Syntax (d.h. unter Verwendung der eckigen Klammern) referenzieren.

`BigUint64Array` ist eine Unterklasse der verborgenen {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("BigUint64Array/BigUint64Array", "BigUint64Array()")}}
  - : Erstellt ein neues `BigUint64Array` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigUint64Array.BYTES_PER_ELEMENT")}}
  - : Gibt eine Zahlenwert der Elementgröße zurück. `8` im Fall von `BigUint64Array`.

## Statische Methoden

_Erbt statische Methoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `BigUint64Array.prototype` definiert und werden von allen `BigUint64Array` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigUint64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt eine Zahlenwert der Elementgröße zurück. `8` im Fall eines `BigUint64Array`.
- {{jsxref("Object/constructor", "BigUint64Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `BigUint64Array` Instanzen ist der Anfangswert der {{jsxref("BigUint64Array/BigUint64Array", "BigUint64Array")}} Konstruktor.

## Instanzmethoden

_Erbt Instanzmethoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Wege, ein BigUint64Array zu erstellen

```js
// From a length
const biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new BigUint64Array([21n, 31n]);
console.log(x[1]); // 31n

// From another TypedArray
const y = new BigUint64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigUint64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const biguint64FromIterable = new BigUint64Array(iterable);
console.log(biguint64FromIterable);
// BigUint64Array [1n, 2n, 3n]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
