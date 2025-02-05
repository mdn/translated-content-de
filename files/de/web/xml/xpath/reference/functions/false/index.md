---
title: "false"
slug: Web/XML/XPath/Reference/Functions/false
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `false` gibt den booleschen Wert "false" zurück.

## Syntax

```plain
false()
```

### Rückgabewert

Boolescher Wert `false`.

## Beschreibung

Diese Funktion ist ein nützlicher Bestandteil eines Vergleichs:

```xml
<xsl:if test="boolean((1 &gt; 2) = false())">
  The expression evaluates as true
</xsl:if>
```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-false)

## Gecko-Unterstützung

Unterstützt.
