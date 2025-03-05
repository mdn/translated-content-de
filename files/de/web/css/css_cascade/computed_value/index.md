---
title: Berechneter Wert
slug: Web/CSS/CSS_cascade/computed_value
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{CSSRef}}

Der **berechnete Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, der bei der Vererbung vom Elternteil auf das Kind übertragen wird. Er wird aus dem [angegebenen Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) berechnet durch:

1. Die Behandlung der speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}}.
2. Die Durchführung der erforderlichen Berechnung, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschrieben wird.

Die Berechnung, die erforderlich ist, um den berechneten Wert einer Eigenschaft zu erreichen, beinhaltet typischerweise die Umwandlung relativer Werte (wie solche in `em`-Einheiten oder Prozentangaben) in absolute Werte. Wenn ein Element beispielsweise die angegebenen Werte `font-size: 16px` und `padding-top: 2em` hat, dann beträgt der berechnete Wert von `padding-top` `32px` (das Doppelte der Schriftgröße).

Für einige Eigenschaften (für die Prozentsätze relativ zu etwas sind, das möglicherweise ein Layout zur Bestimmung erfordert, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentual angegebene Werte zu prozentual berechneten Werten. Zusätzlich werden einheitslose Zahlen, die auf der `line-height`-Eigenschaft angegeben sind, wie angegeben zum berechneten Wert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) bestimmt wird.

> [!NOTE]
> Die [`getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) DOM-API gibt den [auflösenden Wert](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der berechnete Wert oder der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) sein kann.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle)
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Ausgangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweiseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
