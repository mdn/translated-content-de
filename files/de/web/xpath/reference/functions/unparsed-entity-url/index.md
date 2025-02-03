---
title: unparsed-entity-url
slug: Web/XPath/Reference/Functions/unparsed-entity-url
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die Funktion `unparsed-entity-url()` gibt die URI der unbearbeiteten Entität mit dem angegebenen Namen zurück. Dies sind nicht-XML-Daten, die im DTD des Quelldokuments referenziert werden.

## Syntax

```plain
string unparsed-entity-url(string)
```

### Parameter

Der Name der unbearbeiteten Entität. Wenn das Argument kein String ist, wird es gemäß den Regeln der `string()`-Funktion konvertiert. Der Name sollte ein XML-Name sein.

### Rückgabewert

Die URI der aus dem DTD abgerufenen unbearbeiteten Entität, falls sie existiert. Andernfalls ein leerer String.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-unparsed-entity-uri)

## Gecko-Unterstützung

Nicht unterstützt.
