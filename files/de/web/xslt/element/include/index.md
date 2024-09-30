---
title: <xsl:include>
slug: Web/XSLT/Element/include
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:include>`-Element verbindet den Inhalt eines Stylesheets mit einem anderen. Im Gegensatz zum Fall von `<xsl:import>` hat der Inhalt eines inkludierten Stylesheets exakt die gleiche Priorität wie der Inhalt des inkludierenden Stylesheets.

## Syntax

```xml
<xsl:include href=URI />
```

### Erforderliche Attribute

- `href`
  - : Gibt die URI des einzuschließenden Stylesheets an.

### Optionale Attribute

Keine.

### Typ

Top-Level, kann in beliebiger Reihenfolge als Kind von `<xsl:stylesheet>` oder `<xsl:transform>` erscheinen.

## Spezifikationen

XSLT, Abschnitt 2.6.1.

## Gecko-Unterstützung

Unterstützt.
