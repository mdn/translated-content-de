---
title: <xsl:import>
slug: Web/XSLT/Element/import
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:import>`-Element ist ein oberstes Element, das dazu dient, den Inhalt eines Stylesheets in ein anderes Stylesheet zu importieren. Im Allgemeinen haben die Inhalte des importierten Stylesheets eine geringere Import-Priorität als die des importierenden Stylesheets. Dies steht im Gegensatz zu `<xsl:include>`, bei dem die Inhalte des eingeschlossenen Stylesheets genau die gleiche Priorität wie die Inhalte des einschließenden Stylesheets haben.

## Syntax

```xml
<xsl:import href=URI />
```

### Erforderliche Attribute

- `href`
  - : Gibt die URI des zu importierenden Stylesheets an.

### Optionale Attribute

Keine.

### Typ

Oberstes Element, muss vor allen anderen Kindelementen von `<xsl:stylesheet>` oder `<xsl:transform>` im importierenden Stylesheet erscheinen.

## Spezifikationen

XSLT, Abschnitt 2.6.2.

## Gecko-Unterstützung

Weitgehend unterstützt, jedoch mit einigen Problemen bei obersten Variablen und Parametern seit Mozilla 1.0.
