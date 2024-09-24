---
title: <xsl:when>
slug: Web/XSLT/Element/when
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:when>` Element erscheint immer innerhalb eines `<xsl:choose>` Elements und fungiert ähnlich wie eine Case-Anweisung.

## Syntax

```xml
<xsl:when test=EXPRESSION>
  TEMPLATE
</xsl:when>
```

### Erforderliche Attribute

- `test`
  - : Legt einen booleschen Ausdruck fest, der ausgewertet wird. Wenn der Ausdruck wahr ist, wird der Inhalt des Elements verarbeitet; wenn er falsch ist, wird er ignoriert.

### Optionale Attribute

Keine.

### Typ

Subanweisung, erscheint immer innerhalb eines `<xsl:choose>` Elements.

## Spezifikationen

XSLT, Abschnitt 9.2.

## Gecko-Unterstützung

Unterstützt.
