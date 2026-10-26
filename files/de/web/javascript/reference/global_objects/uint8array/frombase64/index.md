---
title: Uint8Array.fromBase64()
short-title: fromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Uint8Array.fromBase64()`** erstellt ein neues {{jsxref("Uint8Array")}}-Objekt aus einer {{Glossary("Base64", "base64")}}-codierten Zeichenfolge.

Diese Methode ist [`Window.atob()`](/de/docs/Web/API/Window/atob) vorzuziehen, da sie ein Byte-Array zurückgibt. Damit lässt sich leichter arbeiten als mit einer Zeichenfolge, die rohe Bytes enthält – es sei denn, die decodierten Binärdaten sollen tatsächlich ASCII-Text sein. Wenn Sie bereits einen ArrayBuffer zugewiesen haben und ihn mit Daten füllen möchten, verwenden Sie stattdessen die Instanzmethode {{jsxref("Uint8Array.prototype.setFromBase64()")}}.

## Syntax

```js-nolint
Uint8Array.fromBase64(string)
Uint8Array.fromBase64(string, options)
```

### Parameter

- `string`
  - : Eine base64-Zeichenfolge, die die in ein `Uint8Array` umzuwandelnden Bytes codiert. Die Zeichenfolge darf nur Zeichen des base64-Alphabets enthalten: A–Z, a–z, 0–9 sowie zwei Sonderzeichen, entweder `+` und `/` (bei `alphabet: "base64"` in `options`) oder `-` und `_` (bei `alphabet: "base64url"` in `options`). Am Ende darf sie `=`-Zeichen als Padding enthalten. ASCII-Leerraumzeichen innerhalb der Zeichenfolge werden ignoriert.
- `options` {{optional_inline}}
  - : Ein Objekt, mit dem sich die Interpretation der base64-Zeichenfolge anpassen lässt. Es kann die folgenden Eigenschaften enthalten:
    - `alphabet` {{optional_inline}}
      - : Eine Zeichenfolge, die das zu verwendende base64-Alphabet angibt. Mögliche Werte sind:
        - `"base64"` (Standardwert)
          - : Akzeptiert Eingaben, die mit dem Standard-base64-Alphabet codiert sind, das `+` und `/` verwendet.
        - `"base64url"`
          - : Akzeptiert Eingaben, die mit dem URL-sicheren base64-Alphabet codiert sind, das `-` und `_` verwendet.
    - `lastChunkHandling` {{optional_inline}}
      - : Eine Zeichenfolge, die angibt, wie der letzte Block der base64-Zeichenfolge behandelt wird. Da jeweils 4 base64-Zeichen 3 Bytes codieren, wird die Zeichenfolge in Blöcke zu je 4 Zeichen unterteilt. Enthält der letzte Block weniger als 4 Zeichen, muss er anders behandelt werden. Mögliche Werte sind:
        - `"loose"` (Standardwert)
          - : Der letzte Block kann aus 2 oder 3 base64-Zeichen bestehen oder genau 4 Zeichen lang sein und `=`-Zeichen als Padding enthalten. Er wird decodiert und an das Ergebnis angehängt.
        - `"strict"`
          - : Der letzte Block muss genau 4 Zeichen lang sein und `=`-Zeichen als Padding enthalten. Außerdem müssen die {{Glossary("Base64#last_chunk", "Overflow-Bits")}} (die nachgestellten Bits des letzten base64-Zeichens, die keine Daten darstellen) den Wert 0 haben. Der letzte Block wird decodiert und an das Ergebnis angehängt.
        - `"stop-before-partial"`
          - : Ist der letzte Block genau 4 Zeichen lang und enthält `=`-Zeichen als Padding, wird er decodiert und an das Ergebnis angehängt. Andernfalls wird der letzte unvollständige Block ignoriert. Enthält er jedoch ein base64-Zeichen, auf das `=` folgt, wird weiterhin ein Syntaxfehler ausgelöst. Dies ist nützlich, wenn die Zeichenfolge aus einem Stream stammt und der letzte Block noch nicht vollständig ist. Wenn Sie wissen möchten, wie viele Zeichen der Eingabe gelesen wurden, verwenden Sie stattdessen {{jsxref("Uint8Array.prototype.setFromBase64()")}}. Die verlinkte Seite enthält auch ein Beispiel für die Decodierung eines Streams mit `"stop-before-partial"`.

### Rückgabewert

Ein neues `Uint8Array`-Objekt, das die decodierten Bytes der base64-codierten Zeichenfolge enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn die Eingabezeichenfolge Zeichen außerhalb des angegebenen Alphabets enthält oder der letzte Block die Option `lastChunkHandling` nicht erfüllt.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Die Eingabe ist keine Zeichenfolge.
    - Das Argument `options` ist weder ein Objekt noch `undefined`.
    - Die Optionen haben weder die erwarteten Werte noch den Wert `undefined`.

## Beispiele

### Eine base64-Zeichenfolge decodieren

In diesem Beispiel werden die Standardwerte für `alphabet` und `lastChunkHandling` verwendet, um eine base64-Zeichenfolge zu decodieren. Beachten Sie Folgendes:

- Das Leerraumzeichen in der Zeichenfolge wird ignoriert.
- Die Zeichenfolge enthält 14 base64-Zeichen; ihre Anzahl ist also kein Vielfaches von 4. Sie ist nur mit `lastChunkHandling: "loose"` gültig und decodierbar.
- Der letzte Block, `Ph`, endet mit dem Zeichen `h`, das in base64 `0b100001` entspricht. Die letzten `0001`-Bits sind daher „Overflow-Bits“ und werden ignoriert. Dies ist nur mit `lastChunkHandling: "loose"` gültig und decodierbar.

```js
const uint8Array = Uint8Array.fromBase64("PGI+ TURO PC9i Ph");
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Eine URL-sichere base64-Zeichenfolge decodieren

