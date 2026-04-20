---
title: "`<baseline-position>` CSS-Typ"
short-title: <baseline-position>
slug: Web/CSS/Reference/Values/baseline-position
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<baseline-position>`** {{Glossary("enumerated", "aufgezählte")}} Wertetyp repräsentiert die `baseline` Schlüsselwortwerte und die Modifier `first` und `last`, die für die Eigenschaften {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} sowie für die Kurzschreibweise-Eigenschaften {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} verwendet werden.

Die Werte `first` und `last` geben einem Box-Element eine bevorzugte Baseline-Ausrichtung, wobei standardmäßig `first` verwendet wird, wenn der Modifier weggelassen wird.

## Syntax

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Werte

Der `<baseline-position>` aufgezählte Wertetyp wird mit einem optionalen `first` oder `last` Modifier zusammen mit dem `baseline` Wert angegeben. Wenn eine Box keinem geteilten Ausrichtungskontext angehört, wird die Fallback-Ausrichtung verwendet. Die Fallback-Ausrichtung wird auch verwendet, um die Gruppe der Baseline-Teilung innerhalb ihres {{Glossary("alignment_container", "Ausrichtungscontainers")}} auszurichten.

- `baseline`
  - : Wird zu `first baseline` berechnet, wie unten definiert.

- `first baseline`
  - : Richtet die Ausrichtungs-Baseline des ersten Baseline-Sets der Box mit der entsprechenden Baseline ihrer Baseline-Teilungsgruppe aus. Die Fallback-Ausrichtung ist `safe self-start` für Selbst-Ausrichtung oder `safe start` für Inhaltsverteilung.

- `last baseline`
  - : Richtet die Ausrichtungs-Baseline des letzten Baseline-Sets der Box mit der entsprechenden Baseline ihrer Baseline-Teilungsgruppe aus. Die Fallback-Ausrichtung ist `safe self-end` für Selbst-Ausrichtung oder `safe end` für Inhaltsverteilung.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}} und {{cssxref("self-position")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
