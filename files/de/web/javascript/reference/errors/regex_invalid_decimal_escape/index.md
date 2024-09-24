---
title: "SyntaxError: ungültiger Dezimal-Entkomma in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_decimal_escape
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiger Dezimal-Entkomma in regulärem Ausdruck" tritt auf, wenn eine veraltete [Oktal-Entkomma-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) in einem [unicode-bewussten](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regulären Ausdrucksmuster verwendet wird.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /\00/u: Invalid decimal escape (V8-based)
SyntaxError: invalid decimal escape in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid octal escape for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

In einem regulären Ausdruck ist `\0`, gefolgt von einer weiteren Ziffer, eine _veraltete Oktal-Entkomma-Sequenz_. Die gleiche Syntax ist in Vorlagen-Strings und strikten String-Literalen verboten. In Regexes ist dieses Feature in den unicode-bewussten Modi (`u` und `v`) deaktiviert. `\0`, _nicht_ gefolgt von einer weiteren Ziffer, ist eine gültige Entkomma-Sequenz, die das Null-Zeichen (U+0000) darstellt.

`\` gefolgt von einer Ziffer ungleich null ist ein [Backreferenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) und ist im unicode-bewussten Modus ungültig, wenn es sich nicht auf eine Erfassungsgruppe bezieht; siehe [ungültiger Identitätsentkomma](/de/docs/Web/JavaScript/Reference/Errors/Regex_invalid_identity_escape) für weitere Informationen.

## Beispiele

### Ungültige Fälle

```js example-bad
/\00/u;
/\01/u;
```

### Gültige Fälle

```js example-good
// Wenn Sie NULL gefolgt von einer Ziffer erfassen möchten, verwenden Sie eine Zeichenklasse
/[\0]0/u;
// Wenn Sie ein Zeichen nach seinem Zeichenwert erfassen möchten, verwenden Sie \x
/\x01/u;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Entkomma-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences)
- [Zeichenentkomma: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
