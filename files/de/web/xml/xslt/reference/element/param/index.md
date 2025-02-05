---
title: <xsl:param>
slug: Web/XML/XSLT/Reference/Element/param
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:param>`-Element definiert einen Parameter anhand seines Namens und optional eines Standardwerts für diesen Parameter. Wenn es als oberstes Element verwendet wird, ist der Parameter global. Wenn es innerhalb eines `<xsl:template>`-Elements verwendet wird, ist der Parameter lokal für dieses Template. In diesem Fall muss es das erste Kindelement des Templates sein.

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

Anweisung, kann als oberstes Element oder innerhalb eines Templates erscheinen.

## Spezifikationen

XSLT, Abschnitt 11.

## Gecko-Unterstützung

Unterstützt.
