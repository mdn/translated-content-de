---
title: Actual value
slug: Web/CSS/actual_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **Actual Value** eines [CSS](/de/docs/Web/CSS)-Eigenschaft ist der [Used Value](/de/docs/Web/CSS/used_value) dieser Eigenschaft, nachdem alle notwendigen Annäherungen angewendet wurden. Zum Beispiel kann ein {{Glossary("user_agent", "User Agent")}}, der nur Ränder mit einer ganzzahligen Pixelbreite rendern kann, die Dicke des Randes auf die nächste ganze Zahl runden.

## Berechnung des Actual Value einer Eigenschaft

Der {{Glossary("user_agent", "User Agent")}} führt vier Schritte aus, um den tatsächlichen (endgültigen) Wert einer Eigenschaft zu berechnen:

1. Zuerst wird der [Specified Value](/de/docs/Web/CSS/specified_value) basierend auf dem Ergebnis der [Kaskade](/de/docs/Web/CSS/Cascade), [Vererbung](/de/docs/Web/CSS/Inheritance) oder unter Verwendung des [Initial Value](/de/docs/Web/CSS/initial_value) bestimmt.
2. Als nächstes wird der [Computed Value](/de/docs/Web/CSS/computed_value) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` seinen berechneten `display` in `block` geändert haben).
3. Dann wird das Layout berechnet, was zum [Used Value](/de/docs/Web/CSS/used_value) führt.
4. Schließlich wird der Used Value entsprechend den Einschränkungen der lokalen Umgebung transformiert, was zum Actual Value führt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Schlüsselkonzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
