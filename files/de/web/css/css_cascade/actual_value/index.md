---
title: Tatsächlicher Wert
slug: Web/CSS/CSS_cascade/actual_value
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Der **tatsächliche Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) dieser Eigenschaft, nachdem alle notwendigen Annäherungen vorgenommen wurden. Beispielsweise kann ein {{Glossary("user_agent", "User-Agent")}}, der nur Ränder mit einer ganzen Pixelbreite darstellen kann, die Dicke des Rahmens auf die nächste ganze Zahl runden.

## Berechnung des tatsächlichen Wertes einer Eigenschaft

Der {{Glossary("user_agent", "User-Agent")}} führt vier Schritte durch, um den tatsächlichen (endgültigen) Wert einer Eigenschaft zu berechnen:

1. Zuerst wird der [spezifizierte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) basierend auf dem Ergebnis des [Kaskadieren](/de/docs/Web/CSS/CSS_cascade/Cascade), der [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance) oder unter Verwendung des [Initialwerts](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) bestimmt.
2. Als nächstes wird der [berechnete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) gemäß der Spezifikation berechnet (zum Beispiel wird ein `span` mit `position: absolute` sein berechnetes `display` auf `block` ändern).
3. Dann wird das Layout berechnet, was zum [verwendeten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) führt.
4. Schließlich wird der verwendete Wert gemäß den Einschränkungen der lokalen Umgebung transformiert, was den tatsächlichen Wert ergibt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Hauptkonzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweiseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
