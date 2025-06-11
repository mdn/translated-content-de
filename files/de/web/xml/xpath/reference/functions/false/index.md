---
title: "false"
slug: Web/XML/XPath/Reference/Functions/false
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `false` gibt den booleschen Wert false zurück.

## Syntax

```plain
false()
```

### Rückgabewert

Boolesches `false`.

## Beschreibung

Diese Funktion ist nützlich als Teil eines Vergleichs:

```xml
<xsl:if test="boolean((1 &gt; 2) = false())">
  The expression evaluates as true
</xsl:if>
```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/xpath-10/#function-false)

## Gecko-Unterstützung

Unterstützt.
