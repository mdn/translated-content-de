---
title: boolean
slug: Web/XPath/Functions/boolean
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `boolean` wertet einen Ausdruck aus und gibt `true` oder `false` zurück.

## Syntax

```js-nolint
boolean( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck, der ausgewertet werden soll. Der Ausdruck kann sich auf Zahlen, Knotenmengen sowie Booleans beziehen.

### Rückgabewert

Boolean `true` oder `false` nach der Auswertung von `expression`.

## Beschreibung

- Eine Zahl wird zu false, wenn sie positiv oder negativ Null oder `NaN` ist. Andernfalls wird sie zu true ausgewertet.
- Eine Knotenmenge wird zu true ausgewertet, wenn sie nicht leer ist.
- Ein String wird zu false ausgewertet, wenn er ein leerer String ist. Andernfalls wird er zu true ausgewertet.
- Ein Objekt eines anderen Typs als den vier grundlegenden Typen wird in Abhängigkeit von diesem Typ in ein Boolean umgewandelt.

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-boolean)

## Gecko-Unterstützung

Unterstützt.
