---
title: "SyntaxError: ungültiger benannter Rückverweis in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_named_capture_reference
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "invalid named capture reference in regular expression" tritt auf, wenn ein regulärer Ausdruck ein [benannter Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) enthält, der sich nicht auf eine [benannte Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) davor bezieht. Die ähnliche Fehlermeldung "invalid named reference in regular expression" wird ausgelöst, wenn die Sequenz `\k` auftritt, die jedoch nicht von `<` gefolgt wird.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /\k<x>/u: Invalid named capture referenced (V8-based)
SyntaxError: invalid named capture reference in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid \k<> named backreference (Safari)

SyntaxError: Invalid regular expression: /\k/u: Invalid named reference (V8-based)
SyntaxError: invalid named reference in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid escaped character for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Sie verwenden die Escape-Sequenz `\k`, die als [benannter Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) interpretiert wird, aber das `\k` ist entweder syntaktisch ungültig oder verweist nicht auf eine benannte Erfassungsgruppe im Muster.

`\k` beginnt nur dann einen benannten Rückverweis, wenn das Muster eine [benannte Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) enthält oder wenn das Muster [Unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist; andernfalls ist es eine [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) für das Zeichen `k`.

## Beispiele

### Ungültige Fälle

```js example-bad
/\k<x>/u; // Verweist nicht auf eine benannte Erfassungsgruppe
/(?<x>.+)\k<y>/u; // Verweist nicht auf eine vorhandene benannte Erfassungsgruppe
/(?<x>.+)\k{x}/u; // Ungültige Syntax
```

### Gültige Fälle

```js example-good
/(?<x>.+)\k<x>/u; // Verweist auf eine vorhandene benannte Erfassungsgruppe
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
