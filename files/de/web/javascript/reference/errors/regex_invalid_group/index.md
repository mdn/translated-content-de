---
title: "SyntaxError: ungültige Regexp-Gruppe"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_group
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "ungültige Regexp-Gruppe" tritt auf, wenn die Sequenz `(?` keine gültige Gruppensyntax einleitet. Anerkannte Gruppensyntaxen, die mit `(?` beginnen, sind:

- `(?:` für [nicht-erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- `(?=` für [positives Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- `(?!` für negatives Lookahead
- `(?<=` für [positives Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- `(?<!` für negatives Lookbehind
- `(?<` für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- `(?-i:`, `(?i:`, `(?m:`, `(?ims-:`, etc. für [Modifikatoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)

`(?` gefolgt von einem anderen Zeichen würde diesen Fehler hervorrufen.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /(?1)/: Invalid group (V8-based)
SyntaxError: invalid regexp group (Firefox)
SyntaxError: Invalid regular expression: unrecognized character after (? (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

`?` ist kein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms), daher ist es unlogisch, es am Anfang einer [Erfassungseinheit](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) erscheinen zu lassen (`?` ist ein [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) und sollte nach einem Atom platziert werden). Vielleicht möchten Sie das `?`-Zeichen wörtlich erfassen, in diesem Fall sollten Sie es mit einem Rückwärtsschrägstrich (`\?`) maskieren. Vielleicht haben Sie die Regex-Syntax falsch in Erinnerung und beabsichtigen, eine der oben aufgeführten anerkannten Gruppensyntaxen zu verwenden. Vielleicht verwenden Sie ein Feature, das von der aktuellen JavaScript-Engine nicht unterstützt wird.

## Beispiele

### Ungültige Fälle

```js example-bad
/Hello(?|!)/;
// This is Perl syntax
/(?[\p{Thai}&\p{Digit}])/;
```

### Gültige Fälle

```js example-good
/Hello(\?|!)/;
// This is JavaScript syntax for character set operations
/[\p{Thai}&&\p{Digit}]/v;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modifikator: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
