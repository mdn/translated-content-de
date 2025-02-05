---
title: <xsl:when>
slug: Web/XML/XSLT/Reference/Element/when
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:when>`-Element erscheint immer innerhalb eines `<xsl:choose>`-Elements und fungiert wie eine Case-Anweisung.

## Syntax

```xml
<xsl:when test=EXPRESSION>
  TEMPLATE
</xsl:when>
```

### Erforderliche Attribute

- `test`
  - : Gibt einen booleschen Ausdruck an, der ausgewertet wird. Wenn der Ausdruck wahr ist, wird der Inhalt des Elements verarbeitet; wenn er falsch ist, wird er ignoriert.

### Optionale Attribute

Keine.

### Typ

Unteranweisung, erscheint immer innerhalb eines `<xsl:choose>`-Elements.

## Spezifikationen

XSLT, Abschnitt 9.2.

## Gecko-Unterstützung

Unterstützt.
