---
title: "SyntaxError: invalid regexp group"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_group
l10n:
  sourceCommit: 611b4528a321b0ab346166ec9afdaaaebeb018ab
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "invalid regexp group" tritt auf, wenn die Sequenz `(?` keine gültige Gruppensyntax beginnt. Anerkannte Gruppensyntaxen, die mit `(?` beginnen, sind:

- `(?:` für [nicht-erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- `(?=` für [positives Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- `(?!` für negatives Lookahead
- `(?<=` für [positives Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- `(?<!` für negatives Lookbehind
- `(?<` für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- `(?-i:`, `(?i:`, `(?m:`, `(?ims-:`, etc. für [Modifikatoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)

`(?` gefolgt von einem anderen Zeichen würde diesen Fehler verursachen.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /(?1)/: Invalid group (V8-based)
SyntaxError: invalid regexp group (Firefox)
SyntaxError: Invalid regular expression: unrecognized character after (? (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

`?` ist kein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms), daher ergibt es keinen Sinn, dass es am Anfang einer [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) steht (`?` ist ein [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) und sollte nach einem Atom platziert werden). Vielleicht möchten Sie das `?`-Zeichen wörtlich erfassen, in welchem Fall Sie es mit einem Backslash (`\?`) escapen sollten. Vielleicht erinnern Sie sich an die Regex-Syntax falsch und möchten eine der oben aufgeführten anerkannten Gruppensyntaxen verwenden. Vielleicht nutzen Sie ein Feature, das von der aktuellen JavaScript-Engine nicht unterstützt wird.

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
