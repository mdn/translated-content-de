---
title: number
slug: Web/XPath/Reference/Functions/number
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `number`-Funktion konvertiert ein Objekt in eine Zahl und gibt die Zahl zurück.

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

- Zeichenketten werden in eine Zahl umgewandelt, indem das führende Leerzeichen in der Zeichenkette vor der Zahl entfernt und Leerzeichen nach der Zahl ignoriert werden. Wenn die Zeichenkette diesem Muster nicht entspricht, wird die Zeichenkette in NaN konvertiert.
- Der Boolean-Wert true wird in 1 konvertiert. False wird in 0 konvertiert.
- Eine Knotenmenge wird zuerst in eine Zeichenkette umgewandelt, als ob sie durch einen Aufruf der [string()](/de/docs/Web/XPath/Reference/Functions/string)-Funktion erfolgt wäre, und dann auf die gleiche Weise wie ein Zeichenketten-Argument konvertiert.
- Ein Objekt eines anderen Typs als der vier Basistypen wird in eine Zahl in einer Weise konvertiert, die von diesem Typ abhängt.

## Spezifikationen

[XPath 1.0 4.4](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-number)

## Gecko-Unterstützung

Unterstützt.
