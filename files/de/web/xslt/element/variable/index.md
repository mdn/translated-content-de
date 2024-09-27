---
title: <xsl:variable>
slug: Web/XSLT/Element/variable
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:variable>`-Element deklariert eine globale oder lokale Variable in einem Stylesheet und weist ihr einen Wert zu. Da XSLT keine Seiteneffekte erlaubt, bleibt der Wert der Variablen unverändert, sobald er festgelegt wurde, bis die Variable außerhalb des Gültigkeitsbereichs gerät.

## Syntax

```xml
<xsl:variable name=NAME select=EXPRESSION >
  TEMPLATE
</xsl:variable>
```

### Erforderliche Attribute

- `name`
  - : Gibt der Variablen einen Namen.

### Optionale Attribute

- `select`
  - : Definiert den Wert der Variablen durch einen XPath-Ausdruck. Wenn das Element eine Vorlage enthält, wird dieses Attribut ignoriert.

### Typ

Top-Level oder Anweisung. Wenn es als Top-Level-Element auftritt, ist die Variable global im Gültigkeitsbereich und kann im gesamten Dokument erreicht werden. Wenn es innerhalb einer Vorlage auftritt, ist die Variable lokal im Gültigkeitsbereich und nur innerhalb der Vorlage zugänglich, in der sie erscheint.

## Spezifikationen

XSLT, Abschnitt 11.

## Gecko-Unterstützung

Unterstützt.
