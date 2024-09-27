---
title: "SyntaxError: unparenthesized unary expression kann nicht auf der linken Seite von '**' stehen"
slug: Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation
l10n:
  sourceCommit: a71b8929628a2187794754c202ad399fe357141b
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "unparenthesized unary expression kann nicht auf der linken Seite von '\*\*' stehen" tritt auf, wenn ein unärer Operator (einer von `typeof`, `void`, `delete`, `await`, `!`, `~`, `+`, `-`) auf das linke Operanden des [Exponentiationsoperators](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) ohne Klammern angewendet wird.

## Meldung

```plain
SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence (V8-based)
SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**' (Firefox)
SyntaxError: Unexpected token '**'. Ambiguous unary expression in the left hand side of the exponentiation expression; parentheses must be used to disambiguate the expression. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es ist wahrscheinlich, dass Sie so etwas geschrieben haben:

```js-nolint example-bad
-a ** b
```

Ob dies als `(-a) ** b` oder `-(a ** b)` bewertet werden sollte, ist mehrdeutig. In der Mathematik bedeutet -x<sup>2</sup> `-(x ** 2)` — und so handhaben es viele Sprachen, einschließlich Python, Haskell und PHP. Aber wenn der unäre Minus-Operator Vorrang vor `**` hätte, würde dies die Symmetrie mit `a ** -b` brechen, was eindeutig `a ** (-b)` ist. Daher verbietet die Sprache diese Syntax und verlangt, dass Sie eine der Seiten klammern, um die Mehrdeutigkeit aufzulösen.

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

Wenn Sie komplexe mathematische Ausdrücke mit Exponentiation schreiben, könnten Sie so etwas schreiben:

```js-nolint example-bad
function taylorSin(x) {
  return (n) => (-1 ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
  // SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**'
}
```

Der Teil `-1 ** n` ist jedoch in JavaScript unzulässig. Verwenden Sie stattdessen Klammern für den linken Operanden:

```js example-good
function taylorSin(x) {
  return (n) => ((-1) ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
}
```

Dies macht auch die Absicht des Codes für andere Leser viel klarer.

## Siehe auch

- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- [Ursprüngliche Diskussion über die Präzedenz des Exponentiationsoperators](https://esdiscuss.org/topic/exponentiation-operator-precedence) auf esdiscuss.org
