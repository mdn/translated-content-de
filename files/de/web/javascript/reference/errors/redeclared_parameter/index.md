---
title: 'SyntaxError: Neudeklaration des formalen Parameters "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "Neudeklaration des formalen Parameters" tritt auf, wenn ein Funktionsparameter denselben Variablennamen aufweist und dann im Funktionskörper erneut mit einer {{jsxref("Statements/let", "let")}}-Zuweisung deklariert wird.

## Nachricht

```plain
SyntaxError: Identifier "x" has already been declared (V8-based)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Cannot declare a let variable twice: 'x'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Derselbe Variablenname tritt als Funktionsparameter auf und wird dann im Funktionskörper erneut mit einer {{jsxref("Statements/let", "let")}}-Zuweisung deklariert. Die Neudeklaration derselben Variablen innerhalb desselben Funktions- oder Blockbereichs mit `let` ist in JavaScript nicht erlaubt.

## Beispiele

### Neu deklariertes Argument

In diesem Fall deklariert die Variable "arg" das Argument neu.

```js-nolint example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

Wenn Sie den Wert von "arg" im Funktionskörper ändern möchten, können Sie das tun, aber Sie müssen dieselbe Variable nicht erneut deklarieren. Mit anderen Worten: Sie können das `let`-Schlüsselwort weglassen. Wenn Sie eine neue Variable erstellen möchten, müssen Sie sie umbenennen, da ein Konflikt mit dem Funktionsparameter bereits besteht.

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
