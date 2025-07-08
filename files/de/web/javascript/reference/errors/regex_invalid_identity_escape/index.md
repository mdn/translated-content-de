---
title: "SyntaxError: ungültige Identitäts-Escape-Sequenz im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_identity_escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "ungültige Identitäts-Escape-Sequenz im regulären Ausdruck" tritt auf, wenn ein [Unicode-bewusstes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) reguläres Ausdrucksmuster eine [Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) enthält, die keine anerkannte Escape-Sequenz darstellt.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /\q/u: Invalid escape (V8-based)
SyntaxError: invalid identity escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid escaped character for Unicode pattern (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im Unicode-unbewussten Modus konnte `\` verwendet werden, um jedes Zeichen zu escapen, einschließlich solcher ohne definierte Bedeutung. In diesen Fällen repräsentiert das escapte Zeichen sich selbst. Zum Beispiel würde `\q` das Zeichen `q` matchen. Dies schränkt die Möglichkeit ein, in der Zukunft neue Escape-Sequenzen hinzuzufügen. Daher sind im Unicode-bewussten Modus nur anerkannte Escape-Sequenzen erlaubt. Fügen Sie `\` nicht redundant hinzu.

Dieser Fehler wird auch ausgelöst, wenn das `\x` [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) nicht von zwei hexadezimalen Ziffern gefolgt wird.

Eine umfassende Liste der verfügbaren Escape-Sequenzen finden Sie im [Referenzdokument für reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences). Für eine Tabelle, welche Zeichen in welchem Kontext wörtlich escapen oder unescapen sein können, siehe [wörtliche Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character).

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
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Wörtliches Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
