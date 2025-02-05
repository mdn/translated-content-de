---
title: <xsl:apply-imports>
slug: Web/XML/XSLT/Reference/Element/apply-imports
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:apply-imports>`-Element ist relativ obskur und wird hauptsächlich in komplexen Stylesheets verwendet. Die Import-Priorität erfordert, dass Vorlagenregeln in Haupt-Stylesheets eine höhere Priorität haben als Vorlagenregeln in importierten Stylesheets. Manchmal ist es jedoch nützlich, den Prozessor zwingen zu können, eine Vorlagenregel aus dem (niedriger priorisierten) importierten Stylesheet anstelle einer gleichwertigen Regel im Haupt-Stylesheet zu verwenden.

## Syntax

```xml
<xsl:apply-imports/>
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

Keine.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 5.6.

## Gecko-Unterstützung

Unterstützt.
