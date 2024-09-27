---
title: Computed value
slug: Web/CSS/computed_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **computed value** (berechnete Wert) einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, der bei der Vererbung von Eltern- zu Kind-Elementen übertragen wird. Er wird aus dem [specified value](/de/docs/Web/CSS/specified_value) berechnet durch:

1. Bearbeitung der Spezialwerte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der Zeile "Computed value" in der Definitionstabelle der Eigenschaft beschrieben ist.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, umfasst typischerweise die Umwandlung relativer Werte (wie beispielsweise solche in `em`-Einheiten oder Prozentwerten) in absolute Werte. Ein Beispiel: Wenn ein Element angegebene Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (doppelte Schriftgröße).

Für einige Eigenschaften jedoch (solche, bei denen Prozentsätze relativ zu etwas sind, das möglicherweise ein Layout zur Bestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`), verwandeln sich prozentual angegebene Werte in prozentual berechnete Werte. Außerdem werden einheitenlose Zahlen, die für die Eigenschaft `line-height` angegeben sind, der berechnete Wert, wie angegeben. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [used value](/de/docs/Web/CSS/used_value) ermittelt wird.

> [!NOTE]
> Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) DOM-API gibt den [resolved value](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der berechnete Wert oder der [used value](/de/docs/Web/CSS/used_value) sein kann.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- Zentrale CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-rules](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Gebrauchte Werte](/de/docs/Web/CSS/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Syntax der Wertedefinition](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
