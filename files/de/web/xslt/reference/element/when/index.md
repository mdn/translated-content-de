---
title: <xsl:when>
slug: Web/XSLT/Reference/Element/when
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:when>` Element erscheint immer innerhalb eines `<xsl:choose>` Elements und fungiert ähnlich wie eine Fallunterscheidung.

## Syntax

```xml
<xsl:when test=EXPRESSION>
  TEMPLATE
</xsl:when>
```

### Erforderliche Attribute

- `test`
  - : Gibt einen booleschen Ausdruck an, der ausgewertet wird. Wenn wahr, werden die Inhalte des Elements verarbeitet; wenn falsch, werden sie ignoriert.

### Optionale Attribute

Keine.

### Typ

Unteranweisung, erscheint immer innerhalb eines `<xsl:choose>` Elements.

## Spezifikationen

XSLT, Abschnitt 9.2.

## Gecko-Unterstützung

Unterstützt.
