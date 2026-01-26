---
title: SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "oktale Escape-Sequenzen können nicht in ungetaggten Template-Literalen oder in Strict-Modus-Code verwendet werden" tritt auf, wenn oktale Escape-Sequenzen in [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) String-Literalen oder ungetaggten Template-Literalen verwendet werden.

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

Die [String-Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in der Form `\` gefolgt von einer beliebigen Anzahl von Ziffern, mit Ausnahme einer einzelnen `0`, ist veraltet. Wenn Sie ein Zeichen durch seinen Codepunkt-Wert darstellen möchten, sollten Sie stattdessen die `\x` oder `\u` Escape-Sequenz verwenden, z.B. `\x01` oder `\u0001` anstelle von `\1`.

[Ungetaggte Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) dürfen niemals oktale Escape-Sequenzen enthalten, unabhängig davon, ob im Strict-Modus oder nicht. _Getaggte_ Template-Literale können jedoch jede Form von Escape-Sequenz enthalten und bewirken, dass das von der Tag-Funktion empfangene Template-Array `undefined` enthält.

## Beispiele

### Oktale Escape-Sequenzen

```js-nolint example-bad
"use strict";

"\251";

// SyntaxError: octal escape sequences can't be used in untagged template literals or in strict mode code
```

### Gültige oktale Zahlen

Für oktale Escape-Sequenzen können Sie stattdessen hexadezimale Escape-Sequenzen verwenden:

```js example-good
"\xA9";
```

Wenn Sie Quelltext wörtlich darstellen möchten, ohne eine Escape-Sequenz zu interpretieren, verwenden Sie {{jsxref("String.raw")}}:

```js example-good
String.raw`\251`; // A string containing four characters
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences)
