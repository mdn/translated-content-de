---
title: "SyntaxError: Setter-Funktionen müssen ein Argument haben"
slug: Web/JavaScript/Reference/Errors/Setter_one_argument
l10n:
  sourceCommit: 38bd4d88564b9a1539fb4d1b4ba6fa04b0a10063
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Setter-Funktionen müssen ein Argument haben" tritt auf, wenn ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/get) deklariert wird und die Parameterliste nicht genau ein formales Parameter enthält.

## Meldung

```plain
SyntaxError: Setter must have exactly one formal parameter. (V8-based)
SyntaxError: Setter function argument must not be a rest parameter (V8-based)
SyntaxError: setter functions must have one argument (Firefox)
SyntaxError: Unexpected token ','. setter functions must have one parameter. (Safari)
SyntaxError: Unexpected token '...'. Expected a parameter pattern or a ')' in parameter list. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)-Eigenschaftssyntax sieht aus wie eine Funktion, ist jedoch strenger und nicht alle Funktionssyntaxe ist erlaubt. Ein Setter wird immer mit genau einem Argument aufgerufen, daher ist es wahrscheinlich ein Fehler, ihn mit einer anderen Anzahl von Parametern zu definieren. Dieser Parameter kann [destrukturiert](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) oder mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) versehen werden, darf jedoch kein [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) sein.

Beachten Sie, dass dieser Fehler nur für Eigenschafts-Setter gilt, die die `set`-Syntax verwenden. Wenn Sie den Setter über {{jsxref("Object.defineProperty()")}} usw. definieren, wird der Setter als normale Funktion definiert, obwohl es wahrscheinlich trotzdem ein Fehler ist, wenn der Setter eine andere Anzahl von Argumenten erwartet, da er mit genau einem aufgerufen wird.

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
// Sie müssen einen Parameter deklarieren, auch wenn Sie ihn nicht verwenden
const obj = {
  set value(_ignored) {
    this._value = Math.random();
  },
};

// Sie können stattdessen auch eine normale Methode deklarieren
const obj = {
  setValue() {
    this._value = Math.random();
  },
};
```

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
