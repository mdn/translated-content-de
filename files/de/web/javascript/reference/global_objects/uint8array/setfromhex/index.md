---
title: Uint8Array.prototype.setFromHex()
short-title: setFromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`setFromHex()`**-Methode von {{jsxref("Uint8Array")}}-Instanzen füllt dieses `Uint8Array`-Objekt mit Bytes aus einem hex-codierten String und gibt ein Objekt zurück, das anzeigt, wie viele Bytes gelesen und geschrieben wurden.

Diese Methode analysiert den String in ein Byte-Array. Um den String in eine einzelne Zahl zu konvertieren, verwenden Sie stattdessen die {{jsxref("Global_Objects/parseInt", "parseInt()")}}-Funktion mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
setFromHex(string)
```

### Parameter

- `string`

  - : Ein hexadezimaler String, der Bytes kodiert, die in ein `Uint8Array` geschrieben werden sollen. Der String muss:

    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte kodieren.
    - Nur Zeichen aus dem hexadezimalen Alphabet enthalten, das 0–9 und A–F (nicht case-sensitiv) umfasst.
    - Keine Leerzeichen enthalten (im Gegensatz zu {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

    Beachten Sie, dass der String nur bis zu dem Punkt gelesen wird, an dem das Array gefüllt ist, sodass ungültige Hex-Syntax nach diesem Punkt ignoriert wird.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `read`
  - : Die Anzahl der hexadezimalen Zeichen, die aus dem Eingabe-String gelesen wurden. Wenn die dekodierten Daten in das Array passen, entspricht dies der Länge des Eingabe-Strings; andernfalls ist es die Anzahl der vollständigen hexadezimalen Zeichen, die in das Array passen.
- `written`
  - : Die Anzahl der Bytes, die in das `Uint8Array` geschrieben wurden. Wird niemals größer sein als die {{jsxref("TypedArray/byteLength", "Länge in Bytes")}} dieses `Uint8Array`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabe-String Zeichen außerhalb des Hex-Alphabets enthält oder seine Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eingabe-String kein String ist.

## Beispiele

### Dekodierung eines hexadezimalen Strings

Dieses Beispiel dekodiert einen hexadezimalen String in ein vorhandenes `Uint8Array`.

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(8) [202, 254, 208, 13, 0, 0, 0, 0]
```

### Dekodierung eines großen Strings in ein kleines Array

Wenn der String mehr Daten enthält, als das Array aufnehmen kann, schreibt die Methode nur so viele Bytes, wie das Array aufnehmen kann.

```js
const uint8Array = new Uint8Array(4);
const result = uint8Array.setFromHex("cafed00d-some random stuff");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(4) [202, 254, 208, 13]
```

Überschüssige Zeichen werden ignoriert, selbst wenn sie ungültig sind. Allerdings muss die Gesamtlänge des Eingabe-Strings gerade sein.

### Setzen von Daten an einem bestimmten Offset

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
