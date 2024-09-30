---
title: <xsl:choose>
slug: Web/XSLT/Element/choose
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:choose>`-Element definiert eine Auswahl zwischen mehreren Alternativen. Es verhält sich wie eine `switch`-Anweisung in prozeduralen Programmiersprachen.

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

Anweisung, erscheint mit einem Template. Es enthält ein oder mehrere `<xsl:when>`-Elemente und optional ein abschließendes `<xsl:otherwise>`-Element.

## Spezifikationen

XSLT, Abschnitt 9.2.

## Gecko-Unterstützung

Unterstützt.
