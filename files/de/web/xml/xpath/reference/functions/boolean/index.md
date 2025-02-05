---
title: boolean
slug: Web/XML/XPath/Reference/Functions/boolean
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `boolean` wertet einen Ausdruck aus und gibt entweder `true` oder `false` zurück.

## Syntax

```js-nolint
boolean( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck, der ausgewertet werden soll. Der Ausdruck kann sich auf Zahlen und Node-Sets sowie Booleans beziehen.

### Rückgabewert

Boolean-Wert `true` oder `false`, nachdem `expression` ausgewertet wurde.

## Beschreibung

- Eine Zahl wird als false ausgewertet, wenn sie positiv oder negativ Null oder `NaN` ist. Andernfalls wird sie als true ausgewertet.
- Ein Node-Set wird als true ausgewertet, wenn es nicht leer ist.
- Ein String wird als false ausgewertet, wenn er ein leerer String ist. Andernfalls wird er als true ausgewertet.
- Ein Objekt eines anderen Typs als der vier Grundtypen wird in Abhängigkeit von diesem Typ auf einen Boolean-Wert konvertiert.

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-boolean)

## Gecko-Unterstützung

Unterstützt.
