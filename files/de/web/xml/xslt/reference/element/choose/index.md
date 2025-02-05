---
title: <xsl:choose>
slug: Web/XML/XSLT/Reference/Element/choose
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:choose>`-Element definiert eine Auswahl zwischen mehreren Alternativen. Es verhält sich wie eine Switch-Anweisung in prozeduralen Sprachen.

## Syntax

```xml
<xsl:choose>
  <xsl:when test="[whatever to test1]"></xsl:when>
  <xsl:when test="[whatever to test2]"></xsl:when>
  <xsl:otherwise></xsl:otherwise> [optional]
</xsl:choose>
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

Keine.

### Typ

Anweisung, wird zusammen mit einer Vorlage verwendet. Es enthält ein oder mehrere `<xsl:when>`-Elemente und optional ein abschließendes `<xsl:otherwise>`-Element.

## Spezifikationen

XSLT, Abschnitt 9.2.

## Gecko-Unterstützung

Unterstützt.
