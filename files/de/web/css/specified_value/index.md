---
title: Angegebener Wert
slug: Web/CSS/specified_value
l10n:
  sourceCommit: ce07a52c8ffd27f402b0490aca5626caa623923f
---

{{CSSRef}}

Der **angegebene Wert** einer [CSS](/de/docs/Web/CSS)-Eigenschaft ist der Wert, den sie vom Stylesheet des Dokuments erhält. Der angegebene Wert für eine gegebene Eigenschaft wird nach den folgenden Regeln bestimmt:

1. Wenn das Stylesheet des Dokuments explizit einen Wert für die Eigenschaft angibt, wird der angegebene Wert verwendet.
2. Wenn das Stylesheet des Dokuments keinen Wert angibt, die Eigenschaft aber vererbbar ist, wird der Wert vom Elternelement übernommen.
3. Wenn keine der oben genannten Bedingungen zutrifft, wird der [Anfangswert](/de/docs/Web/CSS/initial_value) des Elements verwendet.

## Beispiele

### HTML

```html
<p>Meine angegebene Farbe wird explizit im CSS angegeben.</p>

<div>
  Die angegebenen Werte aller meiner Eigenschaften standardmäßig auf ihre Anfangswerte,
  da keiner von ihnen im CSS angegeben ist.
</div>

<div class="fun">
  <p>
    Der angegebene Wert meiner Schriftfamilie wird nicht explizit im CSS angegeben,
    daher wird er von meinem Elternteil geerbt. Der Rahmen jedoch ist keine vererbbare
    Eigenschaft.
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
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
- [Margin-Zusammenbruch](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Anfangs](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wert-Definitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Shorthand-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
