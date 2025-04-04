---
title: <baseline-position>
slug: Web/CSS/baseline-position
l10n:
  sourceCommit: 35f63ce08742ec649bca904ea12e11a3b018ad6f
---

{{CSSRef}}

Der **`<baseline-position>`** {{Glossary("enumerated", "enumerierte")}} Werttyp repräsentiert die `baseline` Schlüsselwortwerte sowie die `first` und `last` Modifikatoren, die für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie die {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzschreibweisen verwendet werden.

Die Werte `first` und `last` geben einer Box eine Basislinien-Ausrichtungspräferenz, wobei bei Weglassen des Modifikators standardmäßig `first` verwendet wird.

## Syntax

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Werte

Der `<baseline-position>` enumerierte Werttyp wird unter Verwendung eines optionalen `first` oder `last` Modifikators mit dem `baseline` Wert spezifiziert. Wenn eine Box nicht zu einem gemeinsamen Ausrichtungskontext gehört, dann wird die alternative Ausrichtung verwendet. Die alternative Ausrichtung wird auch verwendet, um die Gruppe, die die Basislinie teilt, innerhalb ihres {{Glossary("alignment_container", "Ausrichtungscontainers")}} auszurichten.

- `baseline`

  - : Wird zu `first baseline`, wie unten definiert, berechnet.

- `first baseline`

  - : Richtet die Ausrichtungs-Basislinie des ersten Basisliniensatzes der Box mit der entsprechenden Basislinie ihrer Basislinien-Teilungsgruppe aus. Die alternative Ausrichtung ist `safe self-start` für die Selbstausrichtung oder `safe start` für die Inhaltsverteilung.

- `last baseline`
  - : Richtet die Ausrichtungs-Basislinie des letzten Basisliniensatzes der Box mit der entsprechenden Basislinie ihrer Basislinien-Teilungsgruppe aus. Die alternative Ausrichtung ist `safe self-end` für die Selbstausrichtung oder `safe end` für die Inhaltsverteilung.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
