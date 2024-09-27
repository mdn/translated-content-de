---
title: <xsl:when>
slug: Web/XSLT/Element/when
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:when>`-Element erscheint immer innerhalb eines `<xsl:choose>`-Elements und fungiert wie eine Fallunterscheidung.

## Syntax

```xml
<xsl:when test=EXPRESSION>
  TEMPLATE
</xsl:when>
```

### Erforderliche Attribute

- `test`
  - : Gibt einen booleschen Ausdruck an, der ausgewertet wird. Wenn er wahr ist, wird der Inhalt des Elements verarbeitet; wenn er falsch ist, wird er ignoriert.

### Optionale Attribute

Keine.

### Typ

Unteranweisung, erscheint immer innerhalb eines `<xsl:choose>`-Elements.

## Spezifikationen

XSLT, Abschnitt 9.2.

## Gecko-Unterstützung

Unterstützt.
