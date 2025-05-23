---
title: "SyntaxError: ungültiger Unicode-Escape in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_unicode_escape
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiger Unicode-Escape in regulärem Ausdruck" tritt auf, wenn die `\c` und `\u` [Zeichen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) nicht von gültigen Zeichen gefolgt werden.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /\u{123456}/u: Invalid Unicode escape (V8-based)
SyntaxError: invalid unicode escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid Unicode code point \u{} escape (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im [Unicode-affinen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) Modus muss die `\c` [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) von einem Buchstaben von `A` bis `Z` oder `a` bis `z` gefolgt werden, und die `\u` Escape-Sequenz muss entweder von 4 hexadezimalen Ziffern oder von 1 bis 6 hexadezimalen Ziffern, die in geschweifte Klammern (`{}`) eingeschlossen sind, gefolgt werden. Außerdem müssen bei der Verwendung der `\u{xxx}` Escape-Sequenz die Ziffern einen gültigen Unicode-Codepunkt darstellen, was bedeutet, dass sein Wert `10FFFF` nicht überschreiten darf.

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
