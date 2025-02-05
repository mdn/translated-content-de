---
title: <xsl:import>
slug: Web/XML/XSLT/Reference/Element/import
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:import>`-Element ist ein Top-Element, das dazu dient, den Inhalt eines Stylesheets in ein anderes Stylesheet zu importieren. Im Allgemeinen haben die Inhalte des importierten Stylesheets eine niedrigere Import-Priorität als die des importierenden Stylesheets. Dies steht im Gegensatz zu `<xsl:include>`, bei dem die Inhalte des eingeschlossenen Stylesheets genau die gleiche Priorität wie die Inhalte des einbeziehenden Stylesheets haben.

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

Top-Level, muss vor allen anderen untergeordneten Elementen von `<xsl:stylesheet>` oder `<xsl:transform>` im importierenden Stylesheet erscheinen.

## Spezifikationen

XSLT, Abschnitt 2.6.2.

## Gecko-Unterstützung

Größtenteils unterstützt, jedoch gibt es einige Probleme mit Variablen und Parametern auf oberster Ebene seit Mozilla 1.0.
