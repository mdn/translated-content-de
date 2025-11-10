---
title: "SyntaxError: ungültiger Dezimal-Entweih in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_decimal_escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme „ungültiger Dezimal-Entweih in regulärem Ausdruck“ tritt auf, wenn eine veraltete [oktale Entweihsequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) in einem [Unicode-bewussten](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regulären Ausdrucksmuster verwendet wird.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /\00/u: Invalid decimal escape (V8-based)
SyntaxError: invalid decimal escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid octal escape for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

In einem regulären Ausdruck ist `\0` gefolgt von einer weiteren Ziffer eine _veraltete oktale Entweihsequenz_. Die gleiche Syntax ist in Template-Strings und strikten Modus-String-Literalen verboten. In regulären Ausdrücken wird dieses Feature durch den Unicode-bewussten Modus (`u` und `v`) deaktiviert. `\0`, das _nicht_ von einer weiteren Ziffer gefolgt wird, ist eine gültige Entweihsequenz, die das Nullzeichen (U+0000) darstellt.

`\` gefolgt von einer von Null verschiedenen Ziffer ist ein [Backreference](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) und ist im Unicode-bewussten Modus ungültig, wenn es sich nicht auf eine erfassende Gruppe bezieht; siehe [ungültiger Identitätsentweih](/de/docs/Web/JavaScript/Reference/Errors/Regex_invalid_identity_escape) für weitere Informationen.

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
- [Entweihsequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
- [Zeichenentweih: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
