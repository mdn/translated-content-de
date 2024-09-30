---
title: "SyntaxError: nothing to repeat"
slug: Web/JavaScript/Reference/Errors/Regex_nothing_to_repeat
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "nothing to repeat" oder "invalid quantifier in regular expression" tritt auf, wenn ein [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) in einem regulären Ausdruck auf nichts angewandt wird oder auf eine [Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewandt wird.

## Meldung

```plain
SyntaxError: Invalid regular expression: /\b+/: Nothing to repeat (V8-based)
SyntaxError: Invalid regular expression: /(?=)+/u: Invalid quantifier (V8-based)
SyntaxError: nothing to repeat (Firefox)
SyntaxError: invalid quantifier in regular expression (Firefox)
SyntaxError: Invalid regular expression: nothing to repeat (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

[Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden verwendet, um anzugeben, wie oft ein Zeichen oder eine Gruppe von Zeichen in einem regulären Ausdruck erscheinen kann. Zum Beispiel entspricht `a{3}` dem Zeichen `a` genau dreimal. Wenn also das, was dem Quantifizierer vorausgeht, nichts ist, das Zeichen übereinstimmt, ist der Quantifizierer ungültig. Zum Beispiel: Quantifizierer am Anfang einer [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), am Anfang einer [Disjunktionsalternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction), usw., können nichts wiederholen. [Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) konsumieren keine Zeichen, daher macht es auch keinen Sinn, sie zu wiederholen.

Im [Unicode-unaware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) gibt es eine veraltete Syntax, die es zulässt, dass [Lookahead-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) quantifiziert werden. Dies ist eine veraltete Syntax und Sie sollten sich nicht darauf verlassen.

## Beispiele

### Ungültige Fälle

```js example-bad
/\b+/; // \b is a word boundary assertion, it doesn't consume characters
/(*hello*)/;
```

### Gültige Fälle

```js example-good
/b+/; // b is a character, it can be repeated
/(\*hello\*)/; // Escape the asterisks to match them literally
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
