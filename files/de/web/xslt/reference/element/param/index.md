---
title: <xsl:param>
slug: Web/XSLT/Reference/Element/param
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:param>`-Element definiert einen Parameter nach Namen und optional einen Standardwert für diesen Parameter. Wenn es als oberstes Element verwendet wird, ist der Parameter global. Wenn es innerhalb eines `<xsl:template>`-Elements verwendet wird, ist der Parameter lokal für dieses Template. In diesem Fall muss es das erste Kindelement des Templates sein.

## Syntax

```xml
<xsl:param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:param>
```

### Erforderliche Attribute

- `name`
  - : Gibt den Namen des Parameters an. Dies muss ein QName sein.

### Optionale Attribute

- `select`
  - : Verwendet einen XPath-Ausdruck, um einen Standardwert bereitzustellen, falls keiner angegeben ist.

### Typ

Anweisung, kann als oberstes Element oder innerhalb eines Templates erscheinen.

## Spezifikationen

XSLT, Abschnitt 11.

## Gecko-Unterstützung

Unterstützt.
