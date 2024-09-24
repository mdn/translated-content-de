---
title: <xsl:import>
slug: Web/XSLT/Element/import
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:import>`-Element ist ein obergeordnetes Element, das dazu dient, den Inhalt eines Stylesheets in ein anderes Stylesheet zu importieren. Im Allgemeinen haben die Inhalte des importierten Stylesheets eine niedrigere Importpriorität als die des importierenden Stylesheets. Dies steht im Gegensatz zu `<xsl:include>`, bei dem die Inhalte des eingebundenen Stylesheets genau die gleiche Priorität haben wie die Inhalte des einbindenden Stylesheets.

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

Oberste Ebene, muss vor jedem anderen Kind von `<xsl:stylesheet>` oder `<xsl:transform>` im importierenden Stylesheet erscheinen.

## Spezifikationen

XSLT, Abschnitt 2.6.2.

## Gecko-Unterstützung

Größtenteils unterstützt, mit einigen Problemen bei Variablen und Parametern auf oberster Ebene ab Mozilla 1.0.
