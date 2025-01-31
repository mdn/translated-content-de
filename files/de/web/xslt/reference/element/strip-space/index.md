---
title: <xsl:strip-space>
slug: Web/XSLT/Reference/Element/strip-space
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:strip-space>`-Element definiert die Elemente im Quelldokument, für die Leerzeichen entfernt werden sollen.

## Syntax

```xml
<xsl:strip-space elements=LIST-OF-ELEMENT-NAMES />
```

### Erforderliche Attribute

- `elements`
  - : Gibt eine durch Leerzeichen getrennte Liste von Elementen im Quelltext an, deren nur aus Leerzeichen bestehende Textknoten entfernt werden sollen.

### Optionale Attribute

Keine.

### Typ

Top-level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 3.4

## Gecko-Unterstützung

Unterstützt.
