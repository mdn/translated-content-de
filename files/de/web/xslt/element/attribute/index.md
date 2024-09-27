---
title: <xsl:attribute>
slug: Web/XSLT/Element/attribute
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:attribute>`-Element erzeugt ein Attribut im Ausgabedokument, unter Verwendung von Werten, die aus dem Stylesheet zugänglich sind. Das Element muss vor jedem anderen Ausgabedokumentelement definiert werden, innerhalb des Ausgabedokumentelements, für das es Attributwerte festlegt. Es kann jedoch nach oder innerhalb von Elementen stehen, die nicht Teil der Ausgabe sein werden (wie `<xsl:choose>` oder `<xsl:apply-templates>` usw.).

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

Instruktion, erscheint innerhalb eines Templates oder eines `<xsl:attribute-set>`-Elements.

## Spezifikationen

XSLT, Abschnitt 7.1.3.

## Gecko-Unterstützung

Unterstützt.
