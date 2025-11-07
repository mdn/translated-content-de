---
title: <self-position>
slug: Web/CSS/Reference/Values/self-position
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<self-position>`** {{Glossary("enumerated", "aufgezählte")}} Wertedatentyp wird von den Eigenschaften {{cssxref("justify-self")}} und {{cssxref("align-self")}} sowie der Kurzform {{cssxref("place-self")}} verwendet, um das Feld innerhalb seines Ausrichtungscontainers auszurichten. Er wird auch von den Eigenschaften {{cssxref("justify-items")}} und {{cssxref("align-items")}} sowie der Kurzform {{cssxref("place-items")}} verwendet, um Standardwerte für `justify-self` und `align-self` festzulegen.

## Syntax

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<self-position>`-Grammatikbegriff dargestellt:

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungscontainers")}}.
- `start`
  - : Richten Sie das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungscontainers aus.
- `end`
  - : Richten Sie das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungscontainers aus.
- `self-start`
  - : Richten Sie das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Startseite des Ausrichtungsobjekts entspricht.
- `self-end`
  - : Richten Sie das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers aus, die der Endseite des Ausrichtungsobjekts entspricht.
- `flex-start`
  - : Im Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der main-start- oder cross-start-Seite des Flex-Containers entspricht, je nach Bedarf. Es ist identisch mit `start` für andere Layoutmodi als das Flex-Layout.
- `flex-end`
  - : Im Flex-Layout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungscontainers ausgerichtet, die der main-end- oder cross-end-Seite des Flex-Containers entspricht, je nach Bedarf. Identisch mit `end` für andere Layoutmodi als das Flex-Layout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<self-position>` ausgeschlossen, obwohl sie gültige Positionsausrichtungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, weil sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Sie werden stattdessen explizit in den Grammatiken der `justify-*` Eigenschaften einbezogen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-self")}}, {{cssxref("justify-self")}}, {{cssxref("place-self")}}, {{cssxref("align-items")}}, {{cssxref("justify-items")}}, {{cssxref("place-items")}}
- Andere Datenarten zur Box-Ausrichtung: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("overflow-position")}}, und {{cssxref("content-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
