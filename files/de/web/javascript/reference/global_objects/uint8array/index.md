---
title: Uint8Array
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das typisierte Array **`Uint8Array`** stellt ein Array vorzeichenloser 8-Bit-Ganzzahlen dar. Die Elemente werden mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten angegeben werden. Nach der Erstellung können Sie über die Methoden des Objekts oder mit der üblichen Array-Index-Syntax (also der Klammernotation) auf die Elemente zugreifen.

`Uint8Array` ist eine Unterklasse der verborgenen Klasse {{jsxref("TypedArray")}}.

## Beschreibung

`Uint8Array` ist derzeit die einzige `TypedArray`-Unterklasse, die im Vergleich zu anderen typisierten Arrays zusätzliche Methoden besitzt. Als generisches Byte-Array eignet sie sich besonders gut für die Arbeit mit beliebigen Binärdaten. Sie unterstützt zwei Gruppen von Methoden, um `Uint8Array`-Daten aus Hexadezimal- und Base64-Zeichenfolgen zu erstellen, in solche Zeichenfolgen umzuwandeln und damit zu bearbeiten.

- {{jsxref("Uint8Array.fromBase64()")}}, {{jsxref("Uint8Array.prototype.toBase64()")}} und {{jsxref("Uint8Array.prototype.setFromBase64()")}} für die Arbeit mit {{Glossary("Base64", "Base64-Zeichenfolgen")}}, bei denen 3 Bytes durch 4 Zeichen kodiert werden. Diese Zeichen sind 0–9, A–Z, a–z, „+“ und „/“ (oder „-“ und „\_“ bei URL-sicherem Base64).
- {{jsxref("Uint8Array.fromHex()")}}, {{jsxref("Uint8Array.prototype.toHex()")}} und {{jsxref("Uint8Array.prototype.setFromHex()")}} für die Arbeit mit Hexadezimal-Zeichenfolgen, bei denen jedes Byte durch zwei Zeichen kodiert wird. Jedes dieser Zeichen ist eine Ziffer von 0–9 oder ein Buchstabe von A–F (ohne Berücksichtigung der Groß- und Kleinschreibung).

## Konstruktor

- {{jsxref("Uint8Array/Uint8Array", "Uint8Array()")}}
  - : Erstellt ein neues `Uint8Array`-Objekt.

## Statische Eigenschaften

_Erbt außerdem statische Eigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Größe eines Elements zurück. Bei `Uint8Array` ist dieser Wert `1`.

## Statische Methoden

_Erbt statische Methoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("Uint8Array.fromBase64()")}}
  - : Erstellt ein neues `Uint8Array`-Objekt aus einer Base64-kodierten Zeichenfolge.
- {{jsxref("Uint8Array.fromHex()")}}
  - : Erstellt ein neues `Uint8Array`-Objekt aus einer hexadezimal kodierten Zeichenfolge.

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("TypedArray")}}._

Diese Eigenschaften sind auf `Uint8Array.prototype` definiert und werden von allen `Uint8Array`-Instanzen gemeinsam genutzt.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.prototype.BYTES_PER_ELEMENT")}}
  - : Gibt einen Zahlenwert für die Größe eines Elements zurück. Bei einem `Uint8Array` ist dieser Wert `1`.
- {{jsxref("Object/constructor", "Uint8Array.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Uint8Array`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Uint8Array/Uint8Array", "Uint8Array")}}.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("TypedArray")}}._

- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
  - : Füllt dieses `Uint8Array`-Objekt mit Bytes aus einer Base64-kodierten Zeichenfolge und gibt ein Objekt zurück, das angibt, wie viele Bytes gelesen und geschrieben wurden.
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
  - : Füllt dieses `Uint8Array`-Objekt mit Bytes aus einer hexadezimal kodierten Zeichenfolge und gibt ein Objekt zurück, das angibt, wie viele Bytes gelesen und geschrieben wurden.
- {{jsxref("Uint8Array.prototype.toBase64()")}}
  - : Gibt eine Base64-kodierte Zeichenfolge zurück, die auf den Daten in diesem `Uint8Array`-Objekt basiert.
- {{jsxref("Uint8Array.prototype.toHex()")}}
  - : Gibt eine hexadezimal kodierte Zeichenfolge zurück, die auf den Daten in diesem `Uint8Array`-Objekt basiert.

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

- [Polyfill für `Uint8Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
