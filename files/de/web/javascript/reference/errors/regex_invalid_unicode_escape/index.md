---
title: "SyntaxError: ungültige Unicode-Escape-Sequenz in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_unicode_escape
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "ungültige Unicode-Escape-Sequenz in regulärem Ausdruck" tritt auf, wenn die `\c`- und `\u`-[Zeichen-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) nicht von gültigen Zeichen gefolgt werden.

## Meldung

```plain
SyntaxError: Invalid regular expression: /\u{123456}/u: Invalid Unicode escape (V8-based)
SyntaxError: invalid unicode escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid Unicode code point \u{} escape (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im [Unicode-fähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) muss die `\c`-[Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) von einem Buchstaben von `A` bis `Z` oder `a` bis `z` gefolgt werden, und die `\u`-Escape-Sequenz muss entweder von 4 hexadezimalen Ziffern oder von 1 bis 6 hexadezimalen Ziffern, die in geschweifte Klammern (`{}`) eingeschlossen sind, gefolgt werden. Außerdem müssen bei Verwendung der `\u{xxx}`-Escape-Sequenz die Ziffern einen gültigen Unicode-Codepunkt darstellen, was bedeutet, dass dessen Wert nicht `10FFFF` überschreiten darf.

## Beispiele

### Ungültige Fälle

```js example-bad
/\u{123456}/u; // Unicode-Codepunkt ist zu groß
/\u65/u; // Nicht genug Ziffern
/\c1/u; // Kein Buchstabe
```

### Gültige Fälle

```js example-good
/\u0065/u; // Kleinbuchstabe "e"
/\u{1F600}/u; // Grinsendes Gesicht Emoji
/\cA/u; // U+0001 (Start des Headers)
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
