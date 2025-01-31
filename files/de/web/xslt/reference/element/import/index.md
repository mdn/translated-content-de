---
title: <xsl:import>
slug: Web/XSLT/Reference/Element/import
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:import>`-Element ist ein oberstes Element, das dazu dient, den Inhalt eines Stylesheets in ein anderes zu importieren. Im Allgemeinen hat der Inhalt des importierten Stylesheets eine geringere Import-Priorität als das Stylesheet, das importiert. Dies steht im Gegensatz zu `<xsl:include>`, bei dem der Inhalt des eingeschlossenen Stylesheets genau die gleiche Priorität wie der Inhalt des einbeziehenden Stylesheets hat.

## Syntax

```xml
<xsl:import href=URI />
```

### Erforderliche Attribute

- `href`
  - : Gibt den URI des zu importierenden Stylesheets an.

### Optionale Attribute

Keine.

### Typ

Oberstes Element, muss vor allen anderen Kindern von `<xsl:stylesheet>` oder `<xsl:transform>` im importierenden Stylesheet erscheinen.

## Spezifikationen

XSLT, Abschnitt 2.6.2.

## Gecko-Unterstützung

Meistens unterstützt, mit einigen Problemen bei Variablen und Parametern auf der obersten Ebene ab Mozilla 1.0.
