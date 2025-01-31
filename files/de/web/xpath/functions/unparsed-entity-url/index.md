---
title: unparsed-entity-url
slug: Web/XPath/Functions/unparsed-entity-url
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die Funktion `unparsed-entity-url()` gibt die URI der nicht analysierten Entität mit dem angegebenen Namen zurück. Dies sind nicht-XML-Daten, die im DTD des Quelldokuments referenziert werden.

## Syntax

```plain
string unparsed-entity-url(string)
```

### Parameter

Der Name der nicht analysierten Entität. Wenn das Argument kein String ist, wird es gemäß den Regeln der Funktion string() umgewandelt. Der Name sollte ein XML-Name sein.

### Rückgabewert

Die URI der nicht analysierten Entität, die aus dem DTD abgerufen wurde, sofern sie existiert. Andernfalls ein leerer String.

## Spezifikationen

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-unparsed-entity-uri)

## Gecko-Unterstützung

Nicht unterstützt.
