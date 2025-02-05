---
title: <xsl:preserve-space>
slug: Web/XML/XSLT/Reference/Element/preserve-space
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:preserve-space>`-Element definiert die Elemente im Quelldokument, bei denen Leerzeichen erhalten bleiben sollen. Wenn es mehr als ein Element gibt, trennen Sie die Namen mit einem Leerzeichen. Das Beibehalten von Leerzeichen ist die Standardeinstellung, daher wird dieses Element nur benötigt, um ein `<xsl:strip-space>`-Element aufzuheben.

## Syntax

```xml
<xsl:preserve-space elements=LIST-OF-ELEMENT-NAMES />
```

### Erforderliche Attribute

- `elements`
  - : Gibt die Elemente an, bei denen Leerzeichen beibehalten werden sollen.

### Optionale Attribute

Keine.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 3.4

## Gecko-Unterstützung

Unterstützt.
