---
title: <xsl:param>
slug: Web/XSLT/Element/param
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:param>`-Element legt einen Parameter nach Namen fest und optional einen Standardwert für diesen Parameter. Wenn es als oberstes Element verwendet wird, ist der Parameter global. Wenn es innerhalb eines `<xsl:template>`-Elements verwendet wird, ist der Parameter lokal für diese Vorlage. In diesem Fall muss es das erste Kindelement der Vorlage sein.

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
  - : Verwendet einen XPath-Ausdruck, um einen Standardwert bereitzustellen, wenn keiner angegeben ist.

### Typ

Anweisung, kann als oberstes Element oder innerhalb einer Vorlage erscheinen.

## Spezifikationen

XSLT, Abschnitt 11.

## Gecko-Unterstützung

Unterstützt.
