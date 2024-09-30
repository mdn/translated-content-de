---
title: "SyntaxError: Oktale Escape-Sequenzen können nicht in nicht-getaggten Vorlagenliteralen oder im Strict Mode-Code verwendet werden"
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_escape_sequence
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Oktale Escape-Sequenzen können nicht in nicht-getaggten Vorlagenliteralen oder im Strict Mode-Code verwendet werden" tritt auf, wenn oktale Escape-Sequenzen in [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) Zeichenfolgenliteralen oder nicht-getaggten Vorlagenliteralen verwendet werden.

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

## Was ist schiefgelaufen?

Die [Zeichenfolgen-Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences) der Form `\`, gefolgt von einer beliebigen Anzahl von Ziffern, außer einer einzelnen `0`, ist veraltet. Wenn Sie ein Zeichen durch seinen Codepunkt-Wert darstellen möchten, sollten Sie stattdessen die `\x` oder `\u` Escape-Sequenz verwenden, wie z.B. `\x01` oder `\u0001` statt `\1`.

[Nicht-getaggte Vorlagenliterale](/de/docs/Web/JavaScript/Reference/Template_literals) dürfen niemals oktale Escape-Sequenzen enthalten, weder im Strict Mode noch sonst. _Getaggte_ Vorlagenliterale können jedoch jede Form von Escape-Sequenzen enthalten, und dies führt dazu, dass das Vorlagen-Array, das von der Tag-Funktion empfangen wird, `undefined` enthält.

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

Wenn Sie einen Quelltext buchstäblich darstellen möchten, ohne irgendeine Escape-Sequenz zu interpretieren, verwenden Sie {{jsxref("String.raw")}}:

```js example-good
String.raw`\251`; // A string containing four characters
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences)
