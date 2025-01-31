---
title: <xsl:copy>
slug: Web/XSLT/Reference/Element/copy
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:copy>`-Element erstellt eine flache Kopie (den Knoten und alle zugehörigen Namespace-Knoten) des aktuellen Knotens im Ausgabedokument. Es kopiert weder Kinder noch Attribute des aktuellen Knotens.

## Syntax

```xml
<xsl:copy use-attribute-sets=LIST-OF-NAMES>
  TEMPLATE
</xsl:copy>
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `use-attribute-sets`
  - : Listet Attributsätze auf, die auf den Ausgabeknoten angewendet werden sollen, falls es sich um ein Element handelt. Die Namen der Sätze sollten durch Leerzeichen getrennt sein.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.5.

## Gecko-Unterstützung

Unterstützt.
