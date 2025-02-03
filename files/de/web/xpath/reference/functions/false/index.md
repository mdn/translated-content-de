---
title: "false"
slug: Web/XPath/Reference/Functions/false
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `false` Funktion gibt einen boolean Wert `false` zurück.

## Syntax

```plain
false()
```

### Rückgabewert

Boolean `false`.

## Beschreibung

Diese Funktion ist nützlich als Teil eines Vergleichs:

```xml
<xsl:if test="boolean((1 &gt; 2) = false())">
  The expression evaluates as true
</xsl:if>
```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-false)

## Gecko-Unterstützung

Unterstützt.
