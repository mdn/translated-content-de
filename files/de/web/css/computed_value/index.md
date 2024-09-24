---
title: Berechneter Wert
slug: Web/CSS/computed_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **berechnete Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, der während der Vererbung vom übergeordneten auf das untergeordnete Element übertragen wird. Er wird aus dem [spezifizierten Wert](/de/docs/Web/CSS/specified_value) berechnet, indem:

1. Die speziellen Werte {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} und {{cssxref("unset")}} behandelt werden.
2. Die Berechnung durchgeführt wird, die erforderlich ist, um den in der Zeile "Berechneter Wert" in der Definitionstabelle der Eigenschaft beschriebenen Wert zu erreichen.

Die Berechnung, die erforderlich ist, um zu einem berechneten Wert einer Eigenschaft zu gelangen, beinhaltet typischerweise die Umwandlung relativer Werte (wie solche in `em`-Einheiten oder Prozentsätzen) in absolute Werte. Wenn ein Element beispielsweise die spezifizierten Werte `font-size: 16px` und `padding-top: 2em` hat, dann beträgt der berechnete Wert von `padding-top` `32px` (doppelte Schriftgröße).

Für einige Eigenschaften (solche, bei denen Prozentsätze relativ zu etwas sind, das möglicherweise ein Layout erfordert, um bestimmt zu werden, wie `width`, `margin-right`, `text-indent` und `top`) werden prozentual spezifizierte Werte zu prozentual berechneten Werten. Zusätzlich werden zahlenlose Zahlen, die bei der Eigenschaft `line-height` spezifiziert sind, wie angegeben zum berechneten Wert. Die relativen Werte, die im berechneten Wert verbleiben, werden absolut, wenn der [verwendete Wert](/de/docs/Web/CSS/used_value) ermittelt wird.

> [!NOTE]
> Die {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM-API gibt den [aufgelösten Wert](/de/docs/Web/CSS/resolved_value) zurück, der je nach Eigenschaft entweder der berechnete Wert oder der [verwendete Wert](/de/docs/Web/CSS/used_value) sein kann.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{domxref("window.getComputedStyle")}}
- CSS Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise von Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
