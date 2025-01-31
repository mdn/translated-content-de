---
title: boolean
slug: Web/XPath/Functions/boolean
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `boolean`-Funktion wertet einen Ausdruck aus und gibt entweder `true` oder `false` zurück.

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

- Eine Zahl wird als false ausgewertet, wenn sie null (positiv oder negativ) oder `NaN` ist. Ansonsten wird sie als true ausgewertet.
- Eine Knotenmenge wird als true ausgewertet, wenn sie nicht leer ist.
- Ein String wird als false ausgewertet, wenn er ein leerer String ist. Andernfalls wird er als true ausgewertet.
- Ein Objekt eines anderen Typs als der vier Grundtypen wird in ein Boolean umgewandelt, wobei die Umwandlung von diesem Typ abhängt.

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-boolean)

## Gecko-Unterstützung

Unterstützt.
