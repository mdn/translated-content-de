---
title: Uint8Array.prototype.setFromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex
l10n:
  sourceCommit: 2b4f6d0f51a57f205d5ddce9ac1b8d91b3ae2813
---

{{JSRef}}

Die **`setFromHex()`** Methode von {{jsxref("Uint8Array")}} Instanzen füllt dieses `Uint8Array`-Objekt mit Bytes aus einem hexadezimal codierten String und gibt ein Objekt zurück, das angibt, wie viele Bytes gelesen und geschrieben wurden.

Diese Methode parst den String in ein Byte-Array. Um den String in eine einzelne Zahl zu konvertieren, verwenden Sie stattdessen die Funktion {{jsxref("Global_Objects/parseInt", "parseInt()")}} mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
setFromHex(string)
```

### Parameter

- `string`

  - : Ein Hexadezimal-String, der Bytes zur Aufnahme in ein `Uint8Array` kodiert. Der String muss:

    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte kodieren.
    - Nur Zeichen des Hexadezimal-Alphabets enthalten, welches 0–9 und A–F (Groß-/Kleinschreibung wird nicht beachtet) umfasst.
    - Kein Leerzeichen enthalten (im Gegensatz zu {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

    Beachten Sie, dass der String nur bis zu dem Punkt gelesen wird, an dem das Array gefüllt ist, sodass ungültige Hex-Syntax danach ignoriert wird.

### Rückgabewert

Ein Objekt, das die folgenden Eigenschaften enthält:

- `read`
  - : Die Anzahl der aus dem Eingabestring gelesenen Hex-Zeichen. Wenn die dekodierten Daten in das Array passen, entspricht dies der Länge des Eingabestrings: Andernfalls ist es die Anzahl der vollständigen Hex-Zeichen, die in das Array passen.
- `written`
  - : Die Anzahl der in das `Uint8Array` geschriebenen Bytes. Wird niemals größer sein als die {{jsxref("TypedArray/byteLength", "byteLength")}} dieses `Uint8Array`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen außerhalb des Hexadezimal-Alphabets enthält oder seine Länge ungerade ist.
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

Wenn der String mehr Daten enthält, als das Array aufnehmen kann, schreibt die Methode nur so viele Bytes, wie das Array aufnehmen kann.

```js
const uint8Array = new Uint8Array(4);
const result = uint8Array.setFromHex("cafed00d-some random stuff");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(4) [202, 254, 208, 13]
```

Überschüssige Zeichen werden ignoriert, selbst wenn sie ungültig sind. Die Gesamtlänge des Eingabestrings muss jedoch gerade sein.

### Setzen von Daten an einem spezifischen Offset

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
