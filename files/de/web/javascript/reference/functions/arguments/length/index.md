---
title: arguments.length
short-title: length
slug: Web/JavaScript/Reference/Functions/arguments/length
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Die Dateneigenschaft **`arguments.length`** enthält die Anzahl der Argumente, die an die Funktion übergeben wurden.

## Wert

Eine nicht negative ganze Zahl.

{{js_property_attributes(1, 0, 1)}}

## Beschreibung

Die Eigenschaft `arguments.length` gibt die Anzahl der Argumente an, die tatsächlich an eine Funktion übergeben wurden. Diese Anzahl kann größer oder kleiner sein als die Anzahl der definierten Parameter (siehe {{jsxref("Function.prototype.length")}}). Betrachten Sie beispielsweise die folgende Funktion:

```js
function func1(a, b, c) {
  console.log(arguments.length);
}
```

`func1.length` gibt `3` zurück, weil `func1` drei formale Parameter deklariert. `func1(1, 2, 3, 4, 5)` gibt dagegen `5` in der Konsole aus, weil `func1` mit fünf Argumenten aufgerufen wurde. Ebenso gibt `func1(1)` den Wert `1` in der Konsole aus, weil `func1` mit einem Argument aufgerufen wurde.

## Beispiele

### arguments.length verwenden

In diesem Beispiel definieren wir eine Funktion, die zwei oder mehr Zahlen addieren kann.

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

- Leitfaden zu [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- [`Function`: `length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
