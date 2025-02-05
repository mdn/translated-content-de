---
title: <xsl:strip-space>
slug: Web/XML/XSLT/Reference/Element/strip-space
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:strip-space>`-Element definiert die Elemente im Quelldokument, für die Leerzeichen entfernt werden sollen.

## Syntax

```xml
<xsl:strip-space elements=LIST-OF-ELEMENT-NAMES />
```

### Erforderliche Attribute

- `elements`
  - : Gibt eine durch Leerzeichen getrennte Liste von Elementen im Quelltext an, deren ausschließlich aus Leerzeichen bestehenden Textknoten entfernt werden sollen.

### Optionale Attribute

Keine.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 3.4

## Gecko-Unterstützung

Unterstützt.
