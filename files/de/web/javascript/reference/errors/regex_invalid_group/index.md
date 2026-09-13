---
title: "SyntaxError: invalid regexp group"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_group
l10n:
  sourceCommit: a055fad7a07ef41ec3c8f90a3f1d2ad65f22826c
---

Der JavaScript-Ausnahmefehler "invalid regexp group" tritt auf, wenn die Sequenz `(?` keine gültige Gruppensyntax einleitet. Anerkannte Gruppensyntaxen, die mit `(?` beginnen, sind:

- `(?:` für [nicht erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- `(?=` für [positives Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- `(?!` für negatives Lookahead
- `(?<=` für [positives Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- `(?<!` für negatives Lookbehind
- `(?<` für [benannte erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
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

## Was schief gelaufen ist

`?` ist kein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms), daher ergibt es keinen Sinn, es am Anfang einer [erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) zu verwenden (`?` ist ein [Quantifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) und sollte nach einem Atom platziert werden). Vielleicht möchten Sie das `?`-Zeichen buchstäblich erfassen, in diesem Fall sollten Sie es mit einem Backslash maskieren (`\?`). Vielleicht haben Sie die RegExp-Syntax falsch in Erinnerung und beabsichtigen, eine der oben aufgeführten anerkannten Gruppensyntaxen zu verwenden. Vielleicht verwenden Sie eine Funktion, die vom aktuellen JavaScript-Engine nicht unterstützt wird.

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
/[\p{Script=Thai}&&\p{Nd}]/v;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Lookahead Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modifikator: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
