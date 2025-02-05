---
title: <xsl:attribute>
slug: Web/XML/XSLT/Reference/Element/attribute
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:attribute>`-Element erstellt ein Attribut im Ausgabedokument, indem es Werte verwendet, die aus dem Stylesheet zugänglich sind. Das Element muss definiert werden, bevor andere Elemente des Ausgabedokuments innerhalb des Ausgabedokumentelements, für das es Attributwerte festlegt, erscheinen. Es kann jedoch nach oder innerhalb von Elementen stehen, die nicht Teil der Ausgabe sind (wie `<xsl:choose>` oder `<xsl:apply-templates>` usw.).

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
  - : Definiert die Namespace-URI für dieses Attribut im Ausgabedokument. Sie können das zugehörige Namespace-Präfix mit diesem Element nicht festlegen.

### Typ

Instruktion, erscheint innerhalb einer Vorlage oder eines `<xsl:attribute-set>`-Elements.

## Spezifikationen

XSLT, Abschnitt 7.1.3.

## Gecko-Unterstützung

Unterstützt.
