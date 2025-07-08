---
title: "SyntaxError: nothing to repeat"
slug: Web/JavaScript/Reference/Errors/Regex_nothing_to_repeat
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "nothing to repeat" oder "invalid quantifier in regular expression" tritt auf, wenn ein [Quantifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) in einem regulären Ausdruck auf nichts angewendet wird oder auf eine [Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet wird.

## Nachricht

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

[Quantifiers](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden verwendet, um anzugeben, wie oft ein Zeichen oder eine Gruppe von Zeichen in einem regulären Ausdruck erscheinen kann. Zum Beispiel, `a{3}` entspricht dem Zeichen `a` genau dreimal. Daher ist der Quantifier ungültig, wenn das, was dem Quantifier vorausgeht, nichts ist, das Zeichen entspricht. Zum Beispiel: Quantifiers am Anfang einer [capturing group](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), am Anfang einer [disjunction alternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction), usw., können nichts wiederholen. [Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) verbrauchen keine Zeichen, daher macht es auch keinen Sinn, sie zu wiederholen.

Im [Unicode-unaware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) gibt es eine veraltete Syntax, die es erlaubt, die [lookahead assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) zu quantifizieren. Dies ist eine veraltete Syntax und Sie sollten sich nicht darauf verlassen.

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
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
