---
title: Uint8Array
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Uint8Array`** typisierte Array stellt ein Array von 8-Bit-Unsigned-Integern dar. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt. Sobald es erstellt ist, können Sie auf Elemente im Array entweder mittels der Methoden des Objekts oder mittels der Standard-Array-Indizierungs-Syntax (d.h. unter Verwendung der Klammernotation) zugreifen.

`Uint8Array` ist eine Unterklasse der verborgenen {{jsxref("TypedArray")}} Klasse.

## Beschreibung

`Uint8Array` ist derzeit die einzige `TypedArray`-Unterklasse, die zusätzliche Methoden im Vergleich zu anderen typisierten Arrays hat. Aufgrund seiner Natur als generisches Byte-Array ist es am besten geeignet für die Arbeit mit beliebigen binären Daten. Es unterstützt zwei Methodensätze zur Erstellung, Serialisierung und Modifikation von `Uint8Array`-Daten zu/von Hex-Strings und Base64-Strings.

- {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} zur Arbeit mit {{Glossary("Base64", "Base64")}}-Strings, wobei 3 Bytes durch 4 Zeichen kodiert werden, die entweder 0–9, A–Z, a–z, "+", und "/" (oder "-" und "\_", wenn URL-sicheres Base64 verwendet wird) sind.
- {{jsxref("Uint8Array.fromHex()")}}, {{jsxref("Uint8Array.prototype.toHex()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} zur Arbeit mit Hex-Strings, wobei jedes Byte durch zwei Zeichen kodiert wird, die entweder 0–9 oder A–F (nicht groß-/kleinbuchstabensensitiv) sind.

## Konstruktor

- {{jsxref("Uint8Array/Uint8Array", "Uint8Array()")}}
  - : Erstellt ein neues `Uint8Array`-Objekt.

## Statische Eigenschaften

_Erbt auch statische Eigenschaften von seinem Eltern {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.BYTES_PER_ELEMENT")}}
  - : Gibt den numerischen Wert der Elementgröße zurück. `1` im Fall von `Uint8Array`.

## Statische Methoden

_Erbt statische Methoden von seinem Eltern {{jsxref("TypedArray")}}_.

- {{jsxref("Uint8Array.fromBase64()")}}
  - : Erstellt ein neues `Uint8Array`-Objekt aus einem base64-kodierten String.
- {{jsxref("Uint8Array.fromHex()")}}
  - : Erstellt ein neues `Uint8Array`-Objekt aus einem Hex-kodierten String.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Eltern {{jsxref("TypedArray")}}_.

Diese Eigenschaften sind auf `Uint8Array.prototype` definiert und werden von allen `Uint8Array`-Instanzen geteilt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt den numerischen Wert der Elementgröße zurück. `1` im Fall von einem `Uint8Array`.
- {{jsxref("Object/constructor", "Uint8Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint8Array`-Instanzen ist der Anfangswert der {{jsxref("Uint8Array/Uint8Array", "Uint8Array")}} Konstruktor.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Eltern {{jsxref("TypedArray")}}_.

- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
  - : Füllt dieses `Uint8Array`-Objekt mit Bytes aus einem base64-kodierten String und gibt ein Objekt zurück, das angibt, wie viele Bytes gelesen und geschrieben wurden.
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
  - : Füllt dieses `Uint8Array`-Objekt mit Bytes aus einem Hex-kodierten String und gibt ein Objekt zurück, das angibt, wie viele Bytes gelesen und geschrieben wurden.
- {{jsxref("Uint8Array.prototype.toBase64()")}}
  - : Gibt einen base64-kodierten String basierend auf den Daten in diesem `Uint8Array`-Objekt zurück.
- {{jsxref("Uint8Array.prototype.toHex()")}}
  - : Gibt einen Hex-kodierten String basierend auf den Daten in diesem `Uint8Array`-Objekt zurück.

## Beispiele

### Verschiedene Möglichkeiten, ein Uint8Array zu erstellen

```js
// From a length
const uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Uint8Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8FromIterable = new Uint8Array(iterable);
console.log(uint8FromIterable);
// Uint8Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint8Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
