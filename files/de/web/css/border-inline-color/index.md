---
title: border-inline-color
slug: Web/CSS/border-inline-color
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`border-inline-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe der logischen Inline-Ränder eines Elements, die je nach Schreibmodus, Richtung und Textorientierung des Elements auf eine physische Randfarbe abgebildet wird. Sie entspricht der {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}, oder der {{cssxref("border-right-color")}} und {{cssxref("border-left-color")}} Eigenschaft, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

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
border-inline-color: rgb(170, 50, 220, 0.6);
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
  background-color: #eee;
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

Die Randfarbe in der anderen Dimension kann mit {{cssxref("border-block-color")}} gesetzt werden, das {{cssxref("border-block-start-color")}} und {{cssxref("border-block-end-color")}} definiert.

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

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird auf die physischen Rand-Eigenschaften abgebildet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
