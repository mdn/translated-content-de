---
title: Berechneter Wert
slug: Web/CSS/CSS_cascade/computed_value
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Der **berechnete Wert** einer [CSS](/de/docs/Web/CSS) Eigenschaft ist der Wert, der während der Vererbung von Eltern zu Kind weitergegeben wird. Er wird aus dem [spezifizierten Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) berechnet durch:

1. Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Durchführung der Berechnung, die erforderlich ist, um den im Definitionsabschnitt der Eigenschaft beschriebenen "Berechneten Wert" zu erreichen.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, umfasst typischerweise die Umwandlung relativer Werte (wie z. B. solcher in `em` Einheiten oder Prozentangaben) in absolute Werte. Zum Beispiel, wenn ein Element spezifizierte Werte von `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften (solche, bei denen Prozentsätze relativ zu etwas sind, das möglicherweise ein Layout erfordert, um bestimmt zu werden, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentual spezifizierte Werte zu prozentual berechneten Werten. Darüber hinaus werden auf der Eigenschaft `line-height` angegebene einheitenlose Zahlen wie spezifiziert zum berechneten Wert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) bestimmt wird.

> [!NOTE]
> Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) DOM-API gibt den [gelösten Wert](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der berechnete Wert oder der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) sein kann.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- CSS Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Rand-Kollabieren](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Gelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
