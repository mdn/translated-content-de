---
title: <xsl:if>
slug: Web/XSLT/Element/if
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:if>`-Element enthält ein `test`-Attribut und eine Vorlage. Wenn der Test als wahr ausgewertet wird, wird die Vorlage verarbeitet. In diesem Sinne ähnelt es einer if-Anweisung in anderen Sprachen. Um jedoch die Funktionalität einer if-then-else-Anweisung zu erreichen, verwenden Sie das `<xsl:choose>`-Element mit einem `<xsl:when>`- und einem `<xsl:otherwise>`-Kindelement.

## Syntax

```xml
<xsl:if test=EXPRESSION>
  TEMPLATE
</xsl:if>
```

### Erforderliche Attribute

- `test`
  - : Enthält einen XPath-Ausdruck, der (bei Bedarf unter Verwendung der Regeln, die für `boolean( )` definiert sind) zu einem booleschen Wert ausgewertet werden kann. Wenn der Wert wahr ist, wird die Vorlage verarbeitet; wenn nicht, wird keine Aktion ausgeführt.

### Optionale Attribute

Keine.

### Typ

Instruktion, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSL Abschnitt 9.1.

## Gecko-Unterstützung

Unterstützt
