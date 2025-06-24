---
title: Uint8Array.fromHex()
short-title: fromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`Uint8Array.fromHex()`** statische Methode erstellt ein neues {{jsxref("Uint8Array")}}-Objekt aus einem hexadezimalen String.

Diese Methode analysiert den String in ein Byte-Array. Um den String in eine einzelne Zahl umzuwandeln, verwenden Sie stattdessen die {{jsxref("Global_Objects/parseInt", "parseInt()")}}-Funktion mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
Uint8Array.fromHex(string)
```

### Parameter

- `string`
  - : Ein hexadezimaler String, der Bytes codiert, die in ein `Uint8Array` umgewandelt werden sollen. Der String muss:
    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte codieren.
    - Nur Zeichen aus dem hexadezimalen Alphabet enthalten, welches 0–9 und A–F (nicht unterschieden zwischen Groß- und Kleinschreibung) umfasst.
    - Keine Leerzeichen enthalten (im Gegensatz zu {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

### Rückgabewert

Ein neues `Uint8Array`-Objekt, das die dekodierten Bytes aus dem hexadezimalen String enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen außerhalb des Hexadezimalalphabets enthält oder seine Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eingabestring kein String ist.

## Beispiele

### Dekodierung eines hexadezimalen Strings

Dieses Beispiel dekodiert einen hexadezimalen String in ein `Uint8Array`.

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
