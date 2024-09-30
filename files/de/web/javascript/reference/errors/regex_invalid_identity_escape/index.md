---
title: "SyntaxError: ungültige Identitätsflucht in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_identity_escape
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültige Identitätsflucht in regulärem Ausdruck" tritt auf, wenn ein [Unicode-bewusstes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) reguläres Ausdrucksmuster eine [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) enthält, die keine anerkannte Escape-Sequenz darstellt.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /\q/u: Invalid escape (V8-based)
SyntaxError: invalid identity escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid escaped character for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im Unicode-unbewussten Modus konnte `\` verwendet werden, um jedes Zeichen zu maskieren, einschließlich solcher ohne definierte Bedeutung. In diesen Fällen repräsentiert das maskierte Zeichen sich selbst. Zum Beispiel würde `\q` das Zeichen `q` abgleichen. Dies beschränkt die Möglichkeit, in Zukunft neue Escape-Sequenzen hinzuzufügen, erheblich, daher sind im Unicode-bewussten Modus nur anerkannte Escape-Sequenzen erlaubt. Fügen Sie `\` nicht überflüssig hinzu.

Dieser Fehler wird auch ausgelöst, wenn das `\x` [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) nicht von zwei hexadezimalen Ziffern gefolgt wird.

Für eine vollständige Liste der verfügbaren Escape-Sequenzen siehe das [Referenzdokument zu regulären Ausdrücken](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences). Für eine Tabelle, welche Zeichen in jedem Kontext wörtlich maskiert oder unmaskiert erscheinen können, siehe [wörtliche Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character).

## Beispiele

### Ungültige Fälle

```js example-bad
/[\f\v\n\t\ ]/u;
```

### Gültige Fälle

```js example-good
// There's no need to escape the space
/[\f\v\n\t ]/u;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
- [Zeichenescape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Wörtliches Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
