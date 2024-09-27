---
title: unparsed-entity-url
slug: Web/XPath/Functions/unparsed-entity-url
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `unparsed-entity-url()` liefert die URI der nicht-geparsten Entität mit dem angegebenen Namen. Dies sind nicht-XML-Daten, die in der DTD des Quelldokuments referenziert werden.

## Syntax

```plain
string unparsed-entity-url(string)
```

### Parameter

Der Name der nicht-geparsten Entität. Wenn das Argument kein String ist, wird es mit den Regeln der `string()`-Funktion umgewandelt. Der Name sollte ein XML Name sein.

### Rückgabewert

Die URI der nicht-geparsten Entität, die aus der DTD abgerufen wurde, falls vorhanden. Andernfalls ein leerer String.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-unparsed-entity-uri)

## Gecko-Unterstützung

Nicht unterstützt.
