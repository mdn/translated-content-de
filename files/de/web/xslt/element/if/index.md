---
title: <xsl:if>
slug: Web/XSLT/Element/if
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:if>`-Element enthält ein Testattribut und eine Vorlage. Wenn der Test als wahr ausgewertet wird, wird die Vorlage verarbeitet. Damit ist es einem If-Befehl in anderen Sprachen ähnlich. Um jedoch die Funktionalität eines If-Then-Else-Befehls zu erreichen, verwenden Sie das `<xsl:choose>`-Element mit einem `<xsl:when>`- und einem `<xsl:otherwise>`-Kind.

## Syntax

```xml
<xsl:if test=EXPRESSION>
  TEMPLATE
</xsl:if>
```

### Erforderliche Attribute

- `test`
  - : Enthält einen XPath-Ausdruck, der (gegebenenfalls unter Verwendung der für `boolean( )` definierten Regeln) zu einem Booleschen Wert ausgewertet werden kann. Wenn der Wert wahr ist, wird die Vorlage verarbeitet; ist dies nicht der Fall, wird keine Handlung vorgenommen.

### Optionale Attribute

Keine.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSL Abschnitt 9.1.

## Gecko-Unterstützung

Unterstützt
