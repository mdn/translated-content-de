---
title: Tatsächlicher Wert
slug: Web/CSS/CSS_cascade/actual_value
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Der **tatsächliche Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/used_value) dieser Eigenschaft, nachdem alle notwendigen Annäherungen vorgenommen wurden. Zum Beispiel kann ein {{Glossary("user_agent", "User-Agent")}}, der nur Rahmen mit einer ganzen Pixelbreite rendern kann, die Dicke des Rahmens auf die nächste ganze Zahl runden.

## Berechnung des tatsächlichen Werts einer Eigenschaft

Der {{Glossary("user_agent", "User-Agent")}} führt vier Schritte aus, um den tatsächlichen (endgültigen) Wert einer Eigenschaft zu berechnen:

1. Zuerst wird der [angegebene Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) auf der Grundlage des Ergebnisses des [Kaskadierungsprozesses](/de/docs/Web/CSS/CSS_cascade/Cascade), der [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder durch die Verwendung des [initialen Werts](/de/docs/Web/CSS/CSS_cascade/initial_value) bestimmt.
2. Anschließend wird der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` seinen berechneten `display`-Wert auf `block` ändern).
3. Danach wird das Layout berechnet, was zum [verwendeten Wert](/de/docs/Web/CSS/CSS_cascade/used_value) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was den tatsächlichen Wert ergibt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initiale Werte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
  - [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise für Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
