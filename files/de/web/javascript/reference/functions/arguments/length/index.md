---
title: arguments.length
short-title: length
slug: Web/JavaScript/Reference/Functions/arguments/length
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`arguments.length`** Dateneigenschaft enthält die Anzahl der an die Funktion übergebenen Argumente.

## Wert

Eine nicht-negative ganze Zahl.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Die `arguments.length` Eigenschaft gibt die Anzahl der tatsächlich an eine Funktion übergebenen Argumente an. Diese kann mehr oder weniger als die definierte Anzahl der Parameter sein (siehe {{jsxref("Function.prototype.length")}}). Zum Beispiel, für die unten stehende Funktion:

```js
function func1(a, b, c) {
  console.log(arguments.length);
}
```

gibt `func1.length` den Wert `3` zurück, weil `func1` drei formale Parameter deklariert. Allerdings protokolliert `func1(1, 2, 3, 4, 5)` `5`, weil `func1` mit fünf Argumenten aufgerufen wurde. Ebenso protokolliert `func1(1)` `1`, weil `func1` mit einem Argument aufgerufen wurde.

## Beispiele

### Verwendung von arguments.length

In diesem Beispiel definieren wir eine Funktion, die zwei oder mehr Zahlen zusammenzählen kann.

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
