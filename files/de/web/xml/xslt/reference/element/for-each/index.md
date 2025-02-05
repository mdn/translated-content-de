---
title: <xsl:for-each>
slug: Web/XML/XSLT/Reference/Element/for-each
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:for-each>`-Element wählt eine Menge von Knoten aus und verarbeitet jeden dieser Knoten auf die gleiche Weise. Es wird häufig verwendet, um durch eine Menge von Knoten zu iterieren oder um den aktuellen Knoten zu ändern. Wenn ein oder mehrere `<xsl:sort>`-Elemente als Kinder dieses Elements vorkommen, erfolgt das Sortieren vor der Verarbeitung. Ansonsten werden die Knoten in der Dokumentreihenfolge verarbeitet.

## Syntax

```xml
<xsl:for-each select=EXPRESSION>
  <xsl:sort> [optional]
  TEMPLATE
</xsl:for-each>
```

### Erforderliche Attribute

- `select`
  - : Verwendet einen XPath-Ausdruck, um die zu verarbeitenden Knoten auszuwählen.

### Optionale Attribute

Keine.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 8.

## Gecko-Unterstützung

Unterstützt.
