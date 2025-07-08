---
title: "SyntaxError: unvollständiger Quantifizierer im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_incomplete_quantifier
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "unvollständiger Quantifizierer im regulären Ausdruck" tritt auf, wenn ein regulärer Ausdruck ein `{` enthält, dieser jedoch keinen gültigen [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) einleitet.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /1{/u: Incomplete quantifier (V8-based)
SyntaxError: incomplete quantifier in regular expression (Firefox)
SyntaxError: Invalid regular expression: incomplete {} quantifier for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Ein `{`-Zeichen in einem regulären Ausdrucksmuster leitet einen [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) ein. Ein gültiger Quantifizierer hat die Form `{n}`, `{n,}` oder `{n,m}`, wobei `n` und `m` nichtnegative ganze Zahlen sind und `m` nicht kleiner als `n` ist. Wenn das `{`-Zeichen keinen gültigen Quantifizierer einleitet, tritt ein `SyntaxError` auf.

Im Unicode-unabhängigen Modus führt diese Syntax dazu, dass das `{` zu einem literalen Zeichen wird, anstatt einen Fehler zu erzeugen. Dies ist jedoch eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und Sie sollten sich nicht darauf verlassen.

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
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
