---
title: <xsl:apply-templates>
slug: Web/XSLT/Reference/Element/apply-templates
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

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
  - : Verwendet einen XPath-Ausdruck, der die zu verarbeitenden Knoten angibt. Ein Sternchen (`*`) wählt die gesamte Knotenmenge aus. Wenn dieses Attribut nicht gesetzt ist, werden alle Kindknoten des aktuellen Knotens ausgewählt.
- `mode`
  - : Wenn es mehrere Verarbeitungswege für denselben Knoten gibt, unterscheidet er zwischen ihnen.

### Typ

Instruktion, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT Abschnitt 5.4.

## Gecko-Unterstützung

Unterstützt.
