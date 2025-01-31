---
title: <xsl:apply-imports>
slug: Web/XSLT/Reference/Element/apply-imports
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:apply-imports>`-Element ist ziemlich obskur und wird hauptsächlich in komplexen Stylesheets verwendet. Die Import-Vorrangregelung erfordert, dass Vorlagenregeln in Haupt-Stylesheets eine höhere Priorität haben als die Vorlagenregeln in importierten Stylesheets. Manchmal ist es jedoch nützlich, in der Lage zu sein, den Prozessor dazu zu zwingen, eine Vorlagenregel aus dem (niedriger priorisierten) importierten Stylesheet zu verwenden, anstatt eine gleichwertige Regel im Haupt-Stylesheet.

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
