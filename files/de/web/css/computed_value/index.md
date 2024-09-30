---
title: Computed value
slug: Web/CSS/computed_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **computed value** eines [CSS](/de/docs/Web/CSS)-Eigenschaftenwertes ist der Wert, der während der Vererbung von Eltern- zu Kindelement übertragen wird. Er wird aus dem [specified value](/de/docs/Web/CSS/specified_value) wie folgt berechnet:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der Zeile "Computed value" in der Definitionstabelle der Eigenschaft beschrieben ist.

Die Berechnung, die erforderlich ist, um den computed value einer Eigenschaft zu erreichen, umfasst typischerweise die Umwandlung relativer Werte (wie solche in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Wenn ein Element zum Beispiel die angegebenen Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der computed value von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften (solche, bei denen Prozentsätze relativ zu etwas sind, das für die Bestimmung des Layouts erforderlich sein kann, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentual angegebene Werte zu prozentual berechneten Werten. Außerdem werden zahllose Zahlen, die auf der Eigenschaft `line-height` angegeben sind, als computed value beibehalten, wie angegeben. Die relativen Werte, die im computed value verbleiben, werden absolut, wenn der [used value](/de/docs/Web/CSS/used_value) bestimmt wird.

> [!NOTE]
> Die DOM-API [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt den [resolved value](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der computed value oder der [used value](/de/docs/Web/CSS/used_value) sein kann.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-rules](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Used values](/de/docs/Web/CSS/used_value)
    - [Resolved values](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
