---
title: <xsl:for-each>
slug: Web/XSLT/Reference/Element/for-each
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:for-each>`-Element wählt eine Menge von Knoten aus und verarbeitet jeden von ihnen auf die gleiche Weise. Es wird oft verwendet, um eine Menge von Knoten zu durchlaufen oder um den aktuellen Knoten zu ändern. Wenn ein oder mehrere `<xsl:sort>`-Elemente als Kinder dieses Elements erscheinen, erfolgt das Sortieren vor der Verarbeitung. Ansonsten werden die Knoten in der Dokumentreihenfolge verarbeitet.

## Syntax

```xml
<xsl:for-each select=EXPRESSION>
  <xsl:sort> [optional]
  TEMPLATE
</xsl:for-each>
```

### Erforderliche Attribute

- `select`
  - : Verwendet einen XPath-Ausdruck, um Knoten zur Verarbeitung auszuwählen.

### Optionale Attribute

Keine.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 8.

## Gecko-Unterstützung

Unterstützt.
