---
title: unparsed-entity-url
slug: Web/XML/XPath/Reference/Functions/unparsed-entity-url
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `unparsed-entity-url()` gibt die URI der nicht geparsten Entität mit dem angegebenen Namen zurück. Dies bezieht sich auf nicht-XML-Daten, die in der DTD des Quelldokuments referenziert werden.

## Syntax

```plain
string unparsed-entity-url(string)
```

### Parameter

Der Name der nicht geparsten Entität. Wenn das Argument kein String ist, wird es mithilfe der Regeln der Funktion `string()` konvertiert. Der Name sollte ein XML-Name sein.

### Rückgabewert

Die URI der aus der DTD abgerufenen nicht geparsten Entität, falls vorhanden. Andernfalls ein leerer String.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-unparsed-entity-uri)

## Gecko-Unterstützung

Nicht unterstützt.
