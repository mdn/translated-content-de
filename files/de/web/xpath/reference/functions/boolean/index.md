---
title: boolean
slug: Web/XPath/Reference/Functions/boolean
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `boolean`-Funktion evaluiert einen Ausdruck und liefert true oder false zurück.

## Syntax

```js-nolint
boolean( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck, der evaluiert werden soll. Der Ausdruck kann sich auf Zahlen und Node-Sets sowie auf Booleans beziehen.

### Rückgabewert

Boolean `true` oder `false` nach der Auswertung von `expression`.

## Beschreibung

- Eine Zahl wird als false bewertet, wenn sie positiv oder negativ null oder `NaN` ist. Andernfalls wird sie als true bewertet.
- Ein Node-Set wird als true bewertet, wenn es nicht leer ist.
- Ein String wird als false bewertet, wenn er ein leerer String ist. Andernfalls wird er als true bewertet.
- Ein Objekt eines anderen Typs als der vier grundlegenden Typen wird in ein Boolean konvertiert, abhängig von diesem Typ.

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-boolean)

## Gecko-Unterstützung

Unterstützt.
