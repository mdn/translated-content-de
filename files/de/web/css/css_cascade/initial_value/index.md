---
title: Anfangswert
slug: Web/CSS/CSS_cascade/initial_value
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Der **Anfangswert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist ihr Standardwert, wie in ihrer Definitionstabelle in der Spezifikation aufgeführt. Die Verwendung des Anfangswerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

- Bei [vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur auf dem _Stammelement_ verwendet, solange kein [angegebener Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) bereitgestellt wird.
- Bei [nicht vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert auf _alle Elemente_ angewendet, solange kein [angegebener Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) bereitgestellt wird.

Sie können den Anfangswert explizit angeben, indem Sie das Schlüsselwort {{cssxref("initial")}} verwenden.

> [!NOTE]
> Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der durch das Stylesheet des Browsers festgelegt wird.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("initial")}}
- Schlüsselkonzepte von CSS:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wert-Definitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
