---
title: <baseline-position>
slug: Web/CSS/baseline-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<baseline-position>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp repräsentiert die `baseline` Schlüsselwortwerte sowie die `first` und `last` Modifikatoren, die bei den {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie den Kurzschreibweisen {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} verwendet werden.

Die Werte `first` und `last` geben einer Box eine Grundlinienausrichtungspräferenz und standardisieren auf `first`, wenn der Modifikator weggelassen wird.

## Syntax

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Werte

Der `<baseline-position>` enumerierte Wertetyp wird mit einem optionalen `first` oder `last` Modifikator zusammen mit dem `baseline` Wert angegeben. Wenn eine Box zu keinem gemeinsamen Ausrichtungskontext gehört, wird die Ausweichausrichtung verwendet. Die Ausweichausrichtung wird ebenfalls verwendet, um die Gruppe der Grundlinienteilung innerhalb ihres {{Glossary("alignment_container", "Ausrichtungsbehälters")}} auszurichten.

- `baseline`
  - : Rechnet sich zu `first baseline`, wie unten definiert.

- `first baseline`
  - : Richtet die Ausrichtungsbasislinie des ersten Grundliniensatzes der Box mit der entsprechenden Grundlinie ihrer Grundlinienteilungsgruppe aus. Die Ausweichausrichtung ist `safe self-start` für Selbstausrichtung oder `safe start` für Inhaltsverteilung.

- `last baseline`
  - : Richtet die Ausrichtungsbasislinie des letzten Grundliniensatzes der Box mit der entsprechenden Grundlinie ihrer Grundlinienteilungsgruppe aus. Die Ausweichausrichtung ist `safe self-end` für Selbstausrichtung oder `safe end` für Inhaltsverteilung.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
