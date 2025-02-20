---
title: Anfangswert
slug: Web/CSS/CSS_cascade/initial_value
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Der **Anfangswert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist ihr Standardwert, wie in ihrer Definitionstabelle in der Spezifikation angegeben. Die Nutzung des Anfangswerts hängt davon ab, ob eine Eigenschaft vererbt wird oder nicht:

- Bei [vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) wird der Anfangswert _nur beim Wurzelelement_ verwendet, solange kein [angegebener Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) festgelegt ist.
- Bei [nicht vererbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties) wird der Anfangswert bei _allen Elementen_ verwendet, solange kein [angegebener Wert](/de/docs/Web/CSS/CSS_cascade/specified_value) festgelegt ist.

Sie können den Anfangswert explizit angeben, indem Sie das {{cssxref("initial")}}-Schlüsselwort verwenden.

> [!NOTE]
> Der Anfangswert sollte nicht mit dem Wert verwechselt werden, der durch das Stylesheet des Browsers angegeben wird.

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
  - [Layout-Modelle](/de/docs/Web/CSS/Layout_mode)
  - [Modelle der visuellen Formatierung](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randüberlagerung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Aufgelöste Werte](/de/docs/Web/CSS/resolved_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - [Definition von Wert-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
  - [Kurzschreibweisen](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
