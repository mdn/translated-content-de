---
title: <xsl:attribute-set>
slug: Web/XSLT/Reference/Element/attribute-set
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:attribute-set>`-Element erstellt einen benannten Satz von Attributen, der dann als Ganzes auf das Ausgabedokument angewendet werden kann, ähnlich wie benannte Stile in CSS.

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
  - : Erstellt einen Attributsatz aus anderen Attributsätzen. Die Namen der beitragenden Sätze müssen durch Leerzeichen getrennt sein und dürfen sich nicht direkt oder indirekt selbst einbetten.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 7.1.4.

## Gecko-Unterstützung

Unterstützt.
