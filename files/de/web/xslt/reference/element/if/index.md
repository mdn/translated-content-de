---
title: <xsl:if>
slug: Web/XSLT/Reference/Element/if
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:if>`-Element enthält ein Testattribut und eine Vorlage. Wenn der Test als wahr bewertet wird, wird die Vorlage verarbeitet. In dieser Hinsicht ähnelt es einer if-Anweisung in anderen Sprachen. Um jedoch die Funktionalität einer if-then-else-Anweisung zu erreichen, verwenden Sie das `<xsl:choose>`-Element mit einem `<xsl:when>`- und einem `<xsl:otherwise>`-Kind.

## Syntax

```xml
<xsl:if test=EXPRESSION>
  TEMPLATE
</xsl:if>
```

### Erforderliche Attribute

- `test`
  - : Enthält einen XPath-Ausdruck, der (bei Bedarf unter Verwendung der für `boolean( )` definierten Regeln) als boolescher Wert ausgewertet werden kann. Ist der Wert wahr, wird die Vorlage verarbeitet; andernfalls erfolgt keine Aktion.

### Optionale Attribute

Keine.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSL Abschnitt 9.1.

## Gecko-Unterstützung

Unterstützt
