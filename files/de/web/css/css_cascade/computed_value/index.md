---
title: Berechneter Wert
slug: Web/CSS/CSS_cascade/computed_value
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Der **berechnete Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, der während der Vererbung vom Elternteil an das Kind übertragen wird. Er wird aus dem [spezifizierten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) berechnet durch:

1. Bearbeitung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschrieben ist.

Die Berechnung, die notwendig ist, um den berechneten Wert einer Eigenschaft zu erreichen, umfasst in der Regel die Umwandlung relativer Werte (wie solche in `em`-Einheiten oder Prozentwerten) in absolute Werte. Zum Beispiel, wenn ein Element die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelte Schriftgröße).

Für einige Eigenschaften (bei denen Prozentsätze relativ zu etwas sind, das möglicherweise ein Layout erfordert, um bestimmt zu werden, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentsatz-spezifizierte Werte zu prozentsatz-berechneten Werten. Zusätzlich werden zahlenlose Zahlen, die auf die `line-height`-Eigenschaft spezifiziert sind, zum berechneten Wert, wie spezifiziert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) bestimmt wird.

> [!NOTE]
> Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) DOM API gibt den [aufgelösten Wert](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der berechnete Wert oder der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) sein kann.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- Zentrale CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
