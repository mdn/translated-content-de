---
title: "SyntaxError: Setter-Funktionen müssen ein Argument haben"
slug: Web/JavaScript/Reference/Errors/Setter_one_argument
l10n:
  sourceCommit: 38bd4d88564b9a1539fb4d1b4ba6fa04b0a10063
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "setter functions must have one argument" tritt auf, wenn ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/get) deklariert wird und die Parameterliste nicht genau aus einem formalen Parameter besteht.

## Nachricht

```plain
SyntaxError: Setter must have exactly one formal parameter. (V8-based)
SyntaxError: Setter function argument must not be a rest parameter (V8-based)
SyntaxError: setter functions must have one argument (Firefox)
SyntaxError: Unexpected token ','. setter functions must have one parameter. (Safari)
SyntaxError: Unexpected token '...'. Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)-Eigenschaftssyntax sieht aus wie eine Funktion, ist aber strenger und nicht alle Funktionssyntaxe ist erlaubt. Ein Setter wird immer mit genau einem Argument aufgerufen, daher ist es wahrscheinlich ein Fehler, ihn mit einer anderen Anzahl von Parametern zu definieren. Dieser Parameter kann [destrukturiert](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) oder mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) versehen werden, jedoch nicht als [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) definiert werden.

Beachten Sie, dass dieser Fehler nur für Eigenschafts-Setter gilt, die die `set`-Syntax verwenden. Wenn Sie den Setter mit {{jsxref("Object.defineProperty()")}} usw. definieren, wird der Setter als normale Funktion definiert, obwohl es wahrscheinlich immer noch ein Fehler ist, wenn der Setter eine andere Anzahl an Argumenten erwartet, da er mit genau einem aufgerufen wird.

## Beispiele

### Ungültige Fälle

```js-nolint example-bad
const obj = {
  set value() {
    this._value = Math.random();
  },
};
```

### Gültige Fälle

```js example-good
// You must declare one parameter, even if you don't use it
const obj = {
  set value(_ignored) {
    this._value = Math.random();
  },
};

// You can also declare a normal method instead
const obj = {
  setValue() {
    this._value = Math.random();
  },
};
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
