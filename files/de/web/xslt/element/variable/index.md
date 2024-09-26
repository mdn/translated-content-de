---
title: <xsl:variable>
slug: Web/XSLT/Element/variable
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:variable>`-Element deklariert eine globale oder lokale Variable in einem Stylesheet und weist ihr einen Wert zu. Da XSLT keine Nebeneffekte zulässt, bleibt der Wert der Variable unverändert, sobald er festgelegt wurde, bis die Variable außer Gültigkeit gerät.

## Syntax

```xml
<xsl:variable name=NAME select=EXPRESSION >
  TEMPLATE
</xsl:variable>
```

### Erforderliche Attribute

- `name`
  - : Vergibt der Variable einen Namen.

### Optionale Attribute

- `select`
  - : Definiert den Wert der Variable durch einen XPath-Ausdruck. Wenn das Element eine Vorlage enthält, wird dieses Attribut ignoriert.

### Typ

Top-Level oder Anweisungen. Wenn es als Top-Level-Element auftritt, ist die Variable im gesamten Dokument global verfügbar. Wenn es innerhalb einer Vorlage auftritt, ist die Variable lokal und nur innerhalb der Vorlage zugänglich, in der sie erscheint.

## Spezifikationen

XSLT, Abschnitt 11.

## Gecko-Unterstützung

Unterstützt.