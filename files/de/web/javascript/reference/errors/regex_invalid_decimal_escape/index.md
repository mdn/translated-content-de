---
title: "SyntaxError: ungültiger Dezimal-Escape in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_decimal_escape
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiger Dezimal-Escape in regulärem Ausdruck" tritt auf, wenn eine veraltete [oktale Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) in einem [Unicode-bewussten](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regulären Ausdrucksmuster verwendet wird.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /\00/u: Invalid decimal escape (V8-based)
SyntaxError: invalid decimal escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid octal escape for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

In einem regulären Ausdruck ist `\0`, gefolgt von einer weiteren Ziffer, eine _veraltete oktale Escape-Sequenz_. Die gleiche Syntax ist in Template-Strings und strikten Modus-String-Literalen verboten. In Regexen wird diese Funktion in den Unicode-bewussten Modi (`u` und `v`) deaktiviert. `\0`, das _nicht_ von einer weiteren Ziffer gefolgt wird, ist eine gültige Escape-Sequenz, die das NULL-Zeichen (U+0000) darstellt.

`\` gefolgt von einer nicht-null Ziffer ist ein [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) und ist im Unicode-bewussten Modus ungültig, wenn er sich nicht auf eine erfassende Gruppe bezieht; siehe [ungültige Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Errors/Regex_invalid_identity_escape) für weitere Informationen.

## Beispiele

### Ungültige Fälle

```js example-bad
/\00/u;
/\01/u;
```

### Gültige Fälle

```js example-good
// If you want to match NULL followed by a digit, use a character class
/[\0]0/u;
// If you want to match a character by its character value, use \x
/\x01/u;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
