---
title: Uint8Array.fromHex()
short-title: fromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Uint8Array.fromHex()`** erstellt ein neues {{jsxref("Uint8Array")}}-Objekt aus einem Hexadezimal-String.

Diese Methode parst den String in ein Byte-Array. Um den String in eine einzelne Zahl zu konvertieren, verwenden Sie stattdessen die Funktion {{jsxref("Global_Objects/parseInt", "parseInt()")}} mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
Uint8Array.fromHex(string)
```

### Parameter

- `string`

  - : Ein Hexadezimal-String, der Bytes encodiert, die in ein `Uint8Array` konvertiert werden sollen. Der String muss:

    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte encodieren.
    - Nur Zeichen aus dem hexadezimalen Alphabet enthalten, welches 0–9 und A–F (nicht case-sensitiv) umfasst.
    - Keine Leerzeichen enthalten (anders als {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

### Rückgabewert

Ein neues `Uint8Array`-Objekt, das die dekodierten Bytes aus dem Hexadezimal-String enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen außerhalb des Hex-Alphabets enthält oder seine Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eingabe kein String ist.

## Beispiele

### Dekodierung eines Hexadezimal-Strings

Dieses Beispiel dekodiert einen Hexadezimal-String in ein `Uint8Array`.

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
- [es-shims Polyfill von `Uint8Array.fromHex`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
- {{jsxref("Uint8Array.prototype.toHex()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
