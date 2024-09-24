---
title: "SyntaxError: Ungeklammerter unärer Ausdruck kann nicht auf der linken Seite von '**' stehen"
slug: Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "ungeklammerter unärer Ausdruck kann nicht auf der linken Seite von '\*\*' stehen" tritt auf, wenn ein unärer Operator (einer von `typeof`, `void`, `delete`, `await`, `!`, `~`, `+`, `-`) ohne Klammern auf dem linken Operanden des [Exponentiationsoperators](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) verwendet wird.

## Nachricht

```plain
SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence (V8-based)
SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**' (Firefox)
SyntaxError: Unexpected token '**'. Ambiguous unary expression in the left hand side of the exponentiation expression; parentheses must be used to disambiguate the expression. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ging schief?

Sie haben wahrscheinlich etwas wie das Folgende geschrieben:

```js-nolint example-bad
-a ** b
```

Ob dies als `(-a) ** b` oder `-(a ** b)` ausgewertet werden sollte, ist mehrdeutig. In der Mathematik bedeutet -x<sup>2</sup> `-(x ** 2)` — und so handhaben es viele Sprachen, einschließlich Python, Haskell und PHP. Aber die unäre Minus-Operation Vorrang vor `**` haben zu lassen, würde die Symmetrie mit `a ** -b` brechen, was eindeutig `a ** (-b)` ist. Daher verbietet die Sprache diese Syntax und verlangt, dass Sie eine Seite einklammern, um die Mehrdeutigkeit zu klären.

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

Beim Schreiben von komplexen mathematischen Ausdrücken mit Exponentiation können Sie etwas wie das Folgende schreiben:

```js-nolint example-bad
function taylorSin(x) {
  return (n) => (-1 ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
  // SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**'
}
```

Jedoch ist der Teil `-1 ** n` in JavaScript ungültig. Stattdessen klammern Sie den linken Operanden ein:

```js example-good
function taylorSin(x) {
  return (n) => ((-1) ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
}
```

Dies macht auch die Absicht des Codes für andere Leser viel klarer.

## Siehe auch

- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Operatorvorrang](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- [Ursprüngliche Diskussion zur Priorität des Exponentiationsoperators](https://esdiscuss.org/topic/exponentiation-operator-precedence) auf esdiscuss.org
