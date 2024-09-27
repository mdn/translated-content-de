---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Functions")}}

Die Eigenschaft **`arguments.length`** enthält die Anzahl der an die Funktion übergebenen Argumente.

## Wert

Eine nicht-negative Ganzzahl.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Die Eigenschaft `arguments.length` liefert die Anzahl der tatsächlich an eine Funktion übergebenen Argumente. Dies kann mehr oder weniger sein als die Anzahl der definierten Parameter (siehe {{jsxref("Function.prototype.length")}}). Beispielsweise für die folgende Funktion:

```js
function func1(a, b, c) {
  console.log(arguments.length);
}
```

`func1.length` gibt `3` zurück, da `func1` drei formale Parameter deklariert. Wird jedoch `func1(1, 2, 3, 4, 5)` aufgerufen, protokolliert es `5`, da `func1` mit fünf Argumenten aufgerufen wurde. Ähnlich protokolliert `func1(1)` `1`, da `func1` mit einem Argument aufgerufen wurde.

## Beispiele

### Verwendung von arguments.length

In diesem Beispiel definieren wir eine Funktion, die zwei oder mehr Zahlen zusammen addieren kann.

```js
function adder(base /*, num1, …, numN */) {
  base = Number(base);
  for (let i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- [`Function`: `length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
