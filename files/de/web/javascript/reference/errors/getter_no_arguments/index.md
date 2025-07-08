---
title: "SyntaxError: Getter-Funktionen dürfen keine Argumente haben"
slug: Web/JavaScript/Reference/Errors/Getter_no_arguments
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "getter functions must have no arguments" tritt auf, wenn ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) deklariert wird und die Parameterliste nicht leer ist.

## Meldung

```plain
SyntaxError: Getter must not have any formal parameters. (V8-based)
SyntaxError: getter functions must have no arguments (Firefox)
SyntaxError: Unexpected identifier 'x'. getter functions must have no parameters. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)-Eigenschaftssyntax sieht aus wie eine Funktion, ist jedoch strenger, und es ist nicht die gesamte Funktionssyntax erlaubt. Ein Getter wird immer ohne Argumente aufgerufen, daher ist es wahrscheinlich ein Fehler, ihn mit einem beliebigen Parameter zu definieren.

Beachten Sie, dass dieser Fehler nur für Eigenschafts-Getter gilt, die die `get`-Syntax verwenden. Wenn Sie den Getter mit {{jsxref("Object.defineProperty()")}} usw. definieren, wird der Getter als normale Funktion definiert. Es ist jedoch wahrscheinlich immer noch ein Fehler, wenn der Getter Argumente erwartet, da er ohne Argumente aufgerufen wird.

## Beispiele

### Ungültige Fälle

```js-nolint example-bad
const obj = {
  get value(type) {
    return type === "string" ? String(Math.random()) : Math.random();
  },
};
```

### Gültige Fälle

```js example-good
// Remove the parameter
const obj = {
  get value() {
    return Math.random();
  },
};

// Use a normal method, if you need a parameter
const obj = {
  getValue(type) {
    return type === "string" ? String(Math.random()) : Math.random();
  },
};
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
