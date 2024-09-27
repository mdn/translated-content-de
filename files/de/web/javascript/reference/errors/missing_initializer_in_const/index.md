---
title: "SyntaxError: missing = in const declaration"
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "missing = in const declaration" tritt auf, wenn einer `const`-Deklaration im selben Statement kein Wert zugewiesen wurde (wie `const RED_FLAG;`). Sie müssen einen Wert angeben (`const RED_FLAG = "#ff0"`).

## Meldung

```plain
SyntaxError: Missing initializer in const declaration (V8-based)
SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Unexpected token ';'. const declared variable 'x' must have an initializer. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Eine Konstante ist ein Wert, der während der normalen Ausführung des Programms nicht verändert werden kann. Sie kann weder durch erneute Zuweisung geändert noch neu deklariert werden. In JavaScript werden Konstanten mit dem Schlüsselwort [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert. Ein Initialisierer ist erforderlich; das heißt, Sie müssen den Wert im selben Statement angeben, in dem er deklariert wird (was sinnvoll ist, da er später nicht geändert werden kann).

## Beispiele

### Fehlender const-Initializer

Anders als bei `var` oder `let` müssen Sie für eine `const`-Deklaration einen Wert angeben. Dies führt zu einem Fehler:

```js-nolint example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### Fehlerbehebung

Es gibt mehrere Möglichkeiten, diesen Fehler zu beheben. Überprüfen Sie, was mit der betreffenden Konstante erreicht werden sollte.

#### Hinzufügen eines Konstantenwerts

Geben Sie den konstanten Wert im selben Statement an, in dem er deklariert wird:

```js example-good
const COLUMNS = 80;
```

#### `const`, `let` oder `var`?

Verwenden Sie `const` nicht, wenn Sie nicht beabsichtigen, eine Konstante zu deklarieren. Vielleicht wollten Sie eine blockseitige Variable mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder eine globale Variable mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarieren. Beide benötigen keinen Anfangswert.

```js example-good
let columns;
```

## Siehe auch

- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
