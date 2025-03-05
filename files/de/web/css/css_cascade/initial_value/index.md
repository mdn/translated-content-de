---
title: Anfangswert
slug: Web/CSS/CSS_cascade/initial_value
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{CSSRef}}

Der **Anfangswert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist ihr Standardwert, wie er in der Definitionstabelle der Spezifikation aufgeführt ist. Die Verwendung des Anfangswerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

- Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert nur auf das _Wurzelelement_ angewendet, solange kein [spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) bereitgestellt wird.
- Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert auf _alle Elemente_ angewendet, solange kein [spezifizierter Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) bereitgestellt wird.

Sie können den Anfangswert explizit angeben, indem Sie das {{cssxref("initial")}} Schlüsselwort verwenden.

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
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Rand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Wertdefinition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - [Kurzschlüssige Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
