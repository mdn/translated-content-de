---
title: element-verfügbar
slug: Web/XPath/Functions/element-available
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `element-available` bestimmt, ob ein Element verfügbar ist, und gibt true oder false zurück.

## Syntax

```plain
element-available( QName )
```

### Parameter

- `QName`
  - : Muss zu einem gültigen QName ausgewertet werden. Der QName wird unter Verwendung der Namensraumdeklarationen, die für den Ausdruck im Geltungsbereich sind, in einen erweiterten Namen umgewandelt.

### Rückgabewert

Gibt true zurück, wenn und nur wenn der erweiterte Name der Name einer Anweisung ist. Wenn der erweiterte Name eine Namensraum-URI hat, die der XSLT-Namensraum-URI entspricht, bezieht er sich auf ein von XSLT definiertes Element. Andernfalls bezieht es sich auf ein Erweiterungselement. Wenn der erweiterte Name eine leere Namensraum-URI hat, gibt die Funktion element-available false zurück.

## Spezifikationen

[XSLT 1.0 15](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-element-available)

## Gecko-Unterstützung

Unterstützt.
