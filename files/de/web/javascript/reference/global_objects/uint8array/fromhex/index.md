---
title: Uint8Array.fromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex
l10n:
  sourceCommit: 087a73e18e2818c1cc6b9955218c614c44e612a0
---

{{JSRef}}

Die statische Methode **`Uint8Array.fromHex()`** erstellt ein neues {{jsxref("Uint8Array")}}-Objekt aus einem hexadezimalen String.

Diese Methode analysiert den String in ein Byte-Array. Um den String in eine einzelne Zahl umzuwandeln, verwenden Sie die Funktion {{jsxref("Global_Objects/parseInt", "parseInt()")}} mit einem `radix`-Wert von `16`.

## Syntax

```js-nolint
Uint8Array.fromHex(string)
```

### Parameter

- `string`

  - : Ein hexadezimaler String, der Bytes codiert, die in ein `Uint8Array` konvertiert werden sollen. Der String muss:

    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte kodieren.
    - Nur Zeichen des hexadezimalen Alphabets enthalten, das 0–9 und A–F umfasst (Groß-/Kleinschreibung wird nicht berücksichtigt).
    - Keine Leerzeichen enthalten (anders als {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

### Rückgabewert

Ein neues `Uint8Array`-Objekt, das die decodierten Bytes aus dem hexadezimalen String enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen außerhalb des hexadezimalen Alphabets enthält oder seine Länge ungerade ist.
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

- [Polyfill von `Uint8Array.fromHex` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Uint8Array.prototype.toHex()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
