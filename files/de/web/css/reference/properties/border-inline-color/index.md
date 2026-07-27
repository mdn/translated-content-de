---
title: "`border-inline-color` CSS property"
short-title: border-inline-color
slug: Web/CSS/Reference/Properties/border-inline-color
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die CSS-Eigenschaft **`border-inline-color`** definiert die Farbe der logischen Inline-Ränder eines Elements, die je nach Schreibrichtung, Textorientierung und Schreibrichtung des Elements auf eine physische Randfarbe abgebildet wird. Sie entspricht der {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}} oder {{cssxref("border-right-color")}} und {{cssxref("border-left-color")}} Eigenschaft, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Die Randfarbe in der anderen Dimension kann mit {{cssxref("border-block-color")}} festgelegt werden, die {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}} setzt.

{{InteractiveExample("CSS Demo: border-inline-color")}}

```css interactive-example-choice
border-inline-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-color: rgb(170 50 220 / 0.6);
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
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
border-inline-color: yellow;
border-inline-color: #f5f6f7;

/* Global values */
border-inline-color: inherit;
border-inline-color: initial;
border-inline-color: revert;
border-inline-color: revert-layer;
border-inline-color: unset;
```

### Werte

Diese Eigenschaft wird als ein `<color>`-Wert angegeben:

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rands.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Randfarbe mit vertikalem Text

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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-inline-color: red;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_color_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird auf die physischen Randeigenschaften abgebildet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
