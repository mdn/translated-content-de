---
title: number
slug: Web/XML/XPath/Reference/Functions/number
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die `number` Funktion konvertiert ein Objekt in eine Zahl und gibt die Zahl zurück.

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

- Zeichenfolgen werden in eine Zahl umgewandelt, indem führende Leerzeichen in der Zeichenfolge vor der Zahl entfernt werden und Leerzeichen nach der Zahl ignoriert werden. Wenn die Zeichenfolge diesem Muster nicht entspricht, wird sie in NaN umgewandelt.
- Boolean true wird in 1 konvertiert. False wird in 0 konvertiert.
- Ein Knoten-Set wird zuerst in eine Zeichenfolge umgewandelt, als ob durch einen Aufruf der [string()](/de/docs/Web/XML/XPath/Reference/Functions/string) Funktion, und dann auf die gleiche Weise wie ein Zeichenfolgenargument konvertiert.
- Ein Objekt eines anderen Typs als der vier Basistypen wird in einer Weise, die von diesem Typ abhängt, in eine Zahl konvertiert.

## Spezifikationen

[XPath 1.0 4.4](https://www.w3.org/TR/xpath-10/#function-number)

## Gecko-Unterstützung

Unterstützt.
