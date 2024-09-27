---
title: "SyntaxError: fehlendes ] nach Elementliste"
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler „fehlendes ] nach Elementliste“ tritt auf, wenn ein Fehler in der Syntax der Array-Initialisierung vorliegt. Höchstwahrscheinlich fehlt eine schließende eckige Klammer (`]`) oder ein Komma (`,`).

## Meldung

```plain
SyntaxError: missing ] after element list (Firefox)
SyntaxError: Unexpected token ';'. Expected either a closing ']' or a ',' following an array element. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Es gibt einen Fehler in der Syntax der Array-Initialisierung. Höchstwahrscheinlich fehlt eine schließende eckige Klammer (`]`) oder ein Komma (`,`).

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

Korrekt wäre:

```js example-good
const list = [1, 2];

const instruments = ["Ukulele", "Guitar", "Piano"];

const data = [{ foo: "bar" }, { bar: "foo" }];
```

## Siehe auch

- {{jsxref("Array")}}
