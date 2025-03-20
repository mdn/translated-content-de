---
title: Tatsächlicher Wert
slug: Web/CSS/CSS_cascade/actual_value
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Der **tatsächliche Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) dieser Eigenschaft, nachdem alle notwendigen Annäherungen vorgenommen wurden. Zum Beispiel kann ein {{Glossary("user_agent", "User-Agent")}}, der nur Rahmen mit einer ganzen Pixelbreite darstellen kann, die Dicke des Rahmens auf die nächste ganze Zahl runden.

## Berechnung des tatsächlichen Wertes einer Eigenschaft

Der {{Glossary("user_agent", "User-Agent")}} führt vier Schritte durch, um den tatsächlichen (endgültigen) Wert einer Eigenschaft zu berechnen:

1. Zuerst wird der [angegebene Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) basierend auf dem Ergebnis des [Cascadings](/de/docs/Web/CSS/CSS_cascade/Cascade), der [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder unter Verwendung des [Initialwerts](/de/docs/Web/CSS/CSS_cascade/initial_value) bestimmt.
2. Als Nächstes wird der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) gemäß der Spezifikation berechnet (z. B. wird ein `span` mit `position: absolute` seinen berechneten `display`-Wert auf `block` geändert).
3. Dann wird das Layout berechnet, was zu dem [verwendeten Wert](/de/docs/Web/CSS/CSS_cascade/used_value) führt.
4. Schließlich wird der verwendete Wert entsprechend den Einschränkungen der lokalen Umgebung transformiert, was zu dem tatsächlichen Wert führt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
  - [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
