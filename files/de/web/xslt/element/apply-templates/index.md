---
title: <xsl:apply-templates>
slug: Web/XSLT/Element/apply-templates
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:apply-templates>`-Element wählt eine Menge von Knoten im Eingabebaum aus und weist den Prozessor an, die entsprechenden Vorlagen auf sie anzuwenden.

## Syntax

```xml
<xsl:apply-templates select=EXPRESSION mode=NAME>
  <xsl:with-param> [optional]
  <xsl:sort> [optional]
</xsl:apply-templates>
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `select`
  - : Verwendet einen XPath-Ausdruck, der die zu verarbeitenden Knoten spezifiziert. Ein Sternchen (`*`) wählt die gesamte Knotenmenge aus. Wenn dieses Attribut nicht gesetzt ist, werden alle Kindknoten des aktuellen Knotens ausgewählt.
- `mode`
  - : Wenn es mehrere Möglichkeiten der Verarbeitung für denselben Knoten gibt, unterscheidet es zwischen ihnen.

### Typ

Instruktion, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT Abschnitt 5.4.

## Browser-Kompatibilität

Unterstützt.
