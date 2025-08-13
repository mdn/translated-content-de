---
title: border-block
slug: Web/CSS/border-block
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`border-block`** [CSS](/de/docs/Web/CSS)-Eigenschaft ist eine [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), die die individuellen logischen Blockrand-Eigenschaften an einer einzigen Stelle im Stylesheet festlegt.

{{InteractiveExample("CSS Demo: border-block")}}

```css interactive-example-choice
border-block: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block: 1rem solid;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

`border-block` kann verwendet werden, um die Werte für eine oder mehrere der Eigenschaften {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}} und {{cssxref("border-block-color")}} festzulegen und sowohl den Anfang als auch das Ende in der Blockdimension gleichzeitig zu definieren. Die physischen Ränder, auf die es sich bezieht, hängen vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Es entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Die Ränder in der anderen Dimension können mit {{cssxref("border-inline")}} festgelegt werden, welche {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}} setzt.

## Bestandeigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-block-color`](/de/docs/Web/CSS/border-block-color)
- [`border-block-style`](/de/docs/Web/CSS/border-block-style)
- [`border-block-width`](/de/docs/Web/CSS/border-block-width)

## Syntax

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;

/* Global values */
border-block: inherit;
border-block: initial;
border-block: revert;
border-block: revert-layer;
border-block: unset;
```

### Werte

Die `border-block` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Die Linienart des Randes. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rand mit vertikalem Text

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-block: 5px dashed blue;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft verweist auf eine der physischen Randeigenschaften: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
