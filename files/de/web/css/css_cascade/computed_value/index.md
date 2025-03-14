---
title: Berechneter Wert
slug: Web/CSS/CSS_cascade/computed_value
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Der **berechnete Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, der während der Vererbung von Eltern- zu Kindelementen übertragen wird. Er wird aus dem [spezifizierten Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) berechnet, indem:

1. Die speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}} verarbeitet werden.
2. Die notwendige Berechnung durchgeführt wird, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschrieben wird.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet typischerweise die Umwandlung relativer Werte (wie solche in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Zum Beispiel, wenn ein Element die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, dann ist der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Jedoch verwandeln sich bei einigen Eigenschaften (bei denen Prozentsätze relativ zu etwas sind, das möglicherweise ein Layout zur Bestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`) prozentual spezifizierte Werte in prozentual berechnete Werte. Außerdem werden einheitslose Zahlen, die auf der `line-height`-Eigenschaft spezifiziert sind, wie angegeben zum berechneten Wert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) bestimmt wird.

> [!NOTE]
> Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) DOM-API gibt den [aufgelösten Wert](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der berechnete Wert oder der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) sein kann.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
