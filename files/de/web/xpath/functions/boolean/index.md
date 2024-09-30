---
title: boolean
slug: Web/XPath/Functions/boolean
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die `boolean`-Funktion wertet einen Ausdruck aus und gibt `true` oder `false` zurück.

## Syntax

```js-nolint
boolean( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck, der ausgewertet werden soll. Der Ausdruck kann sich auf Zahlen und Knotenmengen sowie Booleans beziehen.

### Rückgabewert

Boolean `true` oder `false` nach der Auswertung von `expression`.

## Beschreibung

- Eine Zahl wird als `false` bewertet, wenn sie positiv oder negativ null oder `NaN` ist. Andernfalls wird sie als `true` bewertet.
- Eine Knotenmenge wird als `true` bewertet, wenn sie nicht leer ist.
- Ein String wird als `false` bewertet, wenn er ein leerer String ist. Andernfalls wird er als `true` bewertet.
- Ein Objekt eines anderen Typs als der vier grundlegenden Typen wird auf eine von diesem Typ abhängige Weise in ein Boolean umgewandelt.

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-boolean)

## Gecko-Kompatibilität

Unterstützt.
