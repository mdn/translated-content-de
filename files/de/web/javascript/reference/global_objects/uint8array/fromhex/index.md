---
title: Uint8Array.fromHex()
short-title: fromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Uint8Array.fromHex()`** erstellt ein neues {{jsxref("Uint8Array")}}-Objekt aus einer hexadezimalen Zeichenfolge.

Diese Methode wandelt die Zeichenfolge in ein Byte-Array um. Wenn Sie die Zeichenfolge stattdessen in eine einzelne Zahl umwandeln möchten, verwenden Sie die Funktion {{jsxref("Global_Objects/parseInt", "parseInt()")}} mit dem Wert `16` für `radix`.

## Syntax

```js-nolint
Uint8Array.fromHex(string)
```

### Parameter

- `string`
  - : Eine hexadezimale Zeichenfolge, die Bytes kodiert, die in ein `Uint8Array` umgewandelt werden sollen. Die Zeichenfolge muss:
    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte kodieren.
    - Ausschließlich Zeichen des hexadezimalen Alphabets enthalten, also 0–9 und A–F (ohne Unterscheidung zwischen Groß- und Kleinschreibung).
    - Frei von Leerraum sein (anders als bei {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

### Rückgabewert

Ein neues `Uint8Array`-Objekt, das die aus der hexadezimalen Zeichenfolge dekodierten Bytes enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn die Eingabezeichenfolge Zeichen außerhalb des hexadezimalen Alphabets enthält oder ihre Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eingabe keine Zeichenfolge ist.

## Beispiele

### Dekodieren einer hexadezimalen Zeichenfolge

Dieses Beispiel dekodiert eine hexadezimale Zeichenfolge in ein `Uint8Array`.

```js
const hexString = "cafed00d";
const bytes = Uint8Array.fromHex(hexString);
console.log(bytes); // Uint8Array [ 202, 254, 208, 13 ]
```

Großbuchstaben werden ebenfalls unterstützt:

```js
const hexString = "CAFEd00d";
const bytes = Uint8Array.fromHex(hexString);
console.log(bytes); // Uint8Array [ 202, 254, 208, 13 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Uint8Array.fromHex` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Polyfill für `Uint8Array.fromHex` von es-shims](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Uint8Array.prototype.toHex()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
