---
title: boolean
slug: Web/XML/XPath/Reference/Functions/boolean
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `boolean` wertet einen Ausdruck aus und gibt true oder false zurück.

## Syntax

```js-nolint
boolean( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck, der ausgewertet werden soll. Der Ausdruck kann sich auf Zahlen und Knotenmengen sowie auf Booleans beziehen.

### Rückgabewert

Boolean `true` oder `false` nach der Auswertung von `expression`.

## Beschreibung

- Eine Zahl wird als false ausgewertet, wenn sie positiv oder negativ null oder `NaN` ist. Andernfalls wird sie true ausgewertet.
- Eine Knotenmenge wird als true ausgewertet, wenn sie nicht leer ist.
- Ein Zeichenfolgen wird als false ausgewertet, wenn es ein leerer String ist. Andernfalls wird sie als true ausgewertet.
- Ein Objekt eines anderen Typs als den vier Grundtypen wird auf eine Weise in einen Boolean konvertiert, die von diesem Typ abhängt.

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/xpath-10/#function-boolean)

## Gecko-Unterstützung

Unterstützt.
