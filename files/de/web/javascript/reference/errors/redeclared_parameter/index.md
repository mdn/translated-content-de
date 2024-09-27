---
title: 'SyntaxError: erneute Deklaration des formalen Parameters "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "erneute Deklaration des formalen Parameters" tritt auf, wenn derselbe
Variablenname sowohl als Funktionsparameter auftritt als auch im Funktionskörper erneut mit einem
{{jsxref("Statements/let", "let")}}-Zuweisung deklariert wird.

## Meldung

```plain
SyntaxError: Identifier "x" has already been declared (V8-based)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Cannot declare a let variable twice: 'x'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Derselbe Variablenname tritt sowohl als Funktionsparameter auf als auch im Funktionskörper mit einer
{{jsxref("Statements/let", "let")}}-Zuweisung erneut deklariert wird. Eine erneute Deklaration der
gleichen Variablen innerhalb derselben Funktion oder desselben Blockbereichs mit `let` ist in JavaScript nicht
erlaubt.

## Beispiele

### Erneuterklärtes Argument

In diesem Fall erklärt die Variable "arg" das Argument erneut.

```js-nolint example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

Wenn Sie den Wert von "arg" im Funktionskörper ändern möchten, können Sie dies tun, aber Sie müssen
dieselbe Variable nicht erneut deklarieren. Mit anderen Worten: Sie können das `let`-Schlüsselwort weglassen.
Wenn Sie eine neue Variable erstellen möchten, müssen Sie sie umbenennen, da sie bereits mit dem Funktionsparameter im Konflikt steht.

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
