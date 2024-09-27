---
title: "SyntaxError: Oktale Escape-Sequenzen können nicht in ungetaggten Template-Strings oder im Strict Mode verwendet werden"
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Oktale Escape-Sequenzen können nicht in ungetaggten Template-Strings oder im Strict Mode verwendet werden" tritt auf, wenn oktale Escape-Sequenzen in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-String-Literalen oder ungetaggten Template-Strings verwendet werden.

## Nachricht

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

## Was schief gelaufen ist

Die [String-Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) in der Form von `\` gefolgt von beliebig vielen Ziffern, außer einer einzelnen `0`, ist veraltet. Wenn Sie ein Zeichen durch seinen Codepunktwert darstellen möchten, sollten Sie stattdessen die Escape-Sequenz `\x` oder `\u` verwenden, wie `\x01` oder `\u0001` anstelle von `\1`.

[Ungetaggte Template-Strings](/de/docs/Web/JavaScript/Reference/Template_literals) dürfen niemals oktale Escape-Sequenzen enthalten, unabhängig davon, ob im Strict Mode oder nicht. Allerdings können _getaggte_ Template-Strings jede Form von Escape-Sequenz enthalten, was dazu führt, dass das Template-Array, das von der Tag-Funktion empfangen wird, `undefined` enthält.

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

Wenn Sie einen Quelltext buchstäblich ohne Interpretation von Escape-Sequenzen darstellen möchten, verwenden Sie {{jsxref("String.raw")}}:

```js example-good
String.raw`\251`; // A string containing four characters
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences)
