---
title: <baseline-position>
slug: Web/CSS/Reference/Values/baseline-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<baseline-position>`** {{Glossary("enumerated", "aufgezählte")}} Wertetyp repräsentiert die `baseline` Schlüsselwortwerte sowie die Modifikatoren `first` und `last`, die für die {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}} Eigenschaften sowie die Kurzform-Eigenschaften {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}} verwendet werden.

Die Werte `first` und `last` geben einem Kästchen eine Vorzugsbasislinienausrichtung, wobei standardmäßig `first` angenommen wird, wenn der Modifikator ausgelassen wird.

## Syntax

```plain
<baseline-position> = [ first | last ]? && baseline
```

## Werte

Der `<baseline-position>` aufzählbare Wertetyp wird durch einen optionalen `first` oder `last` Modifikator mit dem `baseline` Wert spezifiziert. Wenn ein Kästchen nicht zu einem gemeinsamen Ausrichtungskontext gehört, wird die Ersatzausrichtung verwendet. Die Ersatzausrichtung wird auch verwendet, um die Basislinienteilgruppe innerhalb ihres {{Glossary("alignment_container", "Ausrichtungscontainers")}} auszurichten.

- `baseline`

  - : Berechnet sich zu `first baseline`, wie unten definiert.

- `first baseline`

  - : Richtet die Ausrichtungsbasislinie des ersten Basisliniensatzes des Kästchens mit der entsprechenden Basislinie seiner Basislinienteilgruppe aus. Die Ersatzausrichtung ist `safe self-start` für die Eigenausrichtung oder `safe start` für die Inhaltsverteilung.

- `last baseline`
  - : Richtet die Ausrichtungsbasislinie des letzten Basisliniensatzes des Kästchens mit der entsprechenden Basislinie seiner Basislinienteilgruppe aus. Die Ersatzausrichtung ist `safe self-end` für die Eigenausrichtung oder `safe end` für die Inhaltsverteilung.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, {{cssxref("justify-self")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}} und {{cssxref("place-self")}}
- Andere Box-Ausrichtungsdatentypen: {{cssxref("content-distribution")}}, {{cssxref("content-position")}}, {{cssxref("overflow-position")}}, und {{cssxref("self-position")}}
- [CSS Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment)
- [CSS Flexibler Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Raster-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
