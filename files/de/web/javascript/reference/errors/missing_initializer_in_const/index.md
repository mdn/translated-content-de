---
title: "SyntaxError: missing = in const declaration"
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "missing = in const declaration" tritt auf, wenn einer `const`-Deklaration im selben Satz kein Wert zugewiesen wurde (wie bei `const RED_FLAG;`). Sie müssen einen Wert angeben (`const RED_FLAG = "#ff0"`).

## Meldung

```plain
SyntaxError: Missing initializer in const declaration (V8-based)
SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Unexpected token ';'. const declared variable 'x' must have an initializer. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Eine Konstante ist ein Wert, der während der normalen Ausführung des Programms nicht verändert werden kann. Er kann nicht durch eine erneute Zuweisung geändert werden und kann nicht neu deklariert werden. In JavaScript werden Konstanten mit dem [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)-Schlüsselwort deklariert. Ein Initialisierer für eine Konstante ist erforderlich; das heißt, Sie müssen seinen Wert im selben Satz angeben, in dem er deklariert wird (was sinnvoll ist, da er später nicht geändert werden kann).

## Beispiele

### Fehlender `const`-Initialisierer

Im Gegensatz zu `var` oder `let` müssen Sie für eine `const`-Deklaration einen Wert angeben. Dies führt zu einem Fehler:

```js-nolint example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### Fehlerbehebung

Es gibt mehrere Möglichkeiten, diesen Fehler zu beheben. Prüfen Sie, was mit der betreffenden Konstante beabsichtigt war.

#### Hinzufügen eines konstanten Werts

Geben Sie den konstanten Wert im selben Satz an, in dem er deklariert wird:

```js example-good
const COLUMNS = 80;
```

#### `const`, `let` oder `var`?

Verwenden Sie `const` nicht, wenn Sie keine Konstante deklarieren wollten. Vielleicht wollten Sie eine blockscoped-Variable mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder eine globale Variable mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarieren. Beide erfordern keinen Anfangswert.

```js example-good
let columns;
```

## Siehe auch

- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)
- [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)
