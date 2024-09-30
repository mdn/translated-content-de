---
title: <xsl:param>
slug: Web/XSLT/Element/param
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:param>`-Element legt einen Parameter nach Name und optional einen Standardwert für diesen Parameter fest. Wenn es als oberste Ebene verwendet wird, ist der Parameter global. Wenn es innerhalb eines `<xsl:template>`-Elements verwendet wird, ist der Parameter lokal für dieses Template. In diesem Fall muss es das erste Kindelement des Templates sein.

## Syntax

```xml
<xsl:param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:param>
```

### Erforderliche Attribute

- `name`
  - : Benennt den Parameter. Dies muss ein QName sein.

### Optionale Attribute

- `select`
  - : Verwendet einen XPath-Ausdruck, um einen Standardwert bereitzustellen, falls keiner angegeben ist.

### Typ

Anweisung, kann als oberste Elemente oder innerhalb eines Templates erscheinen.

## Spezifikationen

XSLT, Abschnitt 11.

## Gecko-Unterstützung

Unterstützt.
