---
title: Initialwert
slug: Web/CSS/CSS_cascade/initial_value
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Der **Initialwert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist ihr Standardwert, wie er in der Definitionstabelle in der Spezifikation aufgeführt ist. Die Verwendung des Initialwerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

- Bei [vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Initialwert nur auf das _Root-Element_ angewendet, sofern kein [angegebener Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) angegeben ist.
- Bei [nicht vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Initialwert auf _alle Elemente_ angewendet, solange kein [angegebener Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) angegeben ist.

Sie können den Initialwert explizit angeben, indem Sie das {{cssxref("initial")}}-Schlüsselwort verwenden.

> [!NOTE]
> Der Initialwert sollte nicht mit dem Wert verwechselt werden, der durch das Stylesheet des Browsers festgelegt wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("initial")}}
- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layoutmodi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Margin Collapse](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise für Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
