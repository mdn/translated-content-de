---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Int8Array`**-typisierte Array stellt ein Array von 8-Bit-Ganzzahlen mit Vorzeichen dar. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten angegeben. Sobald es erstellt ist, können Sie auf die Elemente im Array über die Methoden des Objekts oder mittels der Standard-Array-Index-Syntax (d.h. unter Verwendung der Klammernotation) zugreifen.

`Int8Array` ist eine Unterklasse der verborgenen {{jsxref("TypedArray")}}-Klasse.

## Konstruktor

- {{jsxref("Int8Array/Int8Array", "Int8Array()")}}
  - : Erstellt ein neues `Int8Array`-Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften seiner Elternklasse {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `1` im Fall von `Int8Array`.

## Statische Methoden

_Erbt statische Methoden seiner Elternklasse {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften seiner Elternklasse {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Int8Array.prototype` definiert und werden von allen `Int8Array`-Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int8Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `1` im Fall eines `Int8Array`.
- {{jsxref("Object/constructor", "Int8Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Int8Array`-Instanzen ist der Anfangswert der {{jsxref("Int8Array/Int8Array", "Int8Array")}}-Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden seiner Elternklasse {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Möglichkeiten, ein Int8Array zu erstellen

```js
// From a length
const int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Int8Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Int8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int8FromIterable = new Int8Array(iterable);
console.log(int8FromIterable);
// Int8Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Int8Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
