---
title: Specified value
slug: Web/CSS/specified_value
l10n:
  sourceCommit: ce07a52c8ffd27f402b0490aca5626caa623923f
---

{{CSSRef}}

Der **spezifizierte Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, den sie vom Stilblatt des Dokuments erhält. Der spezifizierte Wert für eine gegebene Eigenschaft wird gemäß den folgenden Regeln bestimmt:

1. Wenn das Stilblatt des Dokuments explizit einen Wert für die Eigenschaft angibt, wird der angegebene Wert verwendet.
2. Wenn das Stilblatt des Dokuments keinen Wert angibt, die Eigenschaft jedoch vererbt wird, wird der Wert vom Elternelement übernommen.
3. Wenn keine der oben genannten Bedingungen zutrifft, wird der [Anfangswert](/de/docs/Web/CSS/initial_value) des Elements verwendet.

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

- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [At-Rules](/de/docs/Web/CSS/At-rule)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Rand-Kollabierung](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Anfangswert](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertdefinitions-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Kurzschreibweise von Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
