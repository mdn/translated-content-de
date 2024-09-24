---
title: "SyntaxError: Oktale Escape-Sequenzen können in ungetaggten Template-Literalen oder im Strict-Modus-Code nicht verwendet werden"
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Oktale Escape-Sequenzen können in ungetaggten Template-Literalen oder im Strict-Modus-Code nicht verwendet werden" tritt auf, wenn oktale Escape-Sequenzen in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) Zeichenfolgenliteralen oder ungetaggten Template-Literalen verwendet werden.

## Meldung

```plain
SyntaxError: Octal escape sequences are not allowed in strict mode. (V8-based)
SyntaxError: \8 and \9 are not allowed in strict mode. (V8-based)
SyntaxError: Octal escape sequences are not allowed in template strings. (V8-based)
SyntaxError: \8 and \9 are not allowed in template strings. (V8-based)
SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code (Firefox)
SyntaxError: the escapes \8 and \9 can't be used in untagged template literals or in strict mode code (Firefox)
SyntaxError: The only valid numeric escape in strict mode is '\0' (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [Zeichenfolgen-Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in der Form `\`, gefolgt von einer beliebigen Anzahl von Ziffern, außer einer einzelnen `0`, ist veraltet. Wenn Sie ein Zeichen durch seinen Codepunkt-Wert darstellen möchten, sollten Sie stattdessen die Escape-Sequenz `\x` oder `\u` verwenden, wie beispielsweise `\x01` oder `\u0001` anstelle von `\1`.

[Ungetaggte Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) dürfen niemals oktale Escape-Sequenzen enthalten, unabhängig davon, ob sie sich im Strict Mode befinden oder nicht. _Getaggte_ Template-Literale hingegen können jede Form von Escape-Sequenzen enthalten und führen dazu, dass das von der Tag-Funktion empfangene Template-Array `undefined` enthält.

## Beispiele

### Oktale Escape-Sequenzen

```js-nolint example-bad
"use strict";

"\251";

// SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code
```

### Gültige Oktalzahlen

Für oktale Escape-Sequenzen können Sie stattdessen hexadezimale Escape-Sequenzen verwenden:

```js example-good
"\xA9";
```

Wenn Sie Quelltext wörtlich darstellen möchten, ohne eine Escape-Sequenz zu interpretieren, verwenden Sie {{jsxref("String.raw")}}:

```js example-good
String.raw`\251`; // Ein String, der vier Zeichen enthält
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences)
