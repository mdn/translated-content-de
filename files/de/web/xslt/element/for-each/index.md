---
title: <xsl:for-each>
slug: Web/XSLT/Element/for-each
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:for-each>`-Element wählt eine Menge von Knoten aus und verarbeitet jeden von ihnen auf die gleiche Weise. Es wird häufig verwendet, um eine Menge von Knoten zu durchlaufen oder den aktuellen Knoten zu ändern. Erscheinen ein oder mehrere `<xsl:sort>`-Elemente als Kinder dieses Elements, erfolgt das Sortieren vor der Verarbeitung. Andernfalls werden Knoten in der Dokumentreihenfolge verarbeitet.

## Syntax

```xml
<xsl:for-each select=EXPRESSION>
  <xsl:sort> [optional]
  TEMPLATE
</xsl:for-each>
```

### Erforderliche Attribute

- `select`
  - : Verwendet einen XPath-Ausdruck, um Knoten auszuwählen, die verarbeitet werden sollen.

### Optionale Attribute

Keine.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 8.

## Gecko-Unterstützung

Unterstützt.
