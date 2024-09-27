---
title: "SyntaxError: invalid regexp group"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_group
l10n:
  sourceCommit: 611b4528a321b0ab346166ec9afdaaaebeb018ab
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "invalid regexp group" tritt auf, wenn die Sequenz `(?` keine gültige Gruppensyntax einleitet. Anerkannte Gruppensyntaxen, die mit `(?` beginnen, sind:

- `(?:` für [non-capturing groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- `(?=` für [positive lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- `(?!` für negative lookahead
- `(?<=` für [positive lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- `(?<!` für negative lookbehind
- `(?<` für [named capturing groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- `(?-i:`, `(?i:`, `(?m:`, `(?ims-:`, etc. für [modifiers](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)

`(?` gefolgt von einem anderen Zeichen würde diesen Fehler verursachen.

## Meldung

```plain
SyntaxError: Invalid regular expression: /(?1)/: Invalid group (V8-based)
SyntaxError: invalid regexp group (Firefox)
SyntaxError: Invalid regular expression: unrecognized character after (? (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

`?` ist kein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms), daher macht es keinen Sinn, dass es am Anfang einer [capturing group](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) erscheint (`?` ist ein [quantifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) und sollte nach einem Atom platziert werden). Vielleicht möchten Sie das Zeichen `?` wörtlich übereinstimmen, in diesem Fall sollten Sie es mit einem Rückwärtsschrägstrich (`\?`) escapen. Vielleicht haben Sie sich an die Regex-Syntax falsch erinnert und wollten eine der anerkannten Gruppensyntaxen oben verwenden. Vielleicht verwenden Sie ein Feature, das von der aktuellen JavaScript-Engine nicht unterstützt wird.

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
- [Capturing group: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modifier: `(?ims-ims:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Named capturing group: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Non-capturing group: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
