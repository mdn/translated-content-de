---
title: <xsl:sort>
slug: Web/XSLT/Element/sort
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Das `<xsl:sort>`-Element definiert einen Sortierschlüssel für Knoten, die von `<xsl:apply-templates>` oder `<xsl:for-each>` ausgewählt werden, und bestimmt die Reihenfolge, in der sie verarbeitet werden.

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
  - : Gibt an, ob die Knoten in `ascending` (aufsteigender) oder `descending` (absteigender) Reihenfolge verarbeitet werden sollen. Der Standardwert ist `ascending`.
- `case-order`
  - : Gibt an, ob Groß- oder Kleinbuchstaben zuerst geordnet werden sollen. Die zulässigen Werte sind `upper-first` und `lower-first`.
- `lang`
  - : Gibt an, welche Sprache bei der Sortierung verwendet werden soll.
- `data-type`
  - : Definiert, ob Elemente alphabetisch oder numerisch geordnet werden sollen. Die zulässigen Werte sind `text` und `number`, wobei `text` der Standardwert ist.

### Typ

Unteranweisung, erscheint immer als untergeordnetes Element von `<xsl:for-each>`, wo es vor der eigentlichen Vorlage erscheinen muss, oder von `<xsl:apply-templates>`.

## Spezifikationen

XSLT, Abschnitt 10.

## Gecko-Unterstützung

Unterstützt.
