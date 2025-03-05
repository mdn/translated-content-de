---
title: Uint8Array.fromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`Uint8Array.fromBase64()`** statische Methode erstellt ein neues {{jsxref("Uint8Array")}} Objekt aus einem {{Glossary("Base64", "base64")}}-codierten String.

Diese Methode sollte gegenüber [`Window.atob()`](/de/docs/Web/API/Window/atob) bevorzugt werden, da sie ein Byte-Array liefert, mit dem einfacher gearbeitet werden kann als mit einem String, der rohe Bytes enthält, es sei denn, Ihre decodierten Binärdaten sind tatsächlich als ASCII-Text gedacht. Wenn Sie bereits einen Array-Puffer zugewiesen haben und diesen befüllen möchten, verwenden Sie stattdessen die Instanzmethode {{jsxref("Uint8Array.prototype.setFromBase64()")}}.

## Syntax

```js-nolint
Uint8Array.fromBase64(string)
Uint8Array.fromBase64(string, options)
```

### Parameter

- `string`
  - : Ein Base64-String, der Bytes codiert, um ihn in ein `Uint8Array` zu konvertieren. Der String darf nur Zeichen aus dem Base64-Alphabet enthalten, das A–Z, a–z, 0–9 sowie zwei Sonderzeichen umfasst, die entweder `+` und `/` (bei Verwendung von `alphabet: "base64"` in `options`) oder `-` und `_` (bei Verwendung von `alphabet: "base64url"` in `options`) sind. Am Ende können `=` als Füllzeichen vorhanden sein. Alle ASCII-Leerzeichen im String werden ignoriert.
- `options` {{optional_inline}}
  - : Ein Objekt zur Anpassung des Base64-String-Interpretationsprozesses. Es kann die folgenden Eigenschaften enthalten:
    - `alphabet` {{optional_inline}}
      - : Ein String, der das zu verwendende Base64-Alphabet angibt. Es kann eines der folgenden sein:
        - `"base64"` (Standard)
          - : Akzeptiert Eingaben, die mit dem Standard-Base64-Alphabet codiert sind, das `+` und `/` verwendet.
        - `"base64url"`
          - : Akzeptiert Eingaben, die mit dem URL-sicheren Base64-Alphabet codiert sind, das `-` und `_` verwendet.
    - `lastChunkHandling` {{optional_inline}}
      - : Ein String, der angibt, wie der letzte Abschnitt des Base64-Strings behandelt werden soll. Da alle 4 Zeichen in Base64 3 Bytes codieren, wird der String in Abschnitte von 4 Zeichen unterteilt. Wenn der letzte Abschnitt weniger als 4 Zeichen hat, muss er anders behandelt werden. Es kann einer der folgenden sein:
        - `"loose"` (Standard)
          - : Der letzte Abschnitt kann entweder 2 oder 3 Base64-Zeichen enthalten oder genau 4 Zeichen lang mit `=` als Füllzeichen sein. Der letzte Abschnitt wird decodiert und dem Ergebnis hinzugefügt.
        - `"strict"`
          - : Der letzte Abschnitt muss genau 4 Zeichen lang mit `=` als Füllzeichen sein. Ferner müssen die {{Glossary("Base64#last_chunk", "Überlaufbits")}} (nachgestellte Bits des letzten Base64-Zeichens, die keine Daten darstellen) 0 sein. Der letzte Abschnitt wird decodiert und dem Ergebnis hinzugefügt.
        - `"stop-before-partial"`
          - : Wenn der letzte Abschnitt genau 4 Zeichen lang mit `=` als Füllzeichen ist, wird er decodiert und dem Ergebnis hinzugefügt. Andernfalls wird der letzte unvollständige Abschnitt ignoriert (aber wenn er ein Base64-Zeichen gefolgt von `=` enthält, wird trotzdem ein Syntaxfehler ausgelöst). Dies ist nützlich, wenn der String aus einem Stream kommt und der letzte Abschnitt noch nicht vollständig ist. Um zu erfahren, wie viele Zeichen der Eingabe gelesen wurden, verwenden Sie stattdessen {{jsxref("Uint8Array.prototype.setFromBase64()")}} (die verlinkte Seite enthält auch ein Beispiel für die Decoder aus Streams mit `"stop-before-partial"`).

### Rückgabewert

Ein neues `Uint8Array`-Objekt, das die aus dem Base64-codierten String decodierten Bytes enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabe-String Zeichen enthält, die außerhalb des angegebenen Alphabets liegen, oder wenn der letzte Abschnitt nicht die `lastChunkHandling` Option erfüllt.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Eingabe-String ist kein String.
    - Das `options` Objekt ist kein Objekt oder `undefined`.
    - Die Optionen haben nicht die erwarteten Werte oder sind `undefined`.

## Beispiele

### Decodieren eines Base64-Strings

Dieses Beispiel verwendet die standardmäßigen `alphabet` und `lastChunkHandling` Optionen, um einen Base64-String zu decodieren. Beachten Sie:

- Das Leerzeichen im Raum wird ignoriert.
- Der String hat 14 Base64-Zeichen, was kein Vielfaches von 4 ist. Dies ist nur mit `lastChunkHandling: "loose"` gültig und decodierbar.
- Der letzte Abschnitt, `Ph`, endet mit dem Zeichen `h`, das in Base64 `0b100001` ist, daher werden die letzten `0001` Bits als "Überlaufbits" ignoriert. Dies ist nur mit `lastChunkHandling: "loose"` gültig und decodierbar.

```js
const uint8Array = Uint8Array.fromBase64("PGI+ TURO PC9i Ph");
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Decodieren eines URL-sicheren Base64-Strings

Dieses Beispiel verwendet die `alphabet` Option, um einen URL-sicheren Base64-String zu decodieren.

```js
const uint8Array = Uint8Array.fromBase64("PGI-TUROPC9iPg", {
  alphabet: "base64url",
});
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Decodieren eines Base64-Strings mit striktem Umgang des letzten Abschnitts

Dieses Beispiel verwendet die `lastChunkHandling` Option, um einen Base64-String zu decodieren, bei dem der letzte Abschnitt genau 4 Zeichen lang mit Füllzeichen `=` sein muss und die Überlaufbits 0 sein müssen.

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

### Decodieren eines Base64-Strings mit teilweisem Umgang des letzten Abschnitts

Dieses Beispiel verwendet die `lastChunkHandling` Option, um einen Base64-String zu decodieren und dabei einen unvollständigen letzten Abschnitt zu ignorieren.

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

- [Polyfill von `Uint8Array.fromBase64` in `core-js`](https://github.com/zloirock/core-js#uint8array-to--from-base64-and-hex)
- [es-shims polyfill von `Uint8Array.fromBase64`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- [`Window.atob()`](/de/docs/Web/API/Window/atob)
