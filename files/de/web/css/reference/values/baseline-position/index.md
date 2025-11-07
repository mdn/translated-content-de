---
title: <baseline-position>
slug: Web/CSS/Reference/Values/baseline-position
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<baseline-position>`** {{Glossary("enumerated", "aufgezählte")}} Werttyp repräsentiert die `baseline` Schlüsselwortwerte und die Modifikatoren `first` und `last`, die für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie die Kurzschreibweisen {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} verwendet werden.

Die Werte `first` und `last` geben einer Box eine Präferenz für die Baseline-Ausrichtung, wobei `first` der Standardwert ist, wenn der Modifikator weggelassen wird.

## Syntax

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Werte

Der `<baseline-position>` aufgezählte Werttyp wird unter Verwendung eines optionalen Modifikators `first` oder `last` mit dem Wert `baseline` angegeben. Falls eine Box nicht zu einem gemeinsamen Ausrichtungskontext gehört, wird die Ersatz-Ausrichtung verwendet. Die Ersatz-Ausrichtung wird auch verwendet, um die Baseline-Teilungsgruppe innerhalb ihres {{Glossary("alignment_container", "Ausrichtungscontainers")}} auszurichten.

- `baseline`
  - : Wird als `first baseline` berechnet, wie unten definiert.

- `first baseline`
  - : Richtet die Ausrichtungsbaseline des ersten Baseline-Sets der Box mit der entsprechenden Baseline ihrer Baseline-Teilungsgruppe aus. Die Ersatz-Ausrichtung ist `safe self-start` für die Selbstausrichtung oder `safe start` für die Inhaltsverteilung.

- `last baseline`
  - : Richtet die Ausrichtungsbaseline des letzten Baseline-Sets der Box mit der entsprechenden Baseline ihrer Baseline-Teilungsgruppe aus. Die Ersatz-Ausrichtung ist `safe self-end` für die Selbstausrichtung oder `safe end` für die Inhaltsverteilung.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
