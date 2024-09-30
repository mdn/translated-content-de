---
title: "SyntaxError: ungültige benannte Referenz in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_named_capture_reference
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültige benannte Referenz in regulärem Ausdruck" tritt auf, wenn ein reguläres Ausdrucksmuster eine [benannte Rückreferenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) enthält, die sich nicht auf eine [benannte Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) davor bezieht. Die ähnliche Fehlermeldung "ungültige benannte Referenz in regulärem Ausdruck" wird ausgegeben, wenn die Sequenz `\k` erkannt wird, jedoch nicht von `<` gefolgt wird.

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

Sie verwenden die Escape-Sequenz `\k`, die als [benannte Rückreferenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) interpretiert wird. Die `\k` ist jedoch entweder syntaktisch ungültig oder bezieht sich nicht auf eine benannte Erfassungsgruppe im Muster.

`\k` startet nur eine benannte Rückreferenz, wenn das Muster eine [benannte Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) enthält oder wenn das Muster [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist; andernfalls ist es eine [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) für das Zeichen `k`.

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
- [Benannte Rückreferenz: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
