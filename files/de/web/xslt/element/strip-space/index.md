---
title: <xsl:strip-space>
slug: Web/XSLT/Element/strip-space
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:strip-space>`-Element definiert die Elemente im Quelldokument, für die Leerzeichen entfernt werden sollen.

## Syntax

```xml
<xsl:strip-space elements=LIST-OF-ELEMENT-NAMES />
```

### Erforderliche Attribute

- `elements`
  - : Gibt eine durch Leerzeichen getrennte Liste von Elementen in der Quelle an, deren ausschließlich aus Leerzeichen bestehenden Textknoten entfernt werden sollen.

### Optionale Attribute

Keine.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 3.4

## Gecko-Unterstützung

Unterstützt.
