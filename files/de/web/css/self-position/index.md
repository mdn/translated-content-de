---
title: <self-position>
slug: Web/CSS/self-position
l10n:
  sourceCommit: 35f63ce08742ec649bca904ea12e11a3b018ad6f
---

{{CSSRef}}

Der **`<self-position>`** Datentyp mit {{Glossary("enumerated", "aufgezählten Werten")}} wird von den Eigenschaften {{cssxref("justify-self")}} und {{cssxref("align-self")}} sowie der Kurzform {{cssxref("place-self")}} verwendet, um die Box innerhalb ihres Ausrichtungs-Containers auszurichten. Er wird auch von den Eigenschaften {{cssxref("justify-items")}} und {{cssxref("align-items")}} sowie der Kurzform {{cssxref("place-items")}} verwendet, um Standardwerte für `justify-self` und `align-self` festzulegen.

## Syntax

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## Werte

Die folgenden Schlüsselwortwerte werden durch den `<self-position>` Grammatikbegriff dargestellt:

- `center`
  - : Zentriert das {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} innerhalb seines {{Glossary("alignment_container", "Ausrichtungs-Containers")}}.
- `start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Startkante des Ausrichtungs-Containers aus.
- `end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Endkante des Ausrichtungs-Containers aus.
- `self-start`
  - : Richtet das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungs-Containers aus, die der Startseite des Ausrichtungsobjekts entspricht.
- `self-end`
  - : Richtet das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungs-Containers aus, die der Endseite des Ausrichtungsobjekts entspricht.
- `flex-start`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungs-Containers aus, die der Haupt- oder Querstartseite des Flex-Containers entspricht, je nachdem. Für andere Layoutmodi als das Flex-Layout ist es identisch mit `start`.
- `flex-end`
  - : Im Flex-Layout richtet es das Ausrichtungsobjekt bündig mit der Kante des Ausrichtungs-Containers aus, die der Haupt- oder Querendseite des Flex-Containers entspricht, je nachdem. Für andere Layoutmodi als das Flex-Layout ist es identisch mit `end`.

> [!NOTE]
> Die Schlüsselwörter `left` und `right` sind von `<self-position>` ausgeschlossen, obwohl sie gültige positionsbezogene Ausrichtungswerte für die `justify-*` Eigenschaften ({{cssxref("justify-content")}}, {{cssxref("justify-self")}}, und {{cssxref("justify-items")}}) sind, weil sie in den `align-*` Eigenschaften ({{cssxref("align-content")}}, {{cssxref("align-self")}}, und {{cssxref("align-items")}}) nicht erlaubt sind. Stattdessen sind sie ausdrücklich in den Grammatiken der `justify-*` Eigenschaften enthalten.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-self")}}, {{cssxref("justify-self")}}, {{cssxref("place-self")}}, {{cssxref("align-items")}}, {{cssxref("justify-items")}}, {{cssxref("place-items")}}
- Andere Datentypen zur Box-Ausrichtung: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, {{cssxref("overflow-position")}}, und {{cssxref("content-position")}}
- [CSS Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment)
- [CSS Flexibles Box-Layout Modul](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS Raster-Layout Modul](/de/docs/Web/CSS/CSS_grid_layout)
