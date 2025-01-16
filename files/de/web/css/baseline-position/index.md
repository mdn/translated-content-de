---
title: <baseline-position>
slug: Web/CSS/baseline-position
l10n:
  sourceCommit: a7c8d7fda7dae7094d6e7a73e72682d5d73b431b
---

{{CSSRef}}

Der **`<baseline-position>`** {{Glossary("enumerated", "aufzählbare")}} Wertetyp repräsentiert die `baseline` Schlüsselwortwerte sowie die Modifikatoren `first` und `last`, die für die Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} sowie für die Kurzschreibweisen {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}} verwendet werden.

Die Werte `first` und `last` geben einer Box eine Vorzugs-Ausrichtung zur Baseline, wobei die Standardeinstellung `first` ist, wenn der Modifikator weggelassen wird.

## Syntax

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Werte

Der `<baseline-position>` aufzählbare Wertetyp wird mit einem optionalen `first` oder `last` Modifikator zusammen mit dem `baseline` Wert angegeben. Wenn eine Box nicht zu einem gemeinsamen Ausrichtungskontext gehört, wird die Ausrichtungs-Fallback-Option verwendet. Die Ausrichtungs-Fallback-Option wird auch verwendet, um die Gruppe, die die Baseline teilt, innerhalb ihres {{Glossary("alignment_container", "Ausrichtungscontainers")}} auszurichten.

- `baseline`

  - : Wird zu `first baseline` berechnet, wie unten definiert.

- `first baseline`

  - : Richtet die Ausrichtungsbaseline des ersten Baseline-Sets der Box mit der entsprechenden Baseline ihrer Baseline-sharing-Gruppe aus. Die Fallback-Ausrichtung ist `safe self-start` für die Eigen-Ausrichtung oder `safe start` für die Verteilung der Inhalte.

- `last baseline`
  - : Richtet die Ausrichtungsbaseline des letzten Baseline-Sets der Box mit der entsprechenden Baseline ihrer Baseline-sharing-Gruppe aus. Die Fallback-Ausrichtung ist `safe self-end` für die Eigen-Ausrichtung oder `safe end` für die Verteilung der Inhalte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
