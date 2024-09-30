---
title: "SyntaxError: missing ] after element list"
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "missing ] after element list" tritt auf, wenn ein Fehler in der Array-Initialisierungs-Syntax vorhanden ist. Wahrscheinlich fehlt eine abschließende eckige Klammer (`]`) oder ein Komma (`,`).

## Nachricht

```plain
SyntaxError: missing ] after element list (Firefox)
SyntaxError: Unexpected token ';'. Expected either a closing ']' or a ',' following an array element. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}.

## Was schiefgelaufen ist?

Es gibt einen Fehler in der Array-Initialisierungs-Syntax. Wahrscheinlich fehlt eine abschließende eckige Klammer (`]`) oder ein Komma (`,`).

## Beispiele

### Unvollständige Array-Initialisierung

```js-nolint example-bad
const list = [1, 2,

const instruments = [
  "Ukulele",
  "Guitar",
  "Piano",
};

const data = [{ foo: "bar" } { bar: "foo" }];
```

Richtig wäre:

```js example-good
const list = [1, 2];

const instruments = ["Ukulele", "Guitar", "Piano"];

const data = [{ foo: "bar" }, { bar: "foo" }];
```

## Siehe auch

- {{jsxref("Array")}}
