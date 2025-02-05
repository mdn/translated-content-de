---
title: <xsl:if>
slug: Web/XML/XSLT/Reference/Element/if
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:if>`-Element enthält ein `test`-Attribut und eine Vorlage. Wenn der Test als wahr evaluiert wird, wird die Vorlage verarbeitet. In dieser Hinsicht ähnelt es einer if-Anweisung in anderen Programmiersprachen. Für die Funktionalität einer if-then-else-Anweisung verwenden Sie jedoch das `<xsl:choose>`-Element mit einem `<xsl:when>`- und einem `<xsl:otherwise>`-Kind.

## Syntax

```xml
<xsl:if test=EXPRESSION>
  TEMPLATE
</xsl:if>
```

### Erforderliche Attribute

- `test`
  - : Enthält einen XPath-Ausdruck, der (unter Verwendung der definierten Regeln für `boolean( )`, falls erforderlich) zu einem booleschen Wert ausgewertet werden kann. Wenn der Wert wahr ist, wird die Vorlage verarbeitet; andernfalls erfolgt keine Aktion.

### Optionale Attribute

Keine.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSL Abschnitt 9.1.

## Gecko-Unterstützung

Unterstützt
