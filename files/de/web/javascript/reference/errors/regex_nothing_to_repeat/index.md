---
title: "SyntaxError: Nichts zu wiederholen"
slug: Web/JavaScript/Reference/Errors/Regex_nothing_to_repeat
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "nothing to repeat" oder "invalid quantifier in regular expression" tritt auf, wenn ein [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) in einem regulären Ausdruck auf nichts angewendet wird oder auf eine [Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet wird.

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

[Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden verwendet, um anzugeben, wie oft ein Zeichen oder eine Gruppe von Zeichen in einem regulären Ausdruck erscheinen kann. Zum Beispiel, `a{3}` passt genau dreimal auf das Zeichen `a`. Wenn das Element, das dem Quantifizierer vorangeht, jedoch nichts ist, das Zeichen entspricht, ist der Quantifizierer ungültig. Beispielsweise können Quantifizierer am Anfang einer [Capturing-Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) oder am Anfang einer [Disjunktionsalternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) nichts wiederholen. [Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) verbrauchen keine Zeichen, daher macht es auch keinen Sinn, sie zu wiederholen.

Im [Unicode-unaware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) gibt es einen veralteten Syntax, der es ermöglicht, dass [Lookahead-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) quantifiziert werden können. Dies ist eine veraltete Syntax und Sie sollten sich nicht darauf verlassen.

## Beispiele

### Ungültige Fälle

```js example-bad
/\b+/; // \b ist eine Wortgrenzen-Assertion, es verbraucht keine Zeichen
/(*hello*)/;
```

### Gültige Fälle

```js example-good
/b+/; // b ist ein Zeichen, es kann wiederholt werden
/(\*hello\*)/; // Escape der Sternchen, um sie wörtlich zu matchen
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
