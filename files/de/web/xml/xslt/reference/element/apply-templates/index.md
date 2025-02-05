---
title: <xsl:apply-templates>
slug: Web/XML/XSLT/Reference/Element/apply-templates
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:apply-templates>` Element wählt einen Satz von Knoten im Eingabebaum aus und weist den Prozessor an, die entsprechenden Vorlagen darauf anzuwenden.

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
  - : Verwendet einen XPath-Ausdruck, der die zu verarbeitenden Knoten angibt. Ein Sternchen (`*`) wählt das gesamte Knotenset aus. Wenn dieses Attribut nicht gesetzt ist, werden alle untergeordneten Knoten des aktuellen Knotens ausgewählt.
- `mode`
  - : Wenn es mehrere Möglichkeiten zur Verarbeitung desselben Knotens gibt, unterscheidet dieses Attribut zwischen ihnen.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT Abschnitt 5.4.

## Gecko-Unterstützung

Unterstützt.
