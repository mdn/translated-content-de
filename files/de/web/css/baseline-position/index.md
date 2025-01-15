---
title: <baseline-position>
slug: Web/CSS/baseline-position
l10n:
  sourceCommit: 25924970e8dbf0cdccfb5d47654eaaa143ed60e2
---

{{CSSRef}}

Der **`<baseline-position>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp repräsentiert die `baseline` Schlüsselwortwerte sowie die `first` und `last` Modifikatoren, die für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie die {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} Kurzschreibweise-Eigenschaften verwendet werden.

Die Werte `first` und `last` geben einer Box eine Präferenz für die Ausrichtung an der Grundlinie, wobei standardmäßig `first` verwendet wird, wenn der Modifikator weggelassen wird.

## Syntax

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Werte

Der `<baseline-position>` enumerierte Wertetyp wird unter Verwendung eines optionalen `first` oder `last` Modifikators mit dem `baseline` Wert angegeben. Wenn eine Box nicht zu einem gemeinsamen Ausrichtungskontext gehört, wird die Ersatz-Ausrichtung verwendet. Die Ersatz-Ausrichtung wird auch verwendet, um die Gruppe, die die Grundlinie teilt, innerhalb ihres {{Glossary("alignment_container", "Ausrichtungscontainers")}} auszurichten.

- `baseline`

  - : Berechnet sich zu `first baseline`, wie unten definiert.

- `first baseline`

  - : Richtet die Ausrichtungsgrundlinie der ersten Baseline-Gruppe der Box mit der entsprechenden Grundlinie ihrer Grundlinien-Gemeinschaft aus. Die Ersatz-Ausrichtung ist `safe self-start` für die Selbst-Ausrichtung oder `safe start` für die Inhaltsverteilung.

- `last baseline`
  - : Richtet die Ausrichtungsgrundlinie der letzten Baseline-Gruppe der Box mit der entsprechenden Grundlinie ihrer Grundlinien-Gemeinschaft aus. Die Ersatz-Ausrichtung ist `safe self-end` für die Selbst-Ausrichtung oder `safe end` für die Inhaltsverteilung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, und {{cssxref("place-self")}}
- Andere Box-Ausrichtungs-Datentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
