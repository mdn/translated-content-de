---
title: Actualwert
slug: Web/CSS/actual_value
l10n:
  sourceCommit: 24c2196fd3f32dd271a8b5e9a34d38a2060484d5
---

{{CSSRef}}

Der **Actualwert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der [verwendete Wert](/de/docs/Web/CSS/used_value) dieser Eigenschaft, nachdem alle notwendigen Annäherungen angewendet wurden. Zum Beispiel kann ein [User-Agent](/de/docs/Glossary/user_agent), der nur Ränder mit einer Ganzzahl-Pixelbreite rendern kann, die Dicke des Randes auf die nächste ganze Zahl runden.

## Berechnung des Actualwerts einer Eigenschaft

Der [User-Agent](/de/docs/Glossary/user_agent) führt vier Schritte durch, um den Actualwert (endgültigen Wert) einer Eigenschaft zu berechnen:

1. Zuerst wird der [spezifizierte Wert](/de/docs/Web/CSS/specified_value) basierend auf dem Ergebnis des [Kaskadens](/de/docs/Web/CSS/Cascade), der [Vererbung](/de/docs/Web/CSS/Inheritance) oder des [Anfangswerts](/de/docs/Web/CSS/initial_value) bestimmt.
2. Als Nächstes wird der [berechnete Wert](/de/docs/Web/CSS/computed_value) gemäß der Spezifikation berechnet (zum Beispiel wird bei einem `span` mit `position: absolute` der berechnete `display`-Wert auf `block` geändert).
3. Dann wird das Layout berechnet, wodurch der [verwendete Wert](/de/docs/Web/CSS/used_value) entsteht.
4. Schließlich wird der verwendete Wert entsprechend den Einschränkungen der lokalen Umgebung transformiert, was zum Actualwert führt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [At-Rules](/de/docs/Web/CSS/At-rule)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Rand-Zusammenfallen](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte:
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
  - [Wertdefinition-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
