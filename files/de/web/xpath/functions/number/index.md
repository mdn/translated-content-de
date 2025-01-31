---
title: number
slug: Web/XPath/Functions/number
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
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

- Zeichenfolgen werden in eine Zahl konvertiert, indem führende Leerzeichen in der Zeichenfolge vor der Zahl entfernt werden und Leerzeichen nach der Zahl ignoriert werden. Wenn die Zeichenfolge nicht diesem Muster entspricht, wird die Zeichenfolge in NaN umgewandelt.
- Boolean true wird in 1 umgewandelt. False wird in 0 umgewandelt.
- Eine Knotenmenge wird zuerst in eine Zeichenfolge konvertiert, als ob eine Aufruf der [string()](/de/docs/Web/XPath/Functions/string)-Funktion erfolgt wäre, und dann auf die gleiche Weise wie ein Zeichenfolgenargument konvertiert.
- Ein Objekt eines anderen Typs als die vier Basistypen wird auf eine Weise in eine Zahl konvertiert, die von diesem Typ abhängt.

## Spezifikationen

[XPath 1.0 4.4](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-number)

## Gecko-Unterstützung

Unterstützt.
