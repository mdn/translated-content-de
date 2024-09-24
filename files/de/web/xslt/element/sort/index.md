---
title: <xsl:sort>
slug: Web/XSLT/Element/sort
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:sort>`-Element definiert einen Sortierschlüssel für Knoten, die durch `<xsl:apply-templates>` oder `<xsl:for-each>` ausgewählt wurden, und bestimmt die Reihenfolge, in der sie verarbeitet werden.

## Syntax

```xml
<xsl:sort
  select=EXPRESSION
  order="ascending" | "descending"
  case-order="upper-first" | "lower-first"
  lang=XML:LANG-CODE
  data-type="text" | "number" />
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `select`
  - : Verwendet einen XPath-Ausdruck, um die zu sortierenden Knoten zu spezifizieren.
- `order`
  - : Gibt an, ob die Knoten in "`ascending`" (aufsteigend) oder "`descending`" (absteigend) Reihenfolge verarbeitet werden sollen. Der Standard ist "`ascending`".
- `case-order`
  - : Gibt an, ob Groß- oder Kleinbuchstaben zuerst geordnet werden sollen. Die erlaubten Werte sind "`upper-first`" und "`lower-first`".
- `lang`
  - : Gibt an, welche Sprache für die Sortierung verwendet werden soll.
- `data-type`
  - : Definiert, ob Elemente alphabetisch oder numerisch geordnet werden sollen. Die erlaubten Werte sind "`text`" und "`number`", wobei "`text`" der Standard ist.

### Typ

Subanweisung, erscheint immer als untergeordnetes Element von \<xsl:for-each>, wo es vor der eigentlichen Vorlage oder von \<xsl:apply-templates> erscheinen muss.

## Spezifikationen

XSLT, Abschnitt 10.

## Gecko-Unterstützung

Unterstützt.
