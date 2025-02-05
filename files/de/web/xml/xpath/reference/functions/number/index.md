---
title: number
slug: Web/XML/XPath/Reference/Functions/number
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `number` konvertiert ein Objekt in eine Zahl und gibt die Zahl zurück.

## Syntax

```plain
number( [object] )
```

### Parameter

- `object` (optional)
  - : Das Objekt, das in eine Zahl konvertiert werden soll. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Die resultierende Zahl nach der Konvertierung des Objekts.

## Beschreibung

- Strings werden in eine Zahl konvertiert, indem führende Leerzeichen im String vor der Zahl entfernt und Leerzeichen nach der Zahl ignoriert werden. Wenn der String nicht diesem Muster entspricht, wird der String in `NaN` konvertiert.
- Der boolesche Wert `true` wird in 1 konvertiert. `false` wird in 0 konvertiert.
- Eine Knotenmenge wird zuerst in einen String konvertiert, als ob sie durch einen Aufruf der Funktion [string()](/de/docs/Web/XML/XPath/Reference/Functions/string) umgewandelt würde, und dann auf die gleiche Weise wie ein String-Argument konvertiert.
- Ein Objekt eines anderen Typs als die vier grundlegenden Typen wird auf eine Weise in eine Zahl konvertiert, die vom jeweiligen Typ abhängt.

## Spezifikationen

[XPath 1.0 4.4](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-number)

## Gecko-Unterstützung

Unterstützt.
