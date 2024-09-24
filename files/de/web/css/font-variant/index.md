---
title: font-variant
slug: Web/CSS/font-variant
l10n:
  sourceCommit: 9172a95797019960c7baa9e0916f4e25efcf3f27
---

{{CSSRef}}

Die **`font-variant`** CSS-[Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) ermöglicht es Ihnen, alle Schriftartenvarianten für eine Schriftart festzulegen.

Sie können auch die `<font-variant-css2>` Werte von `font-variant`, die in CSS Level 2.1 definiert sind (d.h. `normal` oder `small-caps`), über die [`font`](/de/docs/Web/CSS/font) Shorthand-Eigenschaft festlegen.

{{EmbedInteractiveExample("pages/css/font-variant.html")}}

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

- [`font-variant-alternates`](/de/docs/Web/CSS/font-variant-alternates)
- [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/font-variant-position)

## Syntax

```css
font-variant: small-caps;
font-variant: common-ligatures small-caps;

/* Globale Werte */
font-variant: inherit;
font-variant: initial;
font-variant: revert;
font-variant: revert-layer;
font-variant: unset;
```

### Werte

- `normal`

  - : Spezifiziert ein normales Schriftbild. Jede Langhand-Eigenschaft hat einen Anfangswert von `normal`.

- `none`

  - : Setzt den Wert der [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) auf `none` und die Werte der anderen Langhand-Eigenschaften auf `normal`, ihrem Anfangswert.

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`

  - : Spezifiziert die Schlüsselwörter, die mit der [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) Langhand-Eigenschaft in Zusammenhang stehen. Die möglichen Werte sind `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` und `no-contextual`.

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`

  - : Spezifiziert die Schlüsselwörter und Funktionen, die mit der [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) Langhand-Eigenschaft in Zusammenhang stehen.

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`

  - : Spezifiziert die Schlüsselwörter und Funktionen, die mit der [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps) Langhand-Eigenschaft in Zusammenhang stehen. Der Wert `small-caps` ist die einzige nicht-`normal` Schriftvariante, die innerhalb der {{cssxref("font")}} Shorthand-Eigenschaft gültig ist.

- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`

  - : Spezifiziert die Schlüsselwörter, die mit der [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric) Langhand-Eigenschaft in Zusammenhang stehen. Die möglichen Werte sind `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, und `slashed-zero`.

- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`

  - : Spezifiziert die Schlüsselwörter, die mit der [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian) Langhand-Eigenschaft in Zusammenhang stehen. Die möglichen Werte sind `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width`, und `ruby`.

- `sub`, `super`

  - : Spezifiziert die Schlüsselwörter und Funktionen, die mit der [`font-variant-position`](/de/docs/Web/CSS/font-variant-position) Langhand-Eigenschaft in Zusammenhang stehen.

- `text`, `emoji`, `unicode`
  - : Spezifiziert die Schlüsselwörter und Funktionen, die mit der [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) Langhand-Eigenschaft in Zusammenhang stehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der small-caps Schriftvariante

#### HTML

```html
<p class="normal">Firefox rocks!</p>
<p class="small">Firefox rocks!</p>
```

#### CSS

```css
p.normal {
  font-variant: normal;
}
p.small {
  font-variant: small-caps;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting the small-caps font variant') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`text-transform`](/de/docs/Web/CSS/text-transform)
- [`text-combine-upright`](/de/docs/Web/CSS/text-combine-upright)
- [`text-orientation`](/de/docs/Web/CSS/text-orientation)
