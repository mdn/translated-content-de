---
title: <xsl:with-param>
slug: Web/XSLT/Reference/Element/with-param
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:with-param>`-Element legt den Wert eines Parameters fest, der in eine Vorlage übergeben werden soll.

## Syntax

```xml
<xsl:with-param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:with-param>
```

### Erforderliche Attribute

- `name`
  - : Gibt diesem Parameter einen Namen.

### Optionale Attribute

- `select`
  - : Definiert den Wert des Parameters durch einen XPath-Ausdruck. Wenn das Element eine Vorlage enthält, wird dieses Attribut ignoriert.

### Typ

Unteranweisung, erscheint immer innerhalb eines `<xsl:apply-templates>` oder eines `<xsl:call-template>`-Elements.

## Spezifikationen

XSLT 11.6

## Unterstützung in Gecko

Unterstützt.
