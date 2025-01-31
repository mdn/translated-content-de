---
title: "false"
slug: Web/XPath/Functions/false
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `false` Funktion gibt einen booleschen Wert `false` zurück.

## Syntax

```plain
false()
```

### Rückgabewert

Boolescher Wert `false`.

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
