---
title: Uint32Array
slug: Web/JavaScript/Reference/Global_Objects/Uint32Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Uint32Array`** Typ-Array repräsentiert ein Array von 32-Bit-Integer-Zahlen ohne Vorzeichen in der Byte-Reihenfolge der Plattform. Wenn die Kontrolle über die Byte-Reihenfolge erforderlich ist, verwenden Sie stattdessen {{jsxref("DataView")}}. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Nach der Erstellung können Sie auf Elemente im Array mithilfe der Methoden des Objekts oder mit der Standard-Array-Index-Syntax (also durch Klammernotation) zugreifen.

`Uint32Array` ist eine Unterklasse der versteckten {{jsxref("TypedArray")}}-Klasse.

## Konstruktor

- {{jsxref("Uint32Array/Uint32Array", "Uint32Array()")}}
  - : Erstellt ein neues `Uint32Array`-Objekt.

## Statische Eigenschaften

_Übernimmt auch statische Eigenschaften von seinem übergeordneten Element {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint32Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `4` im Fall von `Uint32Array`.

## Statische Methoden

_Übernimmt statische Methoden von seinem übergeordneten Element {{jsxref("TypedArray")}}_.

## Instanz-Eigenschaften

_Übernimmt auch Instanz-Eigenschaften von seinem übergeordneten Element {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Uint32Array.prototype` definiert und werden von allen `Uint32Array`-Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert der Elementgröße zurück. `4` im Fall eines `Uint32Array`.
- {{jsxref("Object/constructor", "Uint32Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint32Array`-Instanzen ist der Anfangswert der {{jsxref("Uint32Array/Uint32Array", "Uint32Array")}}-Konstruktor.

## Instanz-Methoden

_Übernimmt Instanz-Methoden von seinem übergeordneten Element {{jsxref("TypedArray")}}_.

## Beispiele

### Verschiedene Möglichkeiten, ein Uint32Array zu erstellen

```js
// From a length
const uint32 = new Uint32Array(2);
uint32[0] = 42;
console.log(uint32[0]); // 42
console.log(uint32.length); // 2
console.log(uint32.BYTES_PER_ELEMENT); // 4

// From an array
const x = new Uint32Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Uint32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint32FromIterable = new Uint32Array(iterable);
console.log(uint32FromIterable);
// Uint32Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint32Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
