---
title: "SyntaxError: unvollständiger Quantor in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_incomplete_quantifier
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "unvollständiger Quantor in regulärem Ausdruck" tritt auf, wenn ein regulärer Ausdruck ein `{` enthält, das jedoch keinen gültigen [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) einleitet.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /1{/u: Incomplete quantifier (V8-based)
SyntaxError: incomplete quantifier in regular expression (Firefox)
SyntaxError: Invalid regular expression: incomplete {} quantifier for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Ein `{` Zeichen in einem regulären Ausdrucksmuster leitet einen [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) ein. Ein gültiger Quantor hat die Form `{n}`, `{n,}` oder `{n,m}`, wobei `n` und `m` nicht-negative ganze Zahlen sind und `m` nicht kleiner als `n` ist. Wenn das `{` Zeichen keinen gültigen Quantor einleitet, tritt ein `SyntaxError` auf.

Im Unicode-unabhängigen Modus führt diese Syntax dazu, dass das `{` zu einem wörtlichen Zeichen wird, anstatt einen Fehler zu erzeugen. Dies ist jedoch eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

## Beispiele

### Ungültige Fälle

```js example-bad
/1{/u;
/1{a}/u;
/1{}/u;
/1{1,2,3}/u;
/1{1, 2}/u;
```

### Gültige Fälle

```js example-good
/1{1}/u;
/1{1,}/u;
/1{1,2}/u;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantor: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
