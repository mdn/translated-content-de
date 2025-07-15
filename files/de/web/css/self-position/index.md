---
title: <self-position>
slug: Web/CSS/self-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<self-position>`** {{Glossary("enumerated", "auflistbare")}} Wertdatentyp wird von den Eigenschaften {{cssxref("justify-self")}} und {{cssxref("align-self")}} sowie der Kurzform {{cssxref("place-self")}} verwendet, um das Kästchen innerhalb seines Ausrichtungskontainers auszurichten. Er wird auch von den Eigenschaften {{cssxref("justify-items")}} und {{cssxref("align-items")}} sowie der Kurzform {{cssxref("place-items")}} verwendet, um Standardwerte für `justify-self` und `align-self` festzulegen.

## Syntax

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<self-position>` Grammatikbegriff dargestellt:

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungskontainers")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungskontainers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungskontainers aus.
- `self-start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungskontainers aus, die der Startseite des Ausrichtungsobjekts entspricht.
- `self-end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungskontainers aus, die der Endseite des Ausrichtungsobjekts entspricht.
- `flex-start`
  - : Im Flexlayout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungskontainers ausgerichtet, die der Hauptstart- oder Querstartseite des Flexcontainers entspricht, je nachdem. Es ist identisch mit `start` für andere Layoutmodi als das Flexlayout.
- `flex-end`
  - : Im Flexlayout wird das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungskontainers ausgerichtet, die der Hauptend- oder Querendseite des Flexcontainers entspricht, je nachdem. Identisch mit `end` für andere Layoutmodi als das Flexlayout.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<self-position>` ausgeschlossen, obwohl sie gültige Positionsausrichtungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, da sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Stattdessen sind sie ausdrücklich in den Grammatiken der `justify-*` Eigenschaften enthalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-self")}}, {{cssxref("justify-self")}}, {{cssxref("place-self")}}, {{cssxref("align-items")}}, {{cssxref("justify-items")}}, {{cssxref("place-items")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("overflow-position")}}, und {{cssxref("content-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
