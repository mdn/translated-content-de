---
title: Berechneter Wert
slug: Web/CSS/CSS_cascade/computed_value
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Der **berechnete Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, der während der Vererbung vom Elternteil an das Kind übertragen wird. Er wird aus dem [spezifizierten Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) berechnet durch:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschrieben wird.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet normalerweise die Umwandlung relativer Werte (wie solche in `em`-Einheiten oder Prozentangaben) in absolute Werte. Wenn ein Element zum Beispiel die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften jedoch (jene, bei denen Prozentwerte relativ zu etwas sind, das eventuell ein Layout zur Bestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentual spezifizierte Werte zu prozentual berechneten Werten. Außerdem werden als Zahl ohne Einheit auf der `line-height`-Eigenschaft angegebene Werte zum berechneten Wert, wie spezifiziert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [benutzte Wert](/de/docs/Web/CSS/CSS_cascade/used_value) bestimmt wird.

> [!NOTE]
> Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) DOM-API gibt den [aufgelösten Wert](/de/docs/Web/CSS/resolved_value) zurück, der entweder der berechnete Wert oder der [benutzte Wert](/de/docs/Web/CSS/CSS_cascade/used_value) sein kann, abhängig von der Eigenschaft.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Benutzte Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise von Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
