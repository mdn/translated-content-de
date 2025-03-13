---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Das **`BigInt64Array`** typisierte Array repräsentiert ein Array von 64-Bit-Ganzzahlen im Vorzeichen mit der Byte-Reihenfolge der Plattform. Wenn eine Kontrolle über die Byte-Reihenfolge benötigt wird, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0n` initialisiert, sofern keine Initialisierungsdaten explizit bereitgestellt werden. Sobald das Objekt erstellt ist, können Sie auf die Elemente im Array mithilfe der Methoden des Objekts oder mit der Standard-Array-Index-Syntax (d. h. mit Klammernotation) zugreifen.

`BigInt64Array` ist eine Unterklasse der verborgenen {{jsxref("TypedArray")}} Klasse.

{{InteractiveExample("JavaScript Demo: BigInt64Array", "taller")}}

```js interactive-example
const buffer = new ArrayBuffer(24);
const bigint64 = new BigInt64Array(buffer);
bigint64[0] = 5886014448488689n;
bigint64[1] = 1881938909131133n;
bigint64[2] = 1898875537769492n;

bigint64[0] = 6118793953620967n;
console.log(bigint64);
// Expected Output: BigInt64Array [6118793953620967n, 1881938909131133n, 1898875537769492n]

console.log(bigint64[2]);
// Expected Output: 1898875537769492n

console.log("Array length:", bigint64.length);
// Expected Output: Array length: 3

console.log("Array byte length:", bigint64.byteLength);
// Expected Output: Array byte length: 24

console.log("Array byte offset:", bigint64.byteOffset);
// Expected Output: Array byte offset: 0

bigint64.set([100n, 200n], 1);
console.log(bigint64);
// Expected Output: BigInt64Array [6118793953620967n, 100n, 200n]
```

## Konstruktor

- {{jsxref("BigInt64Array/BigInt64Array", "BigInt64Array()")}}
  - : Erzeugt ein neues `BigInt64Array`-Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von ihrem Elternteil {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `8` im Fall von `BigInt64Array`.

## Statische Methoden

_Erbt statische Methoden von ihrem Elternteil {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von ihrem Elternteil {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `BigInt64Array.prototype` definiert und werden von allen `BigInt64Array`-Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `8` im Fall eines `BigInt64Array`.
- {{jsxref("Object/constructor", "BigInt64Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `BigInt64Array` Instanzen ist der Anfangswert der {{jsxref("BigInt64Array/BigInt64Array", "BigInt64Array")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von ihrem Elternteil {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Möglichkeiten, ein BigInt64Array zu erstellen

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
