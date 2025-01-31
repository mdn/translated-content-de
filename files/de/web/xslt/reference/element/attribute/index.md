---
title: <xsl:attribute>
slug: Web/XSLT/Reference/Element/attribute
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:attribute>`-Element erstellt ein Attribut im Ausgabedokument, unter Verwendung von Werten, die aus dem Stylesheet zugänglich sind. Das Element muss vor jedem anderen Ausgabedokument-Element innerhalb des Ausgabedokument-Elements definiert werden, für das es Attributwerte festlegt. Es kann jedoch nach oder innerhalb von Elementen sein, die nicht Teil der Ausgabe sind (wie `<xsl:choose>` oder `<xsl:apply-templates>` usw.).

## Syntax

```xml
<xsl:attribute name=NAME namespace=URI>
  TEMPLATE
</xsl:attribute>
```

### Erforderliche Attribute

- `name`
  - : Gibt den Namen des Attributs an, das im Ausgabedokument erstellt werden soll. Der Name muss ein gültiger QName sein.

### Optionale Attribute

- `namespace`
  - : Definiert den Namespace-URI für dieses Attribut im Ausgabedokument. Sie können das zugehörige Namespace-Präfix mit diesem Element nicht festlegen.

### Typ

Anweisung, erscheint innerhalb einer Vorlage oder eines `<xsl:attribute-set>`-Elements.

## Spezifikationen

XSLT, Abschnitt 7.1.3.

## Gecko-Unterstützung

Unterstützt.
