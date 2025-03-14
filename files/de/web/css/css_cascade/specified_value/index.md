---
title: Angegebener Wert
slug: Web/CSS/CSS_cascade/specified_value
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Der **angegebene Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, den sie aus dem Stylesheet des Dokuments erhält. Der angegebene Wert für eine bestimmte Eigenschaft wird nach folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments explizit einen Wert für die Eigenschaft angibt, wird dieser Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, es sich jedoch um eine geerbte Eigenschaft handelt, wird der Wert vom Elternelement übernommen.
3. Wenn keine der oben genannten Regeln zutrifft, wird der [Initialwert](/de/docs/Web/CSS/CSS_cascade/initial_value) des Elements verwendet.

## Beispiele

### HTML

```html
<p>My specified color is given explicitly in the CSS.</p>

<div>
  The specified values of all my properties default to their initial values,
  because none of them are given in the CSS.
</div>

<div class="fun">
  <p>
    The specified value of my font family is not given explicitly in the CSS, so
    it is inherited from my parent. However, the border is not an inheriting
    property.
  </p>
</div>
```

### CSS

```css
.fun {
  border: 1px dotted pink;
  font-family: fantasy;
}

p {
  color: green;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 500, 220)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Modelle der visuellen Formatierung](/de/docs/Web/CSS/Visual_formatting_model)
- [Randüberlappung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Wertdefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Kurzschreibweise Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
