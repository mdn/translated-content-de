---
title: "SyntaxError: Parameter nach Rest-Parameter"
slug: Web/JavaScript/Reference/Errors/Parameter_after_rest_parameter
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "Parameter after rest parameter" tritt auf, wenn ein [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) in einer Parameterliste von etwas anderem gefolgt wird, einschließlich eines weiteren Rest-Parameters, eines formalen Parameters oder eines [nachgestellten Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas).

## Meldung

```plain
SyntaxError: Rest parameter must be last formal parameter (V8-based)
SyntaxError: parameter after rest parameter (Firefox)
SyntaxError: Unexpected token ','. Rest parameter should be the last parameter in a function declaration. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Ein Rest-Parameter muss der letzte Parameter in einer Funktionsdefinition sein. Dies liegt daran, dass der Rest-Parameter alle verbleibenden Argumente, die an die Funktion übergeben werden, sammelt, sodass es keinen Sinn ergibt, danach noch weitere Parameter zu haben. Das nächste Nicht-Leerzeichen-Zeichen muss die schließende Klammer der Parameterliste sein.

## Beispiele

### Ungültige Fälle

```js-nolint example-bad
function replacer(match, ...groups, offset, string) {}

function doSomething(
  arg1,
  arg2,
  ...otherArgs, // Accidental trailing comma
) {}
```

### Gültige Fälle

```js example-good
function replacer(match, ...args) {
  const offset = args.at(-2);
  const string = args.at(-1);
}

function doSomething(arg1, arg2, ...otherArgs) {}
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
