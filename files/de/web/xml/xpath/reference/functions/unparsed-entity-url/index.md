---
title: unparsed-entity-url
slug: Web/XML/XPath/Reference/Functions/unparsed-entity-url
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `unparsed-entity-url()` gibt den URI der nicht geparsten Entität mit dem angegebenen Namen zurück. Dies sind nicht-XML-Daten, die in der DTD des Quelldokuments referenziert werden.

## Syntax

```plain
string unparsed-entity-url(string)
```

### Parameter

Der Name der nicht geparsten Entität. Wenn das Argument keine Zeichenkette ist, wird es mit den Regeln der `string()`-Funktion konvertiert. Der Name sollte ein XML-Name sein.

### Rückgabewert

Der URI der nicht geparsten Entität, der aus der DTD abgerufen wurde, falls vorhanden. Andernfalls ein leerer String.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt-10/#function-unparsed-entity-uri)

## Gecko-Unterstützung

Nicht unterstützt.
