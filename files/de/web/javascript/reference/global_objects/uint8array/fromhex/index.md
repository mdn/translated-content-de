---
title: Uint8Array.fromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Uint8Array.fromHex()`** erstellt ein neues {{jsxref("Uint8Array")}}-Objekt aus einem Hexadezimal-String.

Diese Methode analysiert den String in ein Byte-Array. Um den String in eine einzelne Zahl zu konvertieren, verwenden Sie stattdessen die Funktion {{jsxref("Global_Objects/parseInt", "parseInt()")}} mit dem `radix` auf `16` gesetzt.

## Syntax

```js-nolint
Uint8Array.fromHex(string)
```

### Parameter

- `string`

  - : Ein Hexadezimal-String, der die Bytes zur Umwandlung in ein `Uint8Array` kodiert. Der String muss folgende Bedingungen erfüllen:

    - Eine gerade Anzahl von Zeichen enthalten, da zwei Zeichen ein Byte kodieren.
    - Nur Zeichen aus dem hexadezimalen Alphabet enthalten, das die Zeichen 0–9 und A–F (unabhängig von Groß- und Kleinschreibung) umfasst.
    - Keine Leerzeichen enthalten (im Gegensatz zu {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

### Rückgabewert

Ein neues `Uint8Array`-Objekt, das die decodierten Bytes des Hexadezimal-Strings enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen außerhalb des Hexadezimal-Alphabets enthält oder seine Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eingabestring kein String ist.

## Beispiele

### Decodierung eines Hexadezimal-Strings

Dieses Beispiel decodiert einen Hexadezimal-String in ein `Uint8Array`.

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
