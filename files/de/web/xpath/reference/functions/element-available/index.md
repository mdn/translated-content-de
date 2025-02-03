---
title: element-available
slug: Web/XPath/Reference/Functions/element-available
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die Funktion `element-available` bestimmt, ob ein Element verfügbar ist, und gibt wahr oder falsch zurück.

## Syntax

```plain
element-available( QName )
```

### Parameter

- `QName`
  - : Muss zu einem gültigen QName ausgewertet werden. Der QName wird unter Verwendung der Namensraumdeklarationen im Gültigkeitsbereich des Ausdrucks in einen erweiterten Namen umgewandelt.

### Rückgabewert

Gibt wahr zurück, wenn und nur wenn der erweiterte Name der Name einer Anweisung ist. Wenn der erweiterte Name eine Namensraum-URI gleich der XSLT-Namensraum-URI hat, dann bezieht er sich auf ein von XSLT definiertes Element. Andernfalls bezieht er sich auf ein Erweiterungselement. Falls der erweiterte Name eine null Namensraum-URI hat, wird die Funktion element-available falsch zurückgeben.

## Spezifikationen

[XSLT 1.0 15](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-element-available)

## Gecko-Unterstützung

Unterstützt.
