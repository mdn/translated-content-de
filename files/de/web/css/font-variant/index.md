---
title: font-variant
slug: Web/CSS/font-variant
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`font-variant`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, alle Schriftvarianten für eine Schriftart festzulegen.

Sie können auch die `<font-variant-css2>` Werte von `font-variant`, die in CSS Level 2.1 definiert sind (das heißt `normal` oder `small-caps`), mit der [`font`](/de/docs/Web/CSS/font) Kurzschreibweise einstellen.

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

  - : Gibt eine normale Schriftart an. Jede Langform-Eigenschaft hat einen Anfangswert von `normal`.

- `none`

  - : Setzt den Wert von [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) auf `none` und die Werte der anderen Langform-Eigenschaften auf `normal`, ihren Anfangswert.

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`

  - : Gibt die Schlüsselwörter an, die sich auf die Langform-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) beziehen. Die möglichen Werte sind `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` und `no-contextual`.

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`

  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) beziehen.

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`

  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps) beziehen. Der `small-caps` Wert ist die einzige nicht-`normal` Schriftvariante, die innerhalb der {{cssxref("font")}} Kurzschreibweise gültig ist.

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

### Einstellen der small-caps Schriftvariante

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

- {{cssxref("text-transform")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
- SVG {{SVGAttr("font-variant")}} Attribut
