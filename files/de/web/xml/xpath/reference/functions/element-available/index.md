---
title: element-available
slug: Web/XML/XPath/Reference/Functions/element-available
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `element-available` bestimmt, ob ein Element verfügbar ist, und gibt entweder wahr oder falsch zurück.

## Syntax

```plain
element-available( QName )
```

### Parameter

- `QName`
  - : Muss zu einem gültigen QName ausgewertet werden. Der QName wird unter Verwendung der im Ausdruck aktiven Namespace-Deklarationen in einen erweiterten Namen umgewandelt.

### Rückgabewert

Gibt wahr zurück, wenn und nur wenn der erweiterte Name der Name einer Anweisung ist. Wenn der erweiterte Name einen Namespace-URI hat, der dem XSLT-Namespace-URI entspricht, bezieht er sich auf ein von XSLT definiertes Element. Andernfalls bezieht es sich auf ein Erweiterungselement. Hat der erweiterte Name einen null Namespace-URI, gibt die Funktion `element-available` falsch zurück.

## Spezifikationen

[XSLT 1.0 15](https://www.w3.org/TR/xslt-10/#function-element-available)

## Gecko-Unterstützung

Unterstützt.
