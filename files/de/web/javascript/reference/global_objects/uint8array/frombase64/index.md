---
title: Uint8Array.fromBase64()
short-title: fromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Uint8Array.fromBase64()`** statische Methode erstellt ein neues {{jsxref("Uint8Array")}}-Objekt aus einem {{Glossary("Base64", "base64")}}-kodierten String.

Diese Methode sollte gegenüber [`Window.atob()`](/de/docs/Web/API/Window/atob) bevorzugt werden, da sie ein Byte-Array liefert, mit dem einfacher zu arbeiten ist als mit einem String, der rohe Bytes enthält, es sei denn, Ihre dekodierten Binärdaten sollen tatsächlich ASCII-Text sein. Wenn Sie bereits einen Array-Puffer zugewiesen haben und diesen befüllen möchten, verwenden Sie stattdessen die Instanzmethode {{jsxref("Uint8Array.prototype.setFromBase64()")}}.

## Syntax

```js-nolint
Uint8Array.fromBase64(string)
Uint8Array.fromBase64(string, options)
```

### Parameter

- `string`
  - : Ein Base64-String, der Bytes kodiert, die in ein `Uint8Array` umgewandelt werden sollen. Der String darf nur Zeichen aus dem Base64-Alphabet enthalten, das A–Z, a–z, 0–9 und zwei Sonderzeichen umfasst, die entweder `+` und `/` (wenn `alphabet: "base64"` in `options` verwendet wird) oder `-` und `_` (wenn `alphabet: "base64url"` in `options` verwendet wird) sind. Am Ende dürfen Auffüllzeichen `=` vorhanden sein. Alle ASCII-Leerzeichen innerhalb des Strings werden ignoriert.
- `options` {{optional_inline}}
  - : Ein Objekt, das den Interpretationsprozess des Base64-Strings anpasst. Es kann die folgenden Eigenschaften enthalten:
    - `alphabet` {{optional_inline}}
      - : Ein String, der das Base64-Alphabet angibt, das verwendet wird. Es kann eines der folgenden sein:
        - `"base64"` (Standard)
          - : Akzeptiere Eingaben, die mit dem Standard-Base64-Alphabet kodiert sind, das `+` und `/` verwendet.
        - `"base64url"`
          - : Akzeptiere Eingaben, die mit dem URL-sicheren Base64-Alphabet kodiert sind, das `-` und `_` verwendet.
    - `lastChunkHandling` {{optional_inline}}
      - : Ein String, der angibt, wie der letzte Block des Base64-Strings behandelt werden soll. Da jede 4 Zeichen in Base64 3 Bytes kodieren, wird der String in Blöcke von 4 Zeichen aufgeteilt. Wenn der letzte Block weniger als 4 Zeichen hat, muss er anders behandelt werden. Er kann einer der folgenden sein:
        - `"loose"` (Standard)
          - : Der letzte Block kann entweder 2 oder 3 Base64-Zeichen oder genau 4 Zeichen lang mit Auffüllzeichen `=` sein. Der letzte Block wird dekodiert und dem Ergebnis hinzugefügt.
        - `"strict"`
          - : Der letzte Block muss genau 4 Zeichen lang mit Auffüllzeichen `=` sein. Außerdem müssen {{Glossary("Base64#last_chunk", "Überlauf-Bits")}} (nachlaufende Bits vom letzten Base64-Zeichen, die keine Daten darstellen) 0 sein. Der letzte Block wird dekodiert und dem Ergebnis hinzugefügt.
        - `"stop-before-partial"`
          - : Wenn der letzte Block genau 4 Zeichen lang mit Auffüllzeichen `=` ist, wird er dekodiert und dem Ergebnis hinzugefügt. Andernfalls wird der letzte partielle Block ignoriert (aber wenn er ein Base64-Zeichen gefolgt von `=` enthält, wird dennoch ein Syntaxfehler ausgelöst). Dies ist nützlich, wenn der String aus einem Stream stammt und der letzte Block noch nicht vollständig ist. Um zu wissen, wie viele Zeichen der Eingabe gelesen wurden, verwenden Sie {{jsxref("Uint8Array.prototype.setFromBase64()")}} stattdessen (die verlinkte Seite enthält auch ein Beispiel für die Dekodierung von Streams mit `"stop-before-partial"`).

### Rückgabewert

Ein neues `Uint8Array`-Objekt, das die dekodierten Bytes aus dem Base64-kodierten String enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen außerhalb des angegebenen Alphabets enthält oder wenn der letzte Block die Vorgaben der `lastChunkHandling`-Option nicht erfüllt.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Eingabestring ist kein String.
    - Das `options`-Objekt ist kein Objekt oder `undefined`.
    - Die Optionen haben nicht die erwarteten Werte oder sind `undefined`.

## Beispiele

### Dekodierung eines Base64-Strings

Dieses Beispiel verwendet die Standardoptionen `alphabet` und `lastChunkHandling`, um einen Base64-String zu dekodieren. Beachten Sie, dass:

- Die Leerzeichen im String ignoriert werden.
- Der String 14 Base64-Zeichen hat, keine Vielfaches von 4. Dies ist nur mit `lastChunkHandling: "loose"` gültig und dekodierbar.
- Der letzte Block, `Ph`, endet im Zeichen `h`, das `0b100001` in Base64 ist, daher sind die letzten `0001`-Bits "Überlauf-Bits" und werden ignoriert. Dies ist nur mit `lastChunkHandling: "loose"` gültig und dekodierbar.

```js
const uint8Array = Uint8Array.fromBase64("PGI+ TURO PC9i Ph");
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Dekodierung eines URL-sicheren Base64-Strings

Dieses Beispiel verwendet die Option `alphabet`, um einen URL-sicheren Base64-String zu dekodieren.

```js
const uint8Array = Uint8Array.fromBase64("PGI-TUROPC9iPg", {
  alphabet: "base64url",
});
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Dekodierung eines Base64-Strings mit strikter Handhabung des letzten Blocks

Dieses Beispiel verwendet die Option `lastChunkHandling`, um einen Base64-String zu dekodieren, bei dem der letzte Block exakt 4 Zeichen lang mit Auffüllzeichen `=` sein muss und die Überlauf-Bits 0 sein müssen.

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

### Dekodierung eines Base64-Strings mit partieller Handhabung des letzten Blocks

Dieses Beispiel verwendet die Option `lastChunkHandling`, um einen Base64-String zu dekodieren und dabei jeden partiellen letzten Block zu ignorieren.

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
