---
title: "SyntaxError: unverklammerter unärer Ausdruck kann nicht auf der linken Seite von '**' erscheinen"
slug: Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "unverklammerter unärer Ausdruck kann nicht auf der linken Seite von '\*\*' erscheinen" tritt auf, wenn ein unärer Operator (einer von `typeof`, `void`, `delete`, `await`, `!`, `~`, `+`, `-`) ohne Klammern auf dem linken Operand des [Exponentiationsoperators](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) verwendet wird.

## Meldung

```plain
SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence (V8-based)
SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**' (Firefox)
SyntaxError: Unexpected token '**'. Ambiguous unary expression in the left hand side of the exponentiation expression; parentheses must be used to disambiguate the expression. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Sie haben wahrscheinlich etwas in der Art wie das Folgende geschrieben:

```js-nolint example-bad
-a ** b
```

Ob es als `(-a) ** b` oder `-(a ** b)` ausgewertet werden sollte, ist unklar. In der Mathematik bedeutet -x<sup>2</sup> `-(x ** 2)` — und so handhaben es viele Sprachen, einschließlich Python, Haskell und PHP. Aber das Vorziehen des unären Minusoperators vor `**` würde die Symmetrie mit `a ** -b` brechen, was eindeutig `a ** (-b)` ist. Daher verbietet die Sprache diese Syntax und erfordert, dass Sie entweder die eine oder die andere Seite klammern, um die Mehrdeutigkeit zu lösen.

```js-nolint example-good
(-a) ** b
-(a ** b)
```

Auch andere unäre Operatoren können nicht die linke Seite der Exponentiation sein.

```js-nolint example-bad
await a ** b
!a ** b
+a ** b
~a ** b
```

## Beispiele

Beim Schreiben komplexer mathematischer Ausdrücke mit Exponentiation könnten Sie etwas wie das Folgende schreiben:

```js-nolint example-bad
function taylorSin(x) {
  return (n) => (-1 ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
  // SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**'
}
```

Der Teil `-1 ** n` ist jedoch in JavaScript nicht zulässig. Stattdessen sollten Sie den linken Operand klammern:

```js example-good
function taylorSin(x) {
  return (n) => ((-1) ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
}
```

Dies macht auch die Absicht des Codes für andere Leser viel klarer.

## Siehe auch

- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- [Ursprüngliche Diskussion über die Priorität des Exponentiationsoperators](https://esdiscuss.org/topic/exponentiation-operator-precedence) auf esdiscuss.org
