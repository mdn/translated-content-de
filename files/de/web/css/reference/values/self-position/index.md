---
title: "`<self-position>` CSS-Typ"
short-title: <self-position>
slug: Web/CSS/Reference/Values/self-position
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<self-position>`** {{Glossary("enumerated", "aufgezählte")}} Wertdatentyp wird von den Eigenschaften {{cssxref("justify-self")}} und {{cssxref("align-self")}} sowie der Kurzschreibweise {{cssxref("place-self")}} verwendet, um die Box innerhalb ihres Ausrichtungscontainers auszurichten. Er wird auch von den Eigenschaften {{cssxref("justify-items")}} und {{cssxref("align-items")}} sowie der Kurzschreibweise {{cssxref("place-items")}} verwendet, um Standardwerte für `justify-self` und `align-self` festzulegen.

## Syntax

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<self-position>`-Grammatikterm dargestellt:

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungscontainers")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungscontainers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungscontainers aus.
- `self-start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Startseite des Ausrichtungsobjekts entspricht.
- `self-end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Endseite des Ausrichtungsobjekts entspricht.
- `flex-start`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Hauptstart- oder Querstartseite des Flex-Containers entspricht, je nach Bedarf. Es ist identisch mit `start` für Layout-Modi außer Flex-Layout.
- `flex-end`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Hauptend- oder Querendseite des Flex-Containers entspricht, je nach Bedarf. Es ist identisch mit `end` für Layout-Modi außer Flex-Layout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<self-position>` ausgeschlossen, obwohl sie gültige positional-Alignment-Werte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, da sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Stattdessen sind sie explizit in den Grammatiken der `justify-*` Eigenschaften enthalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-self")}}, {{cssxref("justify-self")}}, {{cssxref("place-self")}}, {{cssxref("align-items")}}, {{cssxref("justify-items")}}, {{cssxref("place-items")}}
- Andere Box-Alignment-Datentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("overflow-position")}}, und {{cssxref("content-position")}}
- [CSS-Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS-Flexibler Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
