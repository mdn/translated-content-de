---
title: String.prototype.trim()
short-title: trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: 870fe25a3e6ed1a44222c52dd8a992b731c1a383
---

Die Methode **`trim()`** von {{jsxref("String")}}-Werten entfernt Leerraum an beiden Enden dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern.

Um einen neuen String zurückzugeben, bei dem Leerraum nur an einem Ende entfernt wurde, verwenden Sie {{jsxref("String/trimStart", "trimStart()")}} oder {{jsxref("String/trimEnd", "trimEnd()")}}.

{{InteractiveExample("JavaScript Demo: String.prototype.trim()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
```

## Syntax

```js-nolint
trim()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der `str` darstellt, nachdem Leerraum sowohl am Anfang als auch am Ende entfernt wurde. Leerraum ist definiert als [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn weder am Anfang noch am Ende von `str` Leerraum vorhanden ist, wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

## Beispiele

### Verwendung von trim()

Das folgende Beispiel entfernt Leerraum an beiden Enden von `str`.

```js
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
