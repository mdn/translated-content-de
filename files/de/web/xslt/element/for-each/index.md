---
title: <xsl:for-each>
slug: Web/XSLT/Element/for-each
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:for-each>`-Element wählt eine Menge von Knoten aus und verarbeitet jeden von ihnen auf die gleiche Weise. Es wird häufig verwendet, um durch eine Menge von Knoten zu iterieren oder um den aktuellen Knoten zu ändern. Wenn ein oder mehrere `<xsl:sort>`-Elemente als Kinder dieses Elements erscheinen, erfolgt die Sortierung vor der Verarbeitung. Andernfalls werden die Knoten in Dokumentenreihenfolge verarbeitet.

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

## Gecko-Kompatibilität

Unterstützt.
