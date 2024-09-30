---
title: Uint16Array
slug: Web/JavaScript/Reference/Global_Objects/Uint16Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

Das **`Uint16Array`** typisierte Array repräsentiert ein Array von 16-Bit-ungezeichneten Ganzzahlen in der byteweisen Reihenfolge der Plattform. Wenn die Kontrolle über die Byte-Reihenfolge erforderlich ist, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten angegeben. Sobald das Array erstellt wurde, können Sie die Elemente im Array mithilfe der Methoden des Objekts oder mit der Standard-Array-Indizierungssyntax (also der Klammernotation) referenzieren.

`Uint16Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}} Klasse.

## Konstruktor

- {{jsxref("Uint16Array/Uint16Array", "Uint16Array()")}}
  - : Erstellt ein neues `Uint16Array` Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint16Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `2` im Fall von `Uint16Array`.

## Statische Methoden

_Erbt statische Methoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem übergeordneten {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Uint16Array.prototype` definiert und werden von allen `Uint16Array` Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint16Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `2` im Fall einer `Uint16Array`.
- {{jsxref("Object/constructor", "Uint16Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint16Array` Instanzen ist der Anfangswert der {{jsxref("Uint16Array/Uint16Array", "Uint16Array")}} Konstruktor.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem übergeordneten {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Wege, ein Uint16Array zu erstellen

```js
// From a length
const uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Uint16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Uint16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint16FromIterable = new Uint16Array(iterable);
console.log(uint16FromIterable);
// Uint16Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint16Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
