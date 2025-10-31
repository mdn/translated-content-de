---
title: font-variant
slug: Web/CSS/Reference/Properties/font-variant
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-variant`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es Ihnen, alle Schriftvarianten für eine Schriftart festzulegen.

Sie können auch die `<font-variant-css2>` Werte von `font-variant` definieren, die in CSS Level 2.1 definiert sind (das heißt, `normal` oder `small-caps`), indem Sie die [`font`](/de/docs/Web/CSS/Reference/Properties/font) Shorthand-Eigenschaft verwenden.

{{InteractiveExample("CSS Demo: font-variant")}}

```css interactive-example-choice
font-variant: normal;
```

```css interactive-example-choice
font-variant: no-common-ligatures proportional-nums;
```

```css interactive-example-choice
font-variant: common-ligatures tabular-nums;
```

```css interactive-example-choice
font-variant: small-caps slashed-zero;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>Difficult waffles</p>
    <table>
      <tr>
        <td><span class="tabular">0O</span></td>
      </tr>
      <tr>
        <td><span class="tabular">3.14</span></td>
      </tr>
      <tr>
        <td><span class="tabular">2.71</span></td>
      </tr>
    </table>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}

#example-element table {
  margin-left: auto;
  margin-right: auto;
}

.tabular {
  border: 1px solid;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`font-variant-alternates`](/de/docs/Web/CSS/Reference/Properties/font-variant-alternates)
- [`font-variant-caps`](/de/docs/Web/CSS/Reference/Properties/font-variant-caps)
- [`font-variant-east-asian`](/de/docs/Web/CSS/Reference/Properties/font-variant-east-asian)
- [`font-variant-emoji`](/de/docs/Web/CSS/Reference/Properties/font-variant-emoji)
- [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures)
- [`font-variant-numeric`](/de/docs/Web/CSS/Reference/Properties/font-variant-numeric)
- [`font-variant-position`](/de/docs/Web/CSS/Reference/Properties/font-variant-position)

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
  - : Spezifiziert eine normale Schriftart. Jede Langform-Eigenschaft hat einen Anfangswert von `normal`.

- `none`
  - : Legt den Wert der [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures) als `none` fest und die Werte der anderen Langform-Eigenschaften als `normal`, ihren Anfangswert.

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : Gibt die Schlüsselwörter an, die sich auf die Langform-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures) beziehen. Die möglichen Werte sind `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` und `no-contextual`.

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures) beziehen.

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/Reference/Properties/font-variant-caps) beziehen. Der `small-caps` Wert ist die einzige nicht-`normal` Schriftvariante, die in der {{cssxref("font")}} Shorthand-Eigenschaft gültig ist.

- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : Gibt die Schlüsselwörter an, die sich auf die Langform-Eigenschaft [`font-variant-numeric`](/de/docs/Web/CSS/Reference/Properties/font-variant-numeric) beziehen. Die möglichen Werte sind `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal` und `slashed-zero`.

- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : Gibt die Schlüsselwörter an, die sich auf die Langform-Eigenschaft [`font-variant-east-asian`](/de/docs/Web/CSS/Reference/Properties/font-variant-east-asian) beziehen. Die möglichen Werte sind `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width` und `ruby`.

- `sub`, `super`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-position`](/de/docs/Web/CSS/Reference/Properties/font-variant-position) beziehen.

- `text`, `emoji`, `unicode`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-emoji`](/de/docs/Web/CSS/Reference/Properties/font-variant-emoji) beziehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der small-caps Schriftvariante

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
