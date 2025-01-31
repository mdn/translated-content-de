---
title: <xsl:include>
slug: Web/XSLT/Reference/Element/include
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:include>`-Element vereint den Inhalt eines Stylesheets mit einem anderen. Anders als beim `<xsl:import>` haben die Inhalte eines eingebundenen Stylesheets genau dieselbe Vorrangigkeit wie die Inhalte des einbindenden Stylesheets.

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

Oberste Ebene, kann in beliebiger Reihenfolge als Kind von `<xsl:stylesheet>` oder `<xsl:transform>` auftreten.

## Spezifikationen

XSLT, Abschnitt 2.6.1.

## Gecko-Unterstützung

Unterstützt.
