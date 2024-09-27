---
title: <xsl:element>
slug: Web/XSLT/Element/element
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:element>`-Element erstellt ein Element im Ausgabedokument.

## Syntax

```xml
<xsl:element name=NAME namespace=URI use-attribute-sets=LIST-OF-NAMES >
  TEMPLATE
</xsl:element>
```

### Erforderliche Attribute

- `name`
  - : Gibt den gewünschten Namen des Ausgabeelements an. Der Name muss ein gültiger QName sein.

### Optionale Attribute

- `namespace`
  - : Gibt den Namensraum des Ausgabeelements an.
- `use-attribute-sets`
  - : Eine durch Leerzeichen getrennte Liste von [`attribute-set`-Element](/de/docs/Web/XSLT/Element/attribute-set)-Namen, die auf das Ausgabeelement des `element`-Elements angewendet werden sollen. Angewendete Attribute können über verschachtelte `attribute`-Elemente überschrieben werden.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.1.2.

## Browser-Kompatibilität

Unterstützt.
