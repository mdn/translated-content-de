---
title: "SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**'"
slug: Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "unparenthesized unary expression can't appear on the left-hand side of '\*\*'" tritt auf, wenn ein unäres Operator (einer von `typeof`, `void`, `delete`, `await`, `!`, `~`, `+`, `-`) ohne Klammern auf dem linken Operanden des [Exponentiationsoperators](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) verwendet wird.

## Nachricht

```plain
SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence (V8-based)
SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**' (Firefox)
SyntaxError: Unexpected token '**'. Ambiguous unary expression in the left hand side of the exponentiation expression; parentheses must be used to disambiguate the expression. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Sie haben wahrscheinlich etwas wie folgt geschrieben:

```js-nolint example-bad
-a ** b
```

Ob dies als `(-a) ** b` oder `-(a ** b)` ausgewertet werden soll, ist mehrdeutig. In der Mathematik bedeutet -x<sup>2</sup> `-(x ** 2)` — und so handhaben es viele Sprachen, einschließlich Python, Haskell und PHP. Aber das Priorisieren des unären Minusoperators über `**` bricht die Symmetrie mit `a ** -b`, was eindeutig `a ** (-b)` ist. Daher verbietet die Sprache diese Syntax und erfordert, dass Sie eine Seite klammern, um die Mehrdeutigkeit aufzulösen.

```js-nolint example-good
(-a) ** b
-(a ** b)
```

Andere unäre Operatoren können ebenfalls nicht die linke Seite der Exponentiation sein.

```js-nolint example-bad
await a ** b
!a ** b
+a ** b
~a ** b
```

## Beispiele

Beim Schreiben komplexer mathematischer Ausdrücke, die Exponentiationen beinhalten, könnten Sie so etwas schreiben:

```js-nolint example-bad
function taylorSin(x) {
  return (n) => (-1 ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
  // SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**'
}
```

Der Teil `-1 ** n` ist jedoch in JavaScript illegal. Stattdessen sollten Sie den linken Operanden klammern:

```js example-good
function taylorSin(x) {
  return (n) => ((-1) ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
}
```

Dies macht die Absicht des Codes auch für andere Leser viel klarer.

## Siehe auch

- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- [Ursprüngliche Diskussion über die Priorität des Exponentiationsoperators](https://esdiscuss.org/topic/exponentiation-operator-precedence) auf esdiscuss.org
