---
title: <xsl:sort>
slug: Web/XML/XSLT/Reference/Element/sort
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:sort>`-Element definiert einen Sortierschlüssel für Knoten, die durch `<xsl:apply-templates>` oder `<xsl:for-each>` ausgewählt werden, und bestimmt die Reihenfolge, in der sie verarbeitet werden.

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
  - : Verwendet einen XPath-Ausdruck, um die zu sortierenden Knoten anzugeben.
- `order`
  - : Gibt an, ob die Knoten in `ascending` (aufsteigender) oder `descending` (absteigender) Reihenfolge verarbeitet werden sollen. Standardmäßig ist `ascending` festgelegt.
- `case-order`
  - : Bestimmt, ob Groß- oder Kleinbuchstaben zuerst geordnet werden sollen. Zulässige Werte sind `upper-first` und `lower-first`.
- `lang`
  - : Gibt an, welche Sprache für die Sortierung verwendet werden soll.
- `data-type`
  - : Legt fest, ob Elemente alphabetisch oder numerisch sortiert werden sollen. Zulässige Werte sind `text` und `number`, wobei `text` der Standardwert ist.

### Typ

Unteranweisung, die immer als Kind von \<xsl:for-each> erscheint, wobei sie vor der eigentlichen Vorlage erscheinen muss, oder als Kind von \<xsl:apply-templates>.

## Spezifikationen

XSLT, Abschnitt 10.

## Gecko-Unterstützung

Unterstützt.
