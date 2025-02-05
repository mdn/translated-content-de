---
title: <xsl:attribute-set>
slug: Web/XML/XSLT/Reference/Element/attribute-set
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:attribute-set>`-Element erstellt eine benannte Gruppe von Attributen, die dann vollständig auf das Ausgabedokument angewendet werden können, ähnlich wie benannte Stile in CSS.

## Syntax

```xml
<xsl:attribute-set name=NAME use-attribute-sets=LIST-OF-NAMES>
  <xsl:attribute>
</xsl:attribute-set>
```

### Erforderliche Attribute

- `name`
  - : Gibt den Namen des Attributsatzes an. Der Name muss ein gültiger QName sein.

### Optionale Attribute

- `use-attribute-sets`
  - : Erstellt einen Attributsatz aus anderen Attributsätzen. Die Namen der beteiligten Sätze müssen mit Leerzeichen getrennt sein und dürfen sich nicht direkt oder indirekt selbst einbetten.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 7.1.4.

## Gecko-Unterstützung

Unterstützt.
