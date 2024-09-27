---
title: "SyntaxError: nothing to repeat"
slug: Web/JavaScript/Reference/Errors/Regex_nothing_to_repeat
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "nothing to repeat" oder "invalid quantifier in regular expression" tritt auf, wenn ein [Quantifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) in einem regulären Ausdruck auf nichts angewendet wird oder auf eine [Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet wird.

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

[Quantifiers](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden verwendet, um anzugeben, wie oft ein Zeichen oder eine Gruppe von Zeichen in einem regulären Ausdruck erscheinen kann. Zum Beispiel passt `a{3}` genau dreimal auf das Zeichen `a`. Wenn also das Element, das dem Quantifier vorausgeht, nichts ist, das Zeichen übereinstimmt, ist der Quantifier ungültig. Beispielsweise: Quantifiers am Anfang einer [capturing group](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), am Anfang einer [disjunction alternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction), etc., können nichts wiederholen. [Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) konsumieren keine Zeichen, daher macht es auch keinen Sinn, sie zu wiederholen.

Im [Unicode-unaware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) gibt es eine veraltete Syntax, die es erlaubt, [lookahead assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) zu quantifizieren. Diese Syntax ist veraltet und sollte nicht verwendet werden.

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
