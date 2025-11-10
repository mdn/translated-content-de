---
title: "SyntaxError: missing ] after element list"
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "missing ] after element list" tritt auf, wenn irgendwo ein Fehler in der Syntax des Array-Initialisierers vorliegt. Wahrscheinlich fehlt eine schließende eckige Klammer (`]`) oder ein Komma (`,`).

## Nachricht

```plain
SyntaxError: missing ] after element list (Firefox)
SyntaxError: Unexpected token ';'. Expected either a closing ']' or a ',' following an array element. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}.

## Was ist schiefgelaufen?

Es liegt ein Fehler in der Syntax des Array-Initialisierers vor. Wahrscheinlich fehlt eine schließende eckige Klammer (`]`) oder ein Komma (`,`).

## Beispiele

### Unvollständiger Array-Initialisierer

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
