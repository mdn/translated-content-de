---
title: Berechneter Wert
slug: Web/CSS/CSS_cascade/computed_value
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Der **berechnete Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, der während der Vererbung vom Eltern-Element auf das Kind-Element übertragen wird. Er wird aus dem [spezifizierten Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) berechnet durch:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die benötigt wird, um den in der Zeile "Berechneter Wert" der Eigenschafts-Definitionstabelle beschriebenen Wert zu erreichen.

Die Berechnung, die notwendig ist, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet typischerweise die Umwandlung relativer Werte (wie solche in `em`-Einheiten oder Prozentangaben) in absolute Werte. Zum Beispiel, wenn ein Element die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften (diese, bei denen Prozentwerte sich auf etwas beziehen, das möglicherweise ein Layout benötigt, um festgelegt zu werden, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentual spezifizierte Werte zu prozentual berechneten Werten. Außerdem werden einheitenlose Zahlen, die auf der Eigenschaft `line-height` angegeben werden, zum berechneten Wert, wie angegeben. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) bestimmt wird.

> [!NOTE]
> Die DOM-API [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt den [auflösbaren Wert](/de/docs/Web/CSS/resolved_value) zurück, der entweder der berechnete Wert oder der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) sein kann, abhängig von der Eigenschaft.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- Grundlegende CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinierende Syntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise von Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
