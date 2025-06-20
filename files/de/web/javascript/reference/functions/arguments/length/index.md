---
title: arguments.length
short-title: length
slug: Web/JavaScript/Reference/Functions/arguments/length
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{jsSidebar("Functions")}}

Die **`arguments.length`** Eigenschaften-Daten enthalten die Anzahl der an die Funktion übergebenen Argumente.

## Wert

Eine nicht-negative Ganzzahl.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Die Eigenschaft `arguments.length` gibt die Anzahl der Argumente an, die tatsächlich an eine Funktion übergeben wurden. Diese kann mehr oder weniger als die Anzahl der definierten Parameter sein (siehe {{jsxref("Function.prototype.length")}}). Zum Beispiel für die folgende Funktion:

```js
function func1(a, b, c) {
  console.log(arguments.length);
}
```

`func1.length` gibt `3` zurück, weil `func1` drei formale Parameter deklariert. Allerdings protokolliert `func1(1, 2, 3, 4, 5)` `5`, weil `func1` mit fünf Argumenten aufgerufen wurde. In ähnlicher Weise protokolliert `func1(1)` `1`, weil `func1` mit einem Argument aufgerufen wurde.

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

- [Leitfaden für Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- [`Function`: `length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
