---
title: <xsl:include>
slug: Web/XML/XSLT/Reference/Element/include
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:include>`-Element verbindet den Inhalt eines Stylesheets mit einem anderen. Im Gegensatz zum Fall von `<xsl:import>` hat der Inhalt eines eingebundenen Stylesheets genau die gleiche Priorität wie der Inhalt des einbindenden Stylesheets.

## Syntax

```xml
<xsl:include href=URI />
```

### Erforderliche Attribute

- `href`
  - : Gibt die URI des einzubindenden Stylesheets an.

### Optionale Attribute

Keine.

### Typ

Top-Level, kann in beliebiger Reihenfolge als Kind von `<xsl:stylesheet>` oder `<xsl:transform>` erscheinen.

## Spezifikationen

XSLT, Abschnitt 2.6.1.

## Gecko-Unterstützung

Wird unterstützt.
