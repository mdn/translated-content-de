---
title: element-available
slug: Web/XPath/Functions/element-available
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die Funktion `element-available` bestimmt, ob ein Element verfügbar ist und gibt true oder false zurück.

## Syntax

```plain
element-available( QName )
```

### Parameter

- `QName`
  - : Muss zu einem gültigen QName ausgewertet werden. Der QName wird unter Verwendung der im Geltungsbereich der Ausdrucks vorhandenen Namespacedeklarationen in einen Expanded-Name umgewandelt.

### Rückgabewert

Gibt true zurück, wenn und nur wenn der Expanded-Name der Name einer Anweisung ist. Wenn der Expanded-Name eine Namespace-URI hat, die der XSLT-Namespace-URI entspricht, bezieht sich dies auf ein von XSLT definiertes Element. Andernfalls bezieht es sich auf ein Erweiterungselement. Wenn der Expanded-Name eine null Namespace-URI hat, gibt die Funktion element-available false zurück.

## Spezifikationen

[XSLT 1.0 15](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-element-available)

## Gecko-Unterstützung

Unterstützt.
