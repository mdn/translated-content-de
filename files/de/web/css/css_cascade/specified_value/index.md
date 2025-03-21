---
title: Angegebener Wert
slug: Web/CSS/CSS_cascade/specified_value
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Der **angegebene Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, den sie aus dem Stylesheet des Dokuments erhält. Der angegebene Wert für eine gegebene Eigenschaft wird nach den folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments einen Wert für die Eigenschaft explizit angibt, wird der angegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, die Eigenschaft aber vererbbar ist, wird der Wert vom Elternelement übernommen.
3. Wenn nichts davon zutrifft, wird der [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) des Elements verwendet.

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
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
- [Margen-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Anfangs](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wert-Definitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
