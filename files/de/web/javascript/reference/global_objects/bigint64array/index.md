---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`BigInt64Array`** getypte Array repräsentiert ein Array von 64-Bit-ganzzahligen Vorzeichenwerten in der Byte-Reihenfolge der Plattform. Wenn Kontrolle über die Byte-Reihenfolge benötigt wird, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0n` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Sobald das Array erstellt ist, können Sie auf die Elemente im Array mithilfe der Methoden des Objekts oder mit der Standard-Array-Index-Syntax (d. h. unter Verwendung der Klammernotation) zugreifen.

`BigInt64Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}} Klasse.

{{EmbedInteractiveExample("pages/js/typedarray-bigint64.html", "taller")}}

## Konstruktor

- {{jsxref("BigInt64Array/BigInt64Array", "BigInt64Array()")}}
  - : Erstellt ein neues `BigInt64Array` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `8` im Fall von `BigInt64Array`.

## Statische Methoden

_Erbt statische Methoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternteil {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `BigInt64Array.prototype` definiert und werden von allen `BigInt64Array` Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `8` im Fall eines `BigInt64Array`.
- {{jsxref("Object/constructor", "BigInt64Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `BigInt64Array` Instanzen ist der Anfangswert der {{jsxref("BigInt64Array/BigInt64Array", "BigInt64Array")}} Konstruktor.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternteil {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Wege, ein BigInt64Array zu erstellen

```js
// Von einer Länge
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// Von einem Array
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// Von einem anderen TypedArray
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// Von einem ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// Von einem Iterable
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

- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
