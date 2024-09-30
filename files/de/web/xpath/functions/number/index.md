---
title: number
slug: Web/XPath/Functions/number
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `number` konvertiert ein Objekt in eine Zahl und gibt die Zahl zurück.

## Syntax

```plain
number( [object] )
```

### Parameter

- `object` (optional)
  - : Das Objekt, das in eine Zahl umgewandelt werden soll. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Die resultierende Zahl nach der Konvertierung des Objekts.

## Beschreibung

- Zeichenketten werden in eine Zahl umgewandelt, indem führende Leerzeichen in der Zeichenkette vor der Zahl entfernt werden und Leerzeichen nach der Zahl ignoriert werden. Wenn die Zeichenkette diesem Muster nicht entspricht, wird die Zeichenkette in NaN konvertiert.
- Boolean true wird in 1 umgewandelt. False wird in 0 umgewandelt.
- Eine Knotenmenge wird zuerst in eine Zeichenkette umgewandelt, als ob durch einen Aufruf der Funktion [string()](/de/docs/Web/XPath/Functions/string), und dann auf die gleiche Weise wie ein Zeichenkettenargument konvertiert.
- Ein Objekt eines anderen Typs als der vier Basistypen wird in eine Zahl auf eine Weise konvertiert, die von diesem Typ abhängig ist.

## Spezifikationen

[XPath 1.0 4.4](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-number)

## Browser-Kompatibilität

Unterstützt.
