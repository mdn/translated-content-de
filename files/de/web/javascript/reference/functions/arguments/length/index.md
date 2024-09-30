---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Functions")}}

Die Daten-Eigenschaft **`arguments.length`** enthält die Anzahl der an die Funktion übergebenen Argumente.

## Wert

Eine nicht-negative ganze Zahl.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Die Eigenschaft `arguments.length` gibt die Anzahl der tatsächlich an eine Funktion übergebenen Argumente an. Diese kann mehr oder weniger als die Anzahl der definierten Parameter sein (siehe {{jsxref("Function.prototype.length")}}). Zum Beispiel, für die folgende Funktion:

```js
function func1(a, b, c) {
  console.log(arguments.length);
}
```

`func1.length` gibt `3` zurück, weil `func1` drei formale Parameter deklariert. Wenn jedoch `func1(1, 2, 3, 4, 5)` aufgerufen wird, wird `5` protokolliert, weil `func1` mit fünf Argumenten aufgerufen wurde. Ähnlich wird bei `func1(1)` `1` protokolliert, weil `func1` mit einem Argument aufgerufen wurde.

## Beispiele

### Verwendung von arguments.length

In diesem Beispiel definieren wir eine Funktion, die zwei oder mehr Zahlen zusammenaddieren kann.

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
