---
title: element-available
slug: Web/XML/XPath/Reference/Functions/element-available
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `element-available` bestimmt, ob ein Element verfügbar ist, und gibt true oder false zurück.

## Syntax

```plain
element-available( QName )
```

### Parameter

- `QName`
  - : Muss zu einem gültigen `QName` ausgewertet werden. Der `QName` wird mithilfe der in der Umgebung der Ausdrucksauswertung deklarierten Namensraum-Deklarationen in einen erweiterten Namen (expanded-name) umgewandelt.

### Rückgabewert

Gibt true zurück, wenn und nur wenn der erweiterte Name der Name einer Anweisung ist. Wenn der erweiterte Name eine Namensraum-URI hat, die der XSLT-Namensraum-URI entspricht, dann bezieht er sich auf ein durch XSLT definiertes Element. Andernfalls bezieht er sich auf ein Erweiterungselement. Hat der erweiterte Name eine null Namensraum-URI, gibt die Funktion `element-available` false zurück.

## Spezifikationen

[XSLT 1.0 15](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-element-available)

## Gecko-Kompatibilität

Wird unterstützt.
