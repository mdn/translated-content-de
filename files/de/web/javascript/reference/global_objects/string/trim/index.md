---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`trim()`** Methode von {{jsxref("String")}} Werten entfernt Leerzeichen von beiden Enden dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu ändern.

Um einen neuen String zurückzugeben, der nur an einem Ende beschnitten ist, verwenden Sie {{jsxref("String/trimStart", "trimStart()")}} oder {{jsxref("String/trimEnd", "trimEnd()")}}.

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## Syntax

```js-nolint
trim()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der `str` darstellt und Leerzeichen von beiden Enden entfernt hat. Leerzeichen werden als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) Zeichen plus [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) definiert.

Wenn weder der Anfang noch das Ende von `str` Leerzeichen hat, wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

## Beispiele

### Verwendung von trim()

Das folgende Beispiel entfernt Leerzeichen von beiden Enden von `str`.

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
