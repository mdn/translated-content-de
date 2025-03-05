---
title: Uint8Array.setFromHex()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`setFromHex()`**-Methode von {{jsxref("Uint8Array")}}-Instanzen füllt dieses `Uint8Array`-Objekt mit Bytes aus einem hexadezimal codierten String und gibt ein Objekt zurück, das angibt, wie viele Bytes gelesen und geschrieben wurden.

Diese Methode analysiert den String in ein Byte-Array. Um den String in eine einzelne Zahl umzuwandeln, verwenden Sie stattdessen die {{jsxref("Global_Objects/parseInt", "parseInt()")}}-Funktion mit `radix` auf `16` gesetzt.

## Syntax

```js-nolint
setFromHex(string)
```

### Parameter

- `string`

  - : Ein hexadezimaler String, der Bytes codiert, die in ein `Uint8Array` geschrieben werden. Der String muss:

    - Eine gerade Anzahl von Zeichen haben, da zwei Zeichen ein Byte codieren.
    - Nur Zeichen aus dem hexadezimalen Alphabet enthalten, das 0–9 und A–F (nicht case-sensitiv) umfasst.
    - Keine Leerzeichen enthalten (anders als {{jsxref("Uint8Array.prototype.setFromBase64()")}}).

    Beachten Sie, dass der String nur bis zu dem Punkt gelesen wird, an dem das Array gefüllt ist, sodass ungültige hexadezimale Syntax nach diesem Punkt ignoriert wird.

### Rückgabewert

Ein Objekt, das die folgenden Eigenschaften enthält:

- `read`
  - : Die Anzahl der gelesenen hexadezimalen Zeichen aus dem Eingabestring. Wenn die dekodierten Daten in das Array passen, ist dies die Länge des Eingabestrings: andernfalls ist es die Anzahl der vollständigen hexadezimalen Zeichen, die in das Array passen.
- `written`
  - : Die Anzahl der Bytes, die in das `Uint8Array` geschrieben wurden. Wird niemals größer sein als die {{jsxref("TypedArray/byteLength", "byteLength")}} dieses `Uint8Array`.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen enthält, die nicht im hexadezimalen Alphabet sind, oder wenn seine Länge ungerade ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eingabestring kein String ist.

## Beispiele

### Dekodieren eines hexadezimalen Strings

Dieses Beispiel dekodiert einen hexadezimalen String in ein bestehendes `Uint8Array`.

```js
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(8) [202, 254, 208, 13, 0, 0, 0, 0]
```

### Dekodieren eines großen Strings in ein kleines Array

Wenn der String mehr Daten enthält, als das Array aufnehmen kann, wird die Methode nur so viele Bytes schreiben, wie das Array aufnehmen kann.

```js
const uint8Array = new Uint8Array(4);
const result = uint8Array.setFromHex("cafed00d-some random stuff");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(4) [202, 254, 208, 13]
```

Überschüssige Zeichen werden ignoriert, auch wenn sie ungültig sind. Jedoch muss die Gesamtlänge des Eingabestrings gerade sein.

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
