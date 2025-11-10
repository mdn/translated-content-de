---
title: Uint8Array.fromHex()
short-title: fromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Uint8Array.fromHex()`** erstellt ein neues {{jsxref("Uint8Array")}}-Objekt aus einem Hexadezimal-String.

Diese Methode parst den String in ein Byte-Array. Um den String in eine einzelne Zahl zu konvertieren, verwenden Sie stattdessen die {{jsxref("Global_Objects/parseInt", "parseInt()")}}-Funktion mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
Uint8Array.fromHex(string)
```

### Parameter

- `string`
  - : Ein Hexadezimal-String, der Bytes codiert und in ein `Uint8Array` konvertiert werden soll. Der String muss:
    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte codieren.
    - Nur Zeichen des hexadezimalen Alphabets enthalten, welches 0–9 und A–F (groß-/kleinschreibungsunabhängig) einschließt.
    - Keine Leerzeichen enthalten (anders als {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

### Rückgabewert

Ein neues `Uint8Array`-Objekt, welches die dekodierten Bytes des Hexadezimal-Strings enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabe-String Zeichen außerhalb des hexadezimalen Alphabets enthält oder seine Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eingabe-String keine Zeichenkette ist.

## Beispiele

### Dekodieren eines Hexadezimal-Strings

Dieses Beispiel dekodiert einen Hexadezimal-String in ein `Uint8Array`.

```js
const hexString = "cafed00d";
const bytes = Uint8Array.fromHex(hexString);
console.log(bytes); // Uint8Array [ 202, 254, 208, 13 ]
```

Auch Großbuchstaben werden unterstützt:

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

- [Polyfill von `Uint8Array.fromHex` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims Polyfill von `Uint8Array.fromHex`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Uint8Array.prototype.toHex()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
