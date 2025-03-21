---
title: Initialwert
slug: Web/CSS/CSS_cascade/initial_value
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Der **Initialwert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Standardwert, wie in der Definitionstabelle der Spezifikation aufgeführt. Die Verwendung des Initialwertes hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

- Bei [vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Initialwert _nur auf das Wurzelelement_ angewendet, solange kein [spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) angegeben ist.
- Bei [nicht vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Initialwert auf _alle Elemente_ angewendet, solange kein [spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#specified_value) angegeben ist.

Sie können den Initialwert explizit durch Verwendung des {{cssxref("initial")}} Schlüsselwortes angeben.

> [!NOTE]
> Der Initialwert sollte nicht mit dem Wert verwechselt werden, der durch das Stylesheet des Browsers vorgegeben wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("initial")}}
- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - [Wert-Definitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschrift-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
