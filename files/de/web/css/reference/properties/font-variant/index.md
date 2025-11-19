---
title: font-variant
slug: Web/CSS/Reference/Properties/font-variant
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

Die **`font-variant`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es Ihnen, alle Schriftvarianten für eine Schriftart festzulegen.

Sie können auch die `<font-variant-css2>`-Werte von `font-variant`, die in CSS Level 2.1 definiert sind, (d.h. `normal` oder `small-caps`), über die [`font`](/de/docs/Web/CSS/Reference/Properties/font) Kurzform setzen.

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
      <tbody>
        <tr>
          <td><span class="tabular">0O</span></td>
        </tr>
        <tr>
          <td><span class="tabular">3.14</span></td>
        </tr>
        <tr>
          <td><span class="tabular">2.71</span></td>
        </tr>
      </tbody>
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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Gibt eine normale Schriftart an. Jede Langform-Eigenschaft hat den Anfangswert `normal`.

- `none`
  - : Setzt den Wert von [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures) auf `none` und die Werte der anderen Langform-Eigenschaften auf `normal`, ihrem Anfangswert.

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : Gibt die Schlüsselwörter an, die sich auf die Langform-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures) beziehen. Die möglichen Werte sind `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` und `no-contextual`.

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures) beziehen.

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langform-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/Reference/Properties/font-variant-caps) beziehen. Der Wert `small-caps` ist die einzige nicht-`normal` Schriftvariante, die innerhalb der {{cssxref("font")}} Kurzform gültig ist.

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

### Die Schriftvariante small-caps setzen

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
