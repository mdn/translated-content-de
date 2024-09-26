---
title: <xsl:preserve-space>
slug: Web/XSLT/Element/preserve-space
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:preserve-space>`-Element definiert die Elemente im Quelldokument, für die Leerraum beibehalten werden soll. Wenn es mehr als ein Element gibt, trennen Sie die Namen mit einem Leerzeichen. Das Beibehalten von Leerraum ist die Standardeinstellung, daher muss dieses Element nur verwendet werden, um ein `<xsl:strip-space>`-Element zu kompensieren.

## Syntax

```xml
<xsl:preserve-space elements=LIST-OF-ELEMENT-NAMES />
```

### Erforderliche Attribute

- `elements`
  - : Gibt die Elemente an, für die Leerraum beibehalten werden soll.

### Optionale Attribute

Keine.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 3.4

## Gecko-Unterstützung

Unterstützt.