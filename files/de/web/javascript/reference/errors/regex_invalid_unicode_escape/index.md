---
title: "SyntaxError: invalid unicode escape in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_unicode_escape
l10n:
  sourceCommit: 977386fc14a76dec21374aef1e0571900b28dab4
---

Die JavaScript-Ausnahme „invalid unicode escape in regular expression“ tritt auf, wenn auf `\c` und `\u` als [Zeichen-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) keine gültigen Zeichen folgen.

## Meldung

```plain
SyntaxError: Invalid regular expression: /\u{123456}/u: Invalid Unicode escape (V8-based)
SyntaxError: invalid unicode escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid Unicode code point \u{} escape (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) muss auf die [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) `\c` ein Buchstabe von `A` bis `Z` oder von `a` bis `z` folgen. Auf die Escape-Sequenz `\u` müssen entweder 4 Hexadezimalziffern oder 1 bis 6 Hexadezimalziffern in geschweiften Klammern (`{}`) folgen. Bei der Escape-Sequenz `\u{xxx}` müssen die Ziffern außerdem einen gültigen Unicode-Codepunkt darstellen. Sein Wert darf also `10FFFF` nicht überschreiten.

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
- [Zeichen-Escape-Sequenz: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
