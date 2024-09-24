---
title: "SyntaxError: doppelte Deklaration des formalen Parameters \"x\""
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "doppelte Deklaration des formalen Parameters" tritt auf, wenn der gleiche
Variablenname als Funktionsparameter verwendet und dann erneut innerhalb des
Funktionskörpers mit einer {{jsxref("Statements/let", "let")}}-Zuweisung deklariert wird.

## Nachricht

```plain
SyntaxError: Identifier "x" has already been declared (V8-based)
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Cannot declare a let variable twice: 'x'. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schief gelaufen?

Der gleiche Variablenname wird als Funktionsparameter verwendet und dann erneut innerhalb
des Funktionskörpers mit einer {{jsxref("Statements/let", "let")}}-Zuweisung deklariert.
Eine erneute Deklaration der gleichen Variablen innerhalb derselben Funktion oder Blockbereich
mit `let` ist in JavaScript nicht erlaubt.

## Beispiele

### Erneut deklarierter Parameter

In diesem Fall deklariert die Variable "arg" das Argument erneut.

```js-nolint example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: doppelte Deklaration des formalen Parameters "arg"
```

Wenn Sie den Wert von "arg" im Funktionskörper ändern möchten, können Sie dies tun,
aber Sie müssen die gleiche Variable nicht erneut deklarieren. Mit anderen Worten: Sie können das
`let`-Schlüsselwort weglassen. Wenn Sie eine neue Variable erstellen möchten, müssen Sie sie
umbenennen, da sie bereits mit dem Funktionsparameter in Konflikt steht.

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
