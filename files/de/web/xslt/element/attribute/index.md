---
title: <xsl:attribute>
slug: Web/XSLT/Element/attribute
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:attribute>`-Element erstellt ein Attribut im Ausgabedokument, indem es auf beliebige Werte zugreift, die aus dem Stylesheet erreichbar sind. Das Element muss definiert werden, bevor andere Elemente des Ausgabedokuments innerhalb des Ausgabedokument-Elements stehen, für das es Attributwerte festlegt. Es kann jedoch nach oder innerhalb von Elementen stehen, die nicht Teil der Ausgabe sein werden (wie `<xsl:choose>` oder `<xsl:apply-templates>` usw.).

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
  - : Definiert die Namensraum-URI für dieses Attribut im Ausgabedokument. Sie können das zugehörige Namensraum-Präfix mit diesem Element nicht festlegen.

### Typ

Instruktion, erscheint innerhalb einer Vorlage oder eines `<xsl:attribute-set>`-Elements.

## Spezifikationen

XSLT, Abschnitt 7.1.3.

## Gecko-Unterstützung

Unterstützt.
