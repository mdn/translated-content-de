---
title: font-variant
slug: Web/CSS/font-variant
l10n:
  sourceCommit: 9172a95797019960c7baa9e0916f4e25efcf3f27
---

{{CSSRef}}

Die **`font-variant`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) ermöglicht Ihnen, alle Schriftvarianten für eine Schriftart festzulegen.

Sie können auch die `<font-variant-css2>` Werte von `font-variant`, die in CSS Level 2.1 definiert sind (also `normal` oder `small-caps`), mittels der [`font`](/de/docs/Web/CSS/font) Kurzschreibweise setzen.

{{EmbedInteractiveExample("pages/css/font-variant.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

/* Global values */
font-variant: inherit;
font-variant: initial;
font-variant: revert;
font-variant: revert-layer;
font-variant: unset;
```

### Werte

- `normal`

  - : Legt eine normale Schriftart fest. Jede Langform-Eigenschaft hat einen Initialwert von `normal`.

- `none`

  - : Setzt den Wert der [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) als `none` und die Werte der anderen Langform-Eigenschaften als `normal`, den Initialwert.

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`

  - : Gibt die Schlüsselwörter an, die sich auf die Langform-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) beziehen. Die möglichen Werte sind `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` und `no-contextual`.

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`

  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) beziehen.

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`

  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps) beziehen. Der Wert `small-caps` ist die einzige nicht-`normal` Schriftvariante, die innerhalb der {{cssxref("font")}} Kurzschreibweise gültig ist.

- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`

  - : Gibt die Schlüsselwörter an, die sich auf die Langform-Eigenschaft [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric) beziehen. Die möglichen Werte sind `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal` und `slashed-zero`.

- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`

  - : Gibt die Schlüsselwörter an, die sich auf die Langform-Eigenschaft [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian) beziehen. Die möglichen Werte sind `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width` und `ruby`.

- `sub`, `super`

  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-position`](/de/docs/Web/CSS/font-variant-position) beziehen.

- `text`, `emoji`, `unicode`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) beziehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der small-caps Schriftvariante

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
