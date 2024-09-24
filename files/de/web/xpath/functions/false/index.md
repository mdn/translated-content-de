---
title: "false"
slug: Web/XPath/Functions/false
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `false` gibt den booleschen Wert false zurück.

## Syntax

```plain
false()
```

### Rückgabewert

Boolescher Wert `false`.

## Beschreibung

Diese Funktion ist nützlich in einem Vergleich:

```xml
<xsl:if test="boolean((1 &gt; 2) = false())">
  The expression evaluates as true
</xsl:if>
```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-false)

## Gecko-Unterstützung

Unterstützt.
