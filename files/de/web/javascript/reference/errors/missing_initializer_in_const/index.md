---
title: "SyntaxError: fehlendes = in const-Deklaration"
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

Der JavaScript-Fehler "missing = in const declaration" tritt auf, wenn einer `const`-Deklaration im selben Ausdruck kein Wert zugewiesen wurde (wie `const RED_FLAG;`). Sie müssen einen Wert angeben (`const RED_FLAG = true`).

## Nachricht

```plain
SyntaxError: Missing initializer in const declaration (V8-based)
SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Unexpected token ';'. const declared variable 'x' must have an initializer. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Eine Konstante ist ein Wert, der während der normalen Programmausführung nicht verändert werden kann. Sie kann nicht durch Neu-Zuweisung geändert werden und auch nicht neu deklariert werden. In JavaScript werden Konstanten mit dem [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwort deklariert. Ein Initialisierer für eine Konstante ist erforderlich; das heißt, Sie müssen deren Wert im selben Ausdruck angeben, in dem sie deklariert wird (was sinnvoll ist, da sie später nicht geändert werden kann).

## Beispiele

### Fehlender const-Initialisierer

Im Gegensatz zu `var` oder `let` müssen Sie für eine `const`-Deklaration einen Wert angeben. Dies führt zu einem Fehler:

```js-nolint example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### Behebung des Fehlers

Es gibt mehrere Möglichkeiten, diesen Fehler zu beheben. Prüfen Sie, was mit der betreffenden Konstante erreicht werden sollte.

#### Hinzufügen eines konstanten Wertes

Geben Sie den konstanten Wert im selben Ausdruck an, in dem er deklariert wird:

```js example-good
const COLUMNS = 80;
```

#### `const`, `let` oder `var`?

Verwenden Sie `const` nicht, wenn Sie nicht beabsichtigten, eine Konstante zu deklarieren. Vielleicht wollten Sie eine block-skopierte Variable mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder eine globale Variable mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarieren. Beide erfordern keinen Anfangswert.

```js example-good
let columns;
```

## Siehe auch

- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
