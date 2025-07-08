---
title: "SyntaxError: ungültige Unicode-Escape-Sequenz im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_unicode_escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "ungültige Unicode-Escape-Sequenz im regulären Ausdruck" tritt auf, wenn die `\c`- und `\u`-[Zeichen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) nicht von gültigen Zeichen gefolgt werden.

## Meldung

```plain
SyntaxError: Invalid regular expression: /\u{123456}/u: Invalid Unicode escape (V8-based)
SyntaxError: invalid unicode escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid Unicode code point \u{} escape (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) muss die `\c`-[Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) von einem Buchstaben aus dem Bereich `A` bis `Z` oder `a` bis `z` gefolgt werden, und die `\u`-Escape-Sequenz muss entweder von 4 hexadezimalen Ziffern oder 1 bis 6 hexadezimalen Ziffern, eingeschlossen in geschweifte Klammern (`{}`), gefolgt werden. Darüber hinaus müssen bei der Verwendung der `\u{xxx}`-Escape-Sequenz die Ziffern einen gültigen Unicode-Codepunkt darstellen, was bedeutet, dass der Wert `10FFFF` nicht überschreiten darf.

## Beispiele

### Ungültige Fälle

```js example-bad
/\u{123456}/u; // Unicode code point is too large
/\u65/u; // Not enough digits
/\c1/u; // Not a letter
```

### Gültige Fälle

```js example-good
/\u0065/u; // Lowercase "e"
/\u{1f600}/u; // Grinning face emoji
/\cA/u; // U+0001 (Start of Heading)
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
