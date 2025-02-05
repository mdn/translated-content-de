---
title: <xsl:variable>
slug: Web/XML/XSLT/Reference/Element/variable
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:variable>`-Element deklariert eine globale oder lokale Variable in einem Stylesheet und weist ihr einen Wert zu. Da XSLT keine Nebenwirkungen zulässt, bleibt der Wert der Variable unverändert, sobald er einmal festgelegt wurde, bis die Variable außer Reichweite ist.

## Syntax

```xml
<xsl:variable name=NAME select=EXPRESSION >
  TEMPLATE
</xsl:variable>
```

### Erforderliche Attribute

- `name`
  - : Gibt der Variable einen Namen.

### Optionale Attribute

- `select`
  - : Definiert den Wert der Variable durch einen XPath-Ausdruck. Wenn das Element eine Vorlage enthält, wird dieses Attribut ignoriert.

### Typ

Top-Level oder Anweisung. Wenn es als Top-Level-Element vorkommt, ist die Variable global im Geltungsbereich und kann im gesamten Dokument verwendet werden. Tritt es innerhalb einer Vorlage auf, ist die Variable lokal im Geltungsbereich und nur innerhalb der Vorlage zugänglich, in der sie vorkommt.

## Spezifikationen

XSLT, Abschnitt 11.

## Gecko-Unterstützung

Unterstützt.
