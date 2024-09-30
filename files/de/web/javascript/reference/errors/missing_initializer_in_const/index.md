---
title: "SyntaxError: missing = in const declaration"
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "missing = in const declaration" tritt auf, wenn einer `const`-Deklaration kein Wert in derselben Anweisung zugewiesen wurde (wie `const RED_FLAG;`). Sie müssen einen Wert angeben (`const RED_FLAG = "#ff0"`).

## Meldung

```plain
SyntaxError: Missing initializer in const declaration (V8-based)
SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Unexpected token ';'. const declared variable 'x' must have an initializer. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Eine Konstante ist ein Wert, der während der normalen Ausführung des Programms nicht geändert werden kann. Sie kann nicht durch Zuweisung geändert und nicht erneut deklariert werden. In JavaScript werden Konstanten mit dem [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwort deklariert. Ein Initialisierer für eine Konstante ist erforderlich; das heißt, Sie müssen ihren Wert in derselben Anweisung angeben, in der sie deklariert wird (was sinnvoll ist, da sie später nicht geändert werden kann).

## Beispiele

### Fehlender Initialisierer bei const

Im Gegensatz zu `var` oder `let` müssen Sie einen Wert für eine `const`-Deklaration angeben. Dies führt zu einem Fehler:

```js-nolint example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### Beheben des Fehlers

Es gibt mehrere Möglichkeiten, diesen Fehler zu beheben. Überprüfen Sie, was mit der betreffenden Konstante beabsichtigt war.

#### Hinzufügen eines konstanten Wertes

Geben Sie den konstanten Wert in derselben Anweisung an, in der sie deklariert wird:

```js example-good
const COLUMNS = 80;
```

#### `const`, `let` oder `var`?

Verwenden Sie `const` nicht, wenn Sie nicht beabsichtigen, eine Konstante zu deklarieren. Vielleicht wollten Sie eine block-skopierte Variable mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder eine globale Variable mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarieren. Beide erfordern keinen Anfangswert.

```js example-good
let columns;
```

## Siehe auch

- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
