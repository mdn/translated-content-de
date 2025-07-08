---
title: "SyntaxError: ungültiger benannter Rückverweis in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_named_capture_reference
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "ungültiger benannter Rückverweis in regulärem Ausdruck" tritt auf, wenn ein regulärer Ausdruck ein [benannter Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) enthält, der sich nicht auf eine zuvor definierte [benannte Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) bezieht. Eine ähnliche Fehlermeldung "ungültiger benannter Verweis in regulärem Ausdruck" wird angezeigt, wenn die Sequenz `\k` erkannt wird, aber nicht von `<` gefolgt wird.

## Meldung

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

Sie verwenden die Escape-Sequenz `\k`, die als [benannter Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) interpretiert wird, aber das `\k` ist entweder syntaktisch ungültig oder bezieht sich nicht auf eine benannte Gruppe im Muster.

`\k` beginnt nur dann einen benannten Rückverweis, wenn das Muster eine [benannte Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) enthält oder wenn das Muster [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist; andernfalls ist es ein [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) für das Zeichen `k`.

## Beispiele

### Ungültige Fälle

```js example-bad
/\k<x>/u; // Does not refer to a named capture group
/(?<x>.+)\k<y>/u; // Does not refer to an existing named capture group
/(?<x>.+)\k{x}/u; // Invalid syntax
```

### Gültige Fälle

```js example-good
/(?<x>.+)\k<x>/u; // Refers to an existing named capture group
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
