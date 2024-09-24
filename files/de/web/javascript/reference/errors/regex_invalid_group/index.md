---
title: "SyntaxError: ungültige Regexp-Gruppe"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_group
l10n:
  sourceCommit: 611b4528a321b0ab346166ec9afdaaaebeb018ab
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "invalid regexp group" tritt auf, wenn die Sequenz `(?` keine gültige Gruppensyntax einleitet. Anerkannte Gruppensyntaxen, die mit `(?` beginnen, umfassen:

- `(?:` für [nicht erfasste Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- `(?=` für [positiven Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- `(?!` für negativen Lookahead
- `(?<=` für [positiven Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- `(?<!` für negativen Lookbehind
- `(?<` für [benannte erfasste Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- `(?-i:`, `(?i:`, `(?m:`, `(?ims-:`, usw. für [Modifikatoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)

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

`?` ist kein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms), daher macht es keinen Sinn, am Anfang einer [erfassten Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) zu erscheinen (`?` ist ein [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) und sollte nach einem Atom platziert werden). Vielleicht möchten Sie das `?`-Zeichen wörtlich abgleichen. In diesem Fall sollten Sie es mit einem Backslash (`\?`) escapen. Vielleicht haben Sie die Regex-Syntax falsch in Erinnerung und beabsichtigen, eine der oben aufgeführten erkannten Gruppensyntaxen zu verwenden. Vielleicht verwenden Sie ein Feature, das von der aktuellen JavaScript-Engine nicht unterstützt wird.

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
- [Erfasste Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Lookahead Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modifikator: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Benannte erfasste Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Nicht erfasste Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
