---
title: Uint8Array.prototype.setFromHex()
short-title: setFromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`setFromHex()`** Methode von {{jsxref("Uint8Array")}} Instanzen befüllt dieses `Uint8Array` Objekt mit Bytes aus einem hexadezimal kodierten String und gibt ein Objekt zurück, das angibt, wie viele Bytes gelesen und geschrieben wurden.

Diese Methode analysiert den String in ein Byte-Array. Um den String in eine einzelne Zahl umzuwandeln, verwenden Sie stattdessen die {{jsxref("Global_Objects/parseInt", "parseInt()")}} Funktion mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
setFromHex(string)
```

### Parameter

- `string`

  - : Ein hexadezimaler String, der Bytes enkodiert, um in ein `Uint8Array` geschrieben zu werden. Der String muss:

    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte kodieren.
    - Nur Zeichen im hexadezimalen Alphabet enthalten, welches 0–9 und A–F umfasst (unabhängig von Groß- und Kleinschreibung).
    - Keine Leerzeichen enthalten (im Gegensatz zu {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

    Beachten Sie, dass der String nur bis zu dem Punkt gelesen wird, an dem das Array gefüllt ist, sodass syntaktisch ungültiges Hex nach diesem Punkt ignoriert wird.

### Rückgabewert

Ein Objekt, das die folgenden Eigenschaften enthält:

- `read`
  - : Die Anzahl der Hex-Zeichen, die aus dem Eingabestring gelesen wurden. Wenn die dekodierten Daten in das Array passen, ist dies die Länge des Eingabestrings; andernfalls ist es die Anzahl der vollständigen Hex-Zeichen, die in das Array passen.
- `written`
  - : Die Anzahl der Bytes, die in das `Uint8Array` geschrieben wurden. Wird niemals größer sein als die {{jsxref("TypedArray/byteLength", "byteLength")}} dieses `Uint8Array`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen außerhalb des Hex-Alphabets enthält oder seine Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eingabestring kein String ist.

## Beispiele

### Dekodierung eines hexadezimalen Strings

Dieses Beispiel dekodiert einen hexadezimalen String in ein bestehendes `Uint8Array`.

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(8) [202, 254, 208, 13, 0, 0, 0, 0]
```

### Dekodierung eines großen Strings in ein kleines Array

Wenn der String mehr Daten enthält, als das Array halten kann, wird die Methode nur so viele Bytes schreiben, wie das Array fassen kann.

```js
const uint8Array = new Uint8Array(4);
const result = uint8Array.setFromHex("cafed00d-some random stuff");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(4) [202, 254, 208, 13]
```

Überschüssige Zeichen werden ignoriert, auch wenn sie ungültig sind. Die Gesamtlänge des Eingabestrings muss jedoch gerade sein.

### Daten an einem bestimmten Offset setzen

Die `setFromHex()` Methode beginnt immer am Anfang des `Uint8Array` zu schreiben. Wenn Sie in die Mitte des Arrays schreiben möchten, können Sie stattdessen in ein {{jsxref("TypedArray.prototype.subarray()")}} schreiben.

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
