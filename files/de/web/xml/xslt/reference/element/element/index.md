---
title: <xsl:element>
slug: Web/XML/XSLT/Reference/Element/element
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:element>`-Element erstellt ein Element im Ausgabedokument.

## Syntax

```xml
<xsl:element name=NAME namespace=URI use-attribute-sets=LIST-OF-NAMES >
  TEMPLATE
</xsl:element>
```

### Erforderliche Attribute

- `name`
  - : Gibt den gewünschten Namen des Ausgabe-Elements an. Der Name muss ein gültiger QName sein.

### Optionale Attribute

- `namespace`
  - : Gibt den Namespace des Ausgabe-Elements an.
- `use-attribute-sets`
  - : Eine durch Leerzeichen getrennte Liste von [`attribute-set`-Element](/de/docs/Web/XML/XSLT/Reference/Element/attribute-set)-Namen, die auf das Ausgabe-Element des `element`-Elements angewendet werden sollen. Angewendete Attribute können durch geschachtelte `attribute`-Elemente überschrieben werden.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.1.2.

## Gecko-Unterstützung

Unterstützt.
