---
title: Uint8Array.prototype.setFromHex()
short-title: setFromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setFromHex()`**-Methode von {{jsxref("Uint8Array")}}-Instanzen befüllt dieses `Uint8Array`-Objekt mit Bytes aus einem hex-kodierten String und gibt ein Objekt zurück, das angibt, wie viele Bytes gelesen und geschrieben wurden.

Diese Methode analysiert den String in ein Byte-Array. Um den String in eine einzelne Zahl umzuwandeln, verwenden Sie stattdessen die {{jsxref("Global_Objects/parseInt", "parseInt()")}}-Funktion mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
setFromHex(string)
```

### Parameter

- `string`
  - : Ein hexadezimaler String, der Bytes kodiert, die in ein `Uint8Array` geschrieben werden sollen. Der String muss:
    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte kodieren.
    - Nur Zeichen des hexadezimalen Alphabets enthalten, das 0–9 und A–F (Groß-/Kleinschreibung wird nicht unterschieden) einschließt.
    - Keine Leerzeichen enthalten (im Gegensatz zu {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

    Beachten Sie, dass der String nur bis zu dem Punkt gelesen wird, an dem das Array gefüllt ist, daher wird ungültige Hex-Syntax nach diesem Punkt ignoriert.

### Rückgabewert

Ein Objekt, das die folgenden Eigenschaften enthält:

- `read`
  - : Die Anzahl der hexadezimalen Zeichen, die aus dem Eingabestring gelesen wurden. Wenn die dekodierten Daten in das Array passen, entspricht dies der Länge des Eingabestrings: andernfalls ist es die Anzahl der vollständigen hexadezimalen Zeichen, die in das Array passen.
- `written`
  - : Die Anzahl der Bytes, die in das `Uint8Array` geschrieben wurden. Wird niemals größer als die {{jsxref("TypedArray/byteLength", "byteLength")}} dieses `Uint8Array` sein.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen außerhalb des Hex-Alphabets enthält oder seine Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eingabestring kein String ist.

## Beispiele

### Entschlüsseln eines hexadezimalen Strings

Dieses Beispiel entschlüsselt einen hexadezimalen String in ein vorhandenes `Uint8Array`.

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(8) [202, 254, 208, 13, 0, 0, 0, 0]
```

### Entschlüsseln eines großen Strings in ein kleines Array

Wenn der String mehr Daten enthält, als das Array aufnehmen kann, schreibt die Methode nur so viele Bytes, wie das Array aufnehmen kann.

```js
const uint8Array = new Uint8Array(4);
const result = uint8Array.setFromHex("cafed00d-some random stuff");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(4) [202, 254, 208, 13]
```

Überschüssige Zeichen werden ignoriert, auch wenn sie ungültig sind. Die Gesamtlänge des Eingabestrings muss jedoch gerade sein.

### Festlegen von Daten an einem bestimmten Offset

Die `setFromHex()`-Methode beginnt immer am Anfang des `Uint8Array` zu schreiben. Wenn Sie in die Mitte des Arrays schreiben möchten, können Sie stattdessen in ein {{jsxref("TypedArray.prototype.subarray()")}} schreiben.

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

- [Polyfill von `Uint8Array.prototype.setFromHex` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims Polyfill von `Uint8Array.prototype.setFromHex`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.fromHex()")}}
- {{jsxref("Uint8Array.prototype.toHex()")}}
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
