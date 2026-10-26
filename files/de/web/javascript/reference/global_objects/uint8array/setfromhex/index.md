---
title: Uint8Array.prototype.setFromHex()
short-title: setFromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`setFromHex()`** von {{jsxref("Uint8Array")}}-Instanzen füllt dieses `Uint8Array`-Objekt mit Bytes aus einer hexadezimal codierten Zeichenfolge. Sie gibt ein Objekt zurück, das angibt, wie viele Zeichen gelesen und wie viele Bytes geschrieben wurden.

Diese Methode wandelt die Zeichenfolge in ein Byte-Array um. Wenn Sie die Zeichenfolge stattdessen in eine einzelne Zahl umwandeln möchten, verwenden Sie die Funktion {{jsxref("Global_Objects/parseInt", "parseInt()")}} mit dem Wert `16` für `radix`.

## Syntax

```js-nolint
setFromHex(string)
```

### Parameter

- `string`
  - : Eine hexadezimale Zeichenfolge, die die in ein `Uint8Array` zu schreibenden Bytes codiert. Die Zeichenfolge muss:
    - Eine gerade Anzahl von Zeichen haben, da jeweils zwei Zeichen ein Byte codieren.
    - Ausschließlich Zeichen des hexadezimalen Alphabets enthalten, also 0–9 und A–F (ohne Unterscheidung zwischen Groß- und Kleinschreibung).
    - Frei von Leerraum sein (anders als bei {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

    Beachten Sie, dass die Zeichenfolge nur bis zu dem Punkt gelesen wird, an dem das Array gefüllt ist. Ungültige hexadezimale Syntax nach diesem Punkt wird daher ignoriert.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `read`
  - : Die Anzahl der aus der Eingabezeichenfolge gelesenen hexadezimalen Zeichen. Wenn die decodierten Daten in das Array passen, entspricht sie der Länge der Eingabezeichenfolge. Andernfalls ist sie die Anzahl der vollständigen Paare hexadezimaler Zeichen, die in das Array passen.
- `written`
  - : Die Anzahl der in das `Uint8Array` geschriebenen Bytes. Sie ist niemals größer als die {{jsxref("TypedArray/byteLength", "byteLength")}} dieses `Uint8Array`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn die Eingabezeichenfolge Zeichen außerhalb des hexadezimalen Alphabets enthält oder ihre Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eingabe keine Zeichenfolge ist.

## Beispiele

### Decodieren einer hexadezimalen Zeichenfolge

Dieses Beispiel decodiert eine hexadezimale Zeichenfolge in ein vorhandenes `Uint8Array`.

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(8) [202, 254, 208, 13, 0, 0, 0, 0]
```

### Decodieren einer langen Zeichenfolge in ein kleines Array

Wenn die Zeichenfolge mehr Daten enthält, als das Array aufnehmen kann, schreibt die Methode nur so viele Bytes, wie das Array aufnehmen kann.

```js
const uint8Array = new Uint8Array(4);
const result = uint8Array.setFromHex("cafed00d-some random stuff");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(4) [202, 254, 208, 13]
```

Überzählige Zeichen werden ignoriert, selbst wenn sie ungültig sind. Die Gesamtlänge der Eingabezeichenfolge muss jedoch gerade sein.

### Schreiben von Daten ab einem bestimmten Offset

Die Methode `setFromHex()` beginnt immer am Anfang des `Uint8Array` mit dem Schreiben. Wenn Sie Daten in die Mitte des Arrays schreiben möchten, können Sie stattdessen in ein {{jsxref("TypedArray.prototype.subarray()")}} schreiben.

```js
const uint8Array = new Uint8Array(8);
// Start writing at offset 2
const result = uint8Array.subarray(2).setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array);
// Uint8Array(8) [0, 0, 202, 254, 208, 13, 0, 0]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Uint8Array.prototype.setFromHex` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [es-shims-Polyfill für `Uint8Array.prototype.setFromHex`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromHex()")}}
- {{jsxref("Uint8Array.prototype.toHex()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
