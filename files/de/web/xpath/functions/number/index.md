---
title: number
slug: Web/XPath/Functions/number
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die `number`-Funktion konvertiert ein Objekt in eine Zahl und gibt die Zahl zurück.

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

- Zeichenfolgen werden in eine Zahl umgewandelt, indem führende Leerzeichen in der Zeichenfolge vor der Zahl entfernt und Leerzeichen nach der Zahl ignoriert werden. Wenn die Zeichenfolge diesem Muster nicht entspricht, wird sie in NaN umgewandelt.
- Wahrheitswerte werden folgendermaßen umgewandelt: Wahr wird zu 1, Falsch wird zu 0.
- Eine Knotenmenge wird zuerst in eine Zeichenfolge umgewandelt, als ob der [string()](/de/docs/Web/XPath/Functions/string)-Funktion aufgerufen worden wäre, und dann auf dieselbe Weise wie ein Zeichenfolgenargument konvertiert.
- Ein Objekt eines anderen Typs als der vier Grundtypen wird in einer von diesem Typ abhängigen Weise in eine Zahl umgewandelt.

## Spezifikationen

[XPath 1.0 4.4](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-number)

## Gecko-Unterstützung

Unterstützt.
