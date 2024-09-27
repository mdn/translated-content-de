---
title: <xsl:apply-imports>
slug: Web/XSLT/Element/apply-imports
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:apply-imports>`-Element ist ziemlich obskur und wird hauptsächlich in komplexen Stylesheets verwendet. Die Import-Priorität erfordert, dass Vorlagenregeln in Haupt-Stylesheets eine höhere Priorität haben als Vorlagenregeln in importierten Stylesheets. Manchmal ist es jedoch nützlich, den Prozessor dazu zu zwingen, eine Vorlagenregel aus dem (niedriger priorisierten) importierten Stylesheet anstelle einer äquivalenten Regel im Haupt-Stylesheet zu verwenden.

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
