---
title: font-variant
slug: Web/CSS/Reference/Properties/font-variant
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`font-variant`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es, alle Schriftvarianten für eine Schriftart festzulegen.

Sie können auch die `<font-variant-css2>` Werte von `font-variant`, die in CSS Level 2.1 definiert sind (das heißt, `normal` oder `small-caps`), durch die Nutzung der {{cssxref("font")}} Kurzschrift festlegen.

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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}

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
  - : Gibt ein normales Schriftbild an. Jede Langschreibweise besitzt den Anfangswert `normal`.

- `none`
  - : Setzt den Wert von {{cssxref("font-variant-ligatures")}} auf `none` und die Werte der anderen Langschreibweisen auf `normal`, ihren Anfangswert.

- `<common-lig-values>`, `<discretionary-lig-values>`, `<historical-lig-values>`, `<contextual-alt-values>`
  - : Gibt die Schlüsselwörter im Zusammenhang mit der {{cssxref("font-variant-ligatures")}} Langschreibweise an. Mögliche Werte sind `common-ligatures`, `no-common-ligatures`, `discretionary-ligatures`, `no-discretionary-ligatures`, `historical-ligatures`, `no-historical-ligatures`, `contextual` und `no-contextual`.

- `stylistic()`, `historical-forms`, `styleset()`, `character-variant()`, `swash()`, `ornaments()`, `annotation()`
  - : Gibt die Schlüsselwörter und Funktionen im Zusammenhang mit der {{cssxref("font-variant-ligatures")}} Langschreibweise an.

- `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`
  - : Gibt die Schlüsselwörter und Funktionen im Zusammenhang mit der {{cssxref("font-variant-caps")}} Langschreibweise an. Der Wert `small-caps` ist die einzige nicht-`normal` Schriftvariante, die innerhalb der Kurzschrift-Eigenschaft {{cssxref("font")}} gültig ist.

- `<numeric-figure-values>`, `<numeric-spacing-values>`, `<numeric-fraction-values>`, `ordinal`, `slashed-zero`
  - : Gibt die Schlüsselwörter im Zusammenhang mit der {{cssxref("font-variant-numeric")}} Langschreibweise an. Mögliche Werte sind `lining-nums`, `oldstyle-nums`, `proportional-nums`, `tabular-nums`, `diagonal-fractions`, `stacked-fractions`, `ordinal`, und `slashed-zero`.

- `<east-asian-variant-values>`, `<east-asian-width-values>`, `ruby`
  - : Gibt die Schlüsselwörter im Zusammenhang mit der {{cssxref("font-variant-east-asian")}} Langschreibweise an. Mögliche Werte sind `jis78`, `jis83`, `jis90`, `jis04`, `simplified`, `traditional`, `full-width`, `proportional-width` und `ruby`.

- `sub`, `super`
  - : Gibt die Schlüsselwörter und Funktionen im Zusammenhang mit der {{cssxref("font-variant-position")}} Langschreibweise an.

- `text`, `emoji`, `unicode`
  - : Gibt die Schlüsselwörter und Funktionen im Zusammenhang mit der {{cssxref("font-variant-emoji")}} Langschreibweise an.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

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
