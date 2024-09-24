---
title: <xsl:copy>
slug: Web/XSLT/Element/copy
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:copy>`-Element überträgt eine flache Kopie (den Knoten und alle zugehörigen Namespace-Knoten) des aktuellen Knotens in das Ausgabedokument. Es kopiert weder Kinder noch Attribute des aktuellen Knotens.

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
  - : Listet Attributsätze auf, die auf den Ausgabeknoten angewendet werden sollen, wenn es sich um ein Element handelt. Die Namen der Sätze sollten durch Leerzeichen getrennt werden.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.5.

## Gecko-Unterstützung

Unterstützt.
