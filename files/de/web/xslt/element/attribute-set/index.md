---
title: <xsl:attribute-set>
slug: Web/XSLT/Element/attribute-set
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:attribute-set>`-Element erstellt eine benannte Menge von Attributen, die dann in ihrer Gesamtheit auf das Ausgabedokument angewendet werden können, ähnlich wie benannte Stile in CSS.

## Syntax

```xml
<xsl:attribute-set name=NAME use-attribute-sets=LIST-OF-NAMES>
  <xsl:attribute>
</xsl:attribute-set>
```

### Erforderliche Attribute

- `name`
  - : Gibt den Namen des Attributsets an. Der Name muss ein gültiger QName sein.

### Optionale Attribute

- `use-attribute-sets`
  - : Erstellt ein Attributset aus anderen Attributsets. Die Namen der beteiligten Sets müssen durch Leerzeichen getrennt werden und dürfen sich nicht direkt oder indirekt selbst einbetten.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 7.1.4.

## Gecko-Unterstützung

Unterstützt.