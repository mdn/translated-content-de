---
title: Tatsächlicher Wert
slug: Web/CSS/actual_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **tatsächliche Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der [verwendete Wert](/de/docs/Web/CSS/used_value) dieser Eigenschaft, nachdem alle notwendigen Annäherungen vorgenommen wurden. Ein {{glossary("user agent")}}, der Grenzen nur mit einer ganzzahligen Pixelbreite rendern kann, könnte beispielsweise die Dicke der Grenze auf die nächste ganze Zahl runden.

## Berechnung des tatsächlichen Werts einer Eigenschaft

Der {{glossary("user agent")}} führt vier Schritte durch, um den tatsächlichen (endgültigen) Wert einer Eigenschaft zu berechnen:

1. Zuerst wird der [angegebene Wert](/de/docs/Web/CSS/specified_value) basierend auf dem Ergebnis des [Cascadings](/de/docs/Web/CSS/Cascade), der [Vererbung](/de/docs/Web/CSS/Inheritance) oder unter Verwendung des [Anfangswerts](/de/docs/Web/CSS/initial_value) bestimmt.
2. Als nächstes wird der [berechnete Wert](/de/docs/Web/CSS/computed_value) gemäß der Spezifikation berechnet (zum Beispiel wird bei einem `span` mit `position: absolute` das berechnete `display` in `block` geändert).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](/de/docs/Web/CSS/used_value) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was zum tatsächlichen Wert führt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Grundkonzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Rules](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Entschlossene Werte](/de/docs/Web/CSS/resolved_value)
  - [Wertdefinition-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschrift-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
