---
title: "SyntaxError: Getter-Funktionen dürfen keine Argumente haben"
slug: Web/JavaScript/Reference/Errors/Getter_no_arguments
l10n:
  sourceCommit: 38bd4d88564b9a1539fb4d1b4ba6fa04b0a10063
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "getter functions must have no arguments" tritt auf, wenn ein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) deklariert wird und die Parameterliste nicht leer ist.

## Nachricht

```plain
SyntaxError: Getter must not have any formal parameters. (V8-based)
SyntaxError: getter functions must have no arguments (Firefox)
SyntaxError: Unexpected identifier 'x'. getter functions must have no parameters. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)-Eigenschaftssyntax sieht aus wie eine Funktion, ist aber strikter und nicht alle Funktionssyntax ist erlaubt. Ein Getter wird immer ohne Argumente aufgerufen, daher ist es wahrscheinlich ein Fehler, ihn mit Parametern zu definieren.

Beachten Sie, dass dieser Fehler nur für Eigenschafts-Getter gilt, die die `get`-Syntax verwenden. Wenn Sie den Getter mit {{jsxref("Object.defineProperty()")}} usw. definieren, wird der Getter als normale Funktion definiert, obwohl es wahrscheinlich immer noch ein Fehler ist, wenn der Getter Argumente erwartet, da er ohne solche aufgerufen wird.

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
