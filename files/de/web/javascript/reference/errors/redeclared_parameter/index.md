---
title: "SyntaxError: redeclaration of formal parameter \"x\""
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "redeclaration of formal parameter" tritt auf, wenn derselbe
Variablenname sowohl als Funktionsparameter verwendet wird als auch erneut innerhalb des Funktionskörpers mit einer {{jsxref("Statements/let", "let")}}-Zuweisung deklariert wird.

## Meldung

```plain
SyntaxError: Identifier "x" has already been declared (V8-based)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Cannot declare a let variable twice: 'x'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Derselbe Variablenname wird als Funktionsparameter verwendet und dann innerhalb des Funktionskörpers erneut mit einer {{jsxref("Statements/let", "let")}}-Zuweisung deklariert. Die erneute Deklaration derselben Variablen innerhalb derselben Funktion oder des gleichen Blockscopes mit `let` ist in JavaScript nicht erlaubt.

## Beispiele

### Erneut deklariertes Argument

In diesem Fall erklärt die Variable "arg" das Argument erneut.

```js-nolint example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

Wenn Sie den Wert von "arg" im Funktionskörper ändern möchten, können Sie dies tun, aber Sie müssen nicht dieselbe Variable erneut deklarieren. Mit anderen Worten: Sie können das `let`-Schlüsselwort weglassen. Wenn Sie eine neue Variable erstellen möchten, müssen Sie sie umbenennen, da sie bereits mit dem Funktionsparameter kollidiert.

```js example-good
function f(arg) {
  arg = "foo";
}

function g(arg) {
  let bar = "foo";
}
```

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/var", "var")}}
- [Grammatik und Typen](/de/docs/Web/JavaScript/Guide/Grammar_and_types) Leitfaden
