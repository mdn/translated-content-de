---
title: Ursprungswert
slug: Web/CSS/CSS_cascade/initial_value
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Der **Ursprungswert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist ihr Standardwert, wie er in der Definitionstabelle in der Spezifikation aufgeführt ist. Die Nutzung des Ursprungswerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

- Bei [vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Ursprungswert nur auf das _Root-Element_ angewendet, sofern kein [spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) angegeben ist.
- Bei [nicht vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Ursprungswert auf _alle Elemente_ angewendet, sofern kein [spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) angegeben ist.

Sie können den Ursprungswert explizit mit dem {{cssxref("initial")}} Schlüsselwort angeben.

> [!NOTE]
> Der Ursprungswert sollte nicht mit dem Wert verwechselt werden, der im Stylesheet des Browsers angegeben ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("initial")}}
- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin Collapse](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Syntax zur Wertedefinition](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
