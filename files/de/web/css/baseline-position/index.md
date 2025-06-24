---
title: <baseline-position>
slug: Web/CSS/baseline-position
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`<baseline-position>`** {{Glossary("enumerated", "enumerierte")}} Werttyp repräsentiert die `baseline` Schlüsselwortwerte sowie die Modifikatoren `first` und `last`, welche für die Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} sowie die Kurzschreibweisen {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} verwendet werden.

Die Werte `first` und `last` geben einer Box eine Präferenz für die Baseline-Ausrichtung, wobei `first` standardmäßig angenommen wird, wenn der Modifikator weggelassen wird.

## Syntax

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Werte

Der enumerierte Werttyp `<baseline-position>` wird mit einem optionalen `first` oder `last` Modifikator zusammen mit dem Wert `baseline` angegeben. Wenn eine Box nicht zu einem gemeinsamen Ausrichtungskontext gehört, wird die Fallback-Ausrichtung verwendet. Die Fallback-Ausrichtung wird auch verwendet, um die Baseline-Teilungsgruppe innerhalb ihres {{Glossary("alignment_container", "Ausrichtungscontainers")}} auszurichten.

- `baseline`

  - : Errechnet sich zu `first baseline`, wie unten definiert.

- `first baseline`

  - : Richtet die Ausrichtungs-Baseline des ersten Baseline-Sets der Box mit der entsprechenden Baseline ihrer Baseline-Teilungsgruppe aus. Die Fallback-Ausrichtung ist `safe self-start` für die Eigen-Ausrichtung oder `safe start` für die Inhaltsverteilung.

- `last baseline`
  - : Richtet die Ausrichtungs-Baseline des letzten Baseline-Sets der Box mit der entsprechenden Baseline ihrer Baseline-Teilungsgruppe aus. Die Fallback-Ausrichtung ist `safe self-end` für die Eigen-Ausrichtung oder `safe end` für die Inhaltsverteilung.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}} und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
