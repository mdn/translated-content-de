---
title: boolean
slug: Web/XML/XPath/Reference/Functions/boolean
l10n:
  sourceCommit: 21ffee261cfb407bacc25d1f253a836e233f208b
---

Die `boolean`-Funktion wertet einen Ausdruck aus und gibt true oder false zurück.

## Syntax

```js-nolint
boolean( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck, der ausgewertet werden soll. Der Ausdruck kann sich auf Zahlen, Knotenmengen sowie Booleans beziehen.

### Rückgabewert

Boolean `true` oder `false` nach Auswertung des `expression`.

## Beschreibung

- Eine Zahl wird als false ausgewertet, wenn sie positiv oder negativ null oder `NaN` ist. Andernfalls wird sie als true ausgewertet.
- Eine Knotenmenge wird als true ausgewertet, wenn sie nicht leer ist.
- Ein String wird als false ausgewertet, wenn er ein leerer String ist. Andernfalls wird er als true ausgewertet.
- Ein Objekt eines anderen Typs als die vier Grundtypen wird abhängig vom jeweiligen Typ in einen Boolean umgewandelt.

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/xpath-10/#function-boolean)

## Gecko-Unterstützung

Unterstützt.
