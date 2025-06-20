---
title: Uint8Array.fromBase64()
short-title: fromBase64()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/fromBase64
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Uint8Array.fromBase64()`** erstellt ein neues {{jsxref("Uint8Array")}}-Objekt aus einem {{Glossary("Base64", "base64")}}-kodierten String.

Diese Methode sollte gegenüber [`Window.atob()`](/de/docs/Web/API/Window/atob) bevorzugt werden, da sie ein Byte-Array erzeugt, das einfacher zu handhaben ist als ein String mit Rohbytes, es sei denn, Ihre dekodierten Binärdaten sollen tatsächlich ASCII-Text sein. Wenn Sie bereits einen Array-Puffer zugewiesen haben und diesen befüllen möchten, verwenden Sie stattdessen die Instanzmethode {{jsxref("Uint8Array.prototype.setFromBase64()")}}.

## Syntax

```js-nolint
Uint8Array.fromBase64(string)
Uint8Array.fromBase64(string, options)
```

### Parameter

- `string`
  - : Ein Base64-String, der Bytes kodiert und in ein `Uint8Array` umgewandelt werden soll. Der String darf nur Zeichen aus dem Base64-Alphabet enthalten, das A–Z, a–z, 0–9 und zwei Sonderzeichen umfasst, die entweder `+` und `/` (bei Verwendung von `alphabet: "base64"` in `options`) oder `-` und `_` (bei Verwendung von `alphabet: "base64url"` in `options`) sind. Er kann am Ende `=`-Padding-Zeichen haben. Alle ASCII-Leerzeichen innerhalb des Strings werden ignoriert.
- `options` {{optional_inline}}
  - : Ein Objekt, das den Prozess der Interpretation des Base64-Strings anpasst. Es kann die folgenden Eigenschaften enthalten:
    - `alphabet` {{optional_inline}}
      - : Ein String, der das zu verwendende Base64-Alphabet angibt. Es kann eines der folgenden sein:
        - `"base64"` (Standard)
          - : Akzeptiert Eingaben, die mit dem Standard-Base64-Alphabet kodiert sind, welches `+` und `/` verwendet.
        - `"base64url"`
          - : Akzeptiert Eingaben, die mit dem URL-sicheren Base64-Alphabet kodiert sind, welches `-` und `_` verwendet.
    - `lastChunkHandling` {{optional_inline}}
      - : Ein String, der angibt, wie der letzte Abschnitt des Base64-Strings behandelt werden soll. Da alle 4 Zeichen in Base64 3 Bytes kodieren, wird der String in Abschnitte von 4 Zeichen unterteilt. Wenn der letzte Abschnitt weniger als 4 Zeichen hat, muss er anders behandelt werden. Es kann eines der folgenden sein:
        - `"loose"` (Standard)
          - : Der letzte Abschnitt kann entweder 2 oder 3 Base64-Zeichen oder genau 4 Zeichen lang mit `=`-Padding-Zeichen sein. Der letzte Abschnitt wird dekodiert und dem Ergebnis hinzugefügt.
        - `"strict"`
          - : Der letzte Abschnitt muss genau 4 Zeichen lang mit `=`-Padding-Zeichen sein. Darüber hinaus müssen {{Glossary("Base64#last_chunk", "Überlauf-Bits")}} (nachlaufende Bits des letzten Base64-Zeichens, die keine Daten darstellen) 0 sein. Der letzte Abschnitt wird dekodiert und dem Ergebnis hinzugefügt.
        - `"stop-before-partial"`
          - : Wenn der letzte Abschnitt genau 4 Zeichen lang mit `=`-Padding-Zeichen ist, dann wird er dekodiert und dem Ergebnis hinzugefügt. Andernfalls wird der letzte teilweise Abschnitt ignoriert (aber wenn er ein Base64-Zeichen gefolgt von einem `=` enthält, wird trotzdem ein Syntaxfehler ausgelöst). Dies ist nützlich, wenn der String aus einem Stream stammt und der letzte Abschnitt noch nicht vollständig ist. Um zu wissen, wie viele Zeichen der Eingabe gelesen wurden, verwenden Sie stattdessen {{jsxref("Uint8Array.prototype.setFromBase64()")}} (die verlinkte Seite enthält auch ein Beispiel für das Stream-Dekodieren mit `"stop-before-partial"`).

### Rückgabewert

Ein neues `Uint8Array`-Objekt, das die dekodierten Bytes aus dem Base64-kodierten String enthält.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn der Eingabestring Zeichen außerhalb des angegebenen Alphabets enthält oder der letzte Abschnitt die Option `lastChunkHandling` nicht erfüllt.
- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Der Eingabestring ist kein String.
    - Das `options`-Objekt ist kein Objekt oder `undefined`.
    - Die Optionen haben nicht die erwarteten Werte oder sind `undefined`.

## Beispiele

### Dekodieren eines Base64-Strings

Dieses Beispiel verwendet die Standardoptionen `alphabet` und `lastChunkHandling`, um einen Base64-String zu dekodieren. Beachten Sie, dass:

- Die Leerzeichen im String ignoriert werden.
- Der String 14 Base64-Zeichen hat, die keine Vielfache von 4 sind. Dies ist nur gültig und dekodierbar mit `lastChunkHandling: "loose"`.
- Der letzte Abschnitt, `Ph`, endet mit dem Zeichen `h`, das in Base64 `0b100001` ist, sodass die letzten `0001` Bits "Überlauf-Bits" sind und ignoriert werden. Dies ist nur gültig und dekodierbar mit `lastChunkHandling: "loose"`.

```js
const uint8Array = Uint8Array.fromBase64("PGI+ TURO PC9i Ph");
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Dekodieren eines URL-sicheren Base64-Strings

Dieses Beispiel verwendet die `alphabet`-Option, um einen URL-sicheren Base64-String zu dekodieren.

```js
const uint8Array = Uint8Array.fromBase64("PGI-TUROPC9iPg", {
  alphabet: "base64url",
});
console.log(uint8Array); // Uint8Array(10) [60, 98, 62, 77, 68, 78, 60, 47, 98, 62]
```

### Dekodieren eines Base64-Strings mit strenger Handhabung des letzten Abschnitts

Dieses Beispiel verwendet die `lastChunkHandling`-Option, um einen Base64-String zu dekodieren, bei dem der letzte Abschnitt genau 4 Zeichen lang mit `=`-Padding-Zeichen sein muss und die Überlauf-Bits 0 sein müssen.

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

### Dekodieren eines Base64-Strings mit partieller Handhabung des letzten Abschnitts

Dieses Beispiel verwendet die `lastChunkHandling`-Option, um einen Base64-String zu dekodieren und dabei jeden teilweisen letzten Abschnitt zu ignorieren.

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
- [es-shims Polyfill von `Uint8Array.fromBase64`](https://www.npmjs.com/package/es-arraybuffer-base64)
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
- {{jsxref("Uint8Array.prototype.toBase64()")}}
- [`Window.atob()`](/de/docs/Web/API/Window/atob)
