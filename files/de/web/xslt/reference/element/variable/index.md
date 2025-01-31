---
title: <xsl:variable>
slug: Web/XSLT/Reference/Element/variable
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:variable>`-Element deklariert eine globale oder lokale Variable in einem Stylesheet und weist ihr einen Wert zu. Da XSLT keine Nebeneffekte erlaubt, bleibt der Wert der Variable unverändert, bis die Variable außer Reichweite ist.

## Syntax

```xml
<xsl:variable name=NAME select=EXPRESSION >
  TEMPLATE
</xsl:variable>
```

### Erforderliche Attribute

- `name`
  - : Verleiht der Variable einen Namen.

### Optionale Attribute

- `select`
  - : Definiert den Wert der Variable durch einen XPath-Ausdruck. Wenn das Element eine Vorlage enthält, wird dieses Attribut ignoriert.

### Typ

Top-Level oder Anweisung. Wenn es als Top-Level-Element auftritt, ist die Variable global im Bereich und kann im gesamten Dokument zugegriffen werden. Wenn es innerhalb einer Vorlage auftritt, ist die Variable lokal im Bereich und nur innerhalb der Vorlage zugänglich, in der sie erscheint.

## Spezifikationen

XSLT, Abschnitt 11.

## Gecko-Unterstützung

Unterstützt.
