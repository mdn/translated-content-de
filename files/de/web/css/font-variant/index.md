---
title: font-variant
slug: Web/CSS/font-variant
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-variant`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ermöglicht es, alle Schriftvarianten für eine Schriftart zu setzen.

Sie können auch die `<font-variant-css2>`-Werte von `font-variant`, die in CSS Level 2.1 definiert sind (d.h. `normal` oder `small-caps`), mit der [`font`](/de/docs/Web/CSS/font) Kurzschreibweise setzen.

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

## Einzelne Eigenschaften

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
  - : Gibt ein normales Schriftbild an. Jede Langschrift-Eigenschaft hat einen Anfangswert von `normal`.

- `none`
  - : Setzt den Wert von [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) auf `none` und die Werte der anderen Langschrift-Eigenschaften auf `normal`, deren Anfangswert.

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : Gibt die Schlüsselwörter an, die sich auf die Langschrift-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) beziehen. Die möglichen Werte sind `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` und `no-contextual`.

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langschrift-Eigenschaft [`font-variant-ligatures`](/de/docs/Web/CSS/font-variant-ligatures) beziehen.

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langschrift-Eigenschaft [`font-variant-caps`](/de/docs/Web/CSS/font-variant-caps) beziehen. Der `small-caps`-Wert ist die einzige nicht-`normal` Schriftvariante, die in der {{cssxref("font")}} Kurzschreibweise gültig ist.

- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : Gibt die Schlüsselwörter an, die sich auf die Langschrift-Eigenschaft [`font-variant-numeric`](/de/docs/Web/CSS/font-variant-numeric) beziehen. Die möglichen Werte sind `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal` und `slashed-zero`.

- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : Gibt die Schlüsselwörter an, die sich auf die Langschrift-Eigenschaft [`font-variant-east-asian`](/de/docs/Web/CSS/font-variant-east-asian) beziehen. Die möglichen Werte sind `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width` und `ruby`.

- `sub`, `super`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langschrift-Eigenschaft [`font-variant-position`](/de/docs/Web/CSS/font-variant-position) beziehen.

- `text`, `emoji`, `unicode`
  - : Gibt die Schlüsselwörter und Funktionen an, die sich auf die Langschrift-Eigenschaft [`font-variant-emoji`](/de/docs/Web/CSS/font-variant-emoji) beziehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Small-Caps-Schriftvariante

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