In diesem Beispiel wird die Option `alphabet` verwendet, um eine URL-sichere base64-Zeichenfolge zu decodieren.

```js
const uint8Array = Uint8Array.fromBase64("PGI-TUROPC9iPg", {
  alphabet: "base64url",
});
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Eine base64-Zeichenfolge mit strikter Behandlung des letzten Blocks decodieren

In diesem Beispiel wird die Option `lastChunkHandling` verwendet, um eine base64-Zeichenfolge zu decodieren. Dabei muss der letzte Block genau 4 Zeichen lang sein und `=`-Zeichen als Padding enthalten; außerdem müssen die Overflow-Bits den Wert 0 haben.

```js
const array1 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg==", {
  lastChunkHandling: "strict",
});
console.log(array1); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]

const array2 = Uint8Array.fromBase64("PGI+ TURO PC9i Ph==", {
  lastChunkHandling: "strict",
});
// Throws a SyntaxError because h is 0b100001, where the last 4 bits are not 0

const array3 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg", {
  lastChunkHandling: "strict",
});
// Throws a SyntaxError because the last chunk is not exactly 4 characters long
```

### Eine base64-Zeichenfolge unter Ignorieren eines unvollständigen letzten Blocks decodieren

In diesem Beispiel wird die Option `lastChunkHandling` verwendet, um eine base64-Zeichenfolge zu decodieren. Ein unvollständiger letzter Block wird dabei ignoriert.

```js
// The last chunk is complete
const array1 = Uint8Array.fromBase64("PGI+ TURO PC9i", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array1); // Uint8Array(9) [60, 98, 62, 77, 68, 78, 60, 47, 98]

// The last chunk is also complete with padding
const array2 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg==", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array2); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]

// The last chunk is partial; it's ignored
const array3 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array3); // Uint8Array(9) [60, 98, 62, 77, 68, 78, 60, 47, 98]

// The last chunk is partial with padding; it's still ignored
const array4 = Uint8Array.fromBase64("PGI+ TURO PC9i Pg=", {
  lastChunkHandling: "stop-before-partial",
});
console.log(array4); // Uint8Array(9) [60, 98, 62, 77, 68, 78, 60, 47, 98]

// The last chunk is partial, but it contains one base64 character followed by `=`
const array5 = Uint8Array.fromBase64("PGI+ TURO PC9i P=", {
  lastChunkHandling: "stop-before-partial",
});
// Throws a SyntaxError because this cannot possibly be part of a valid base64 string
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Uint8Array.fromBase64` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Polyfill für `Uint8Array.fromBase64` von es-shims](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- [`Window.atob()`](/de/docs/Web/API/Window/atob)
