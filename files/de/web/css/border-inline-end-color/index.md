---
title: border-inline-end-color
slug: Web/CSS/border-inline-end-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-inline-end-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe des logischen Inline-Endrandes eines Elements, die je nach dem Schreibmodus des Elements, der Richtung und der Textausrichtung einer physischen Randfarbe zugeordnet wird. Sie entspricht der {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} oder {{cssxref("border-left-color")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-inline-end-color")}}

```css interactive-example-choice
border-inline-end-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-end-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-end-color: rgb(170 50 220 / 0.6);
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

## Syntax

```css
border-inline-end-color: rebeccapurple;
border-inline-end-color: #663399;

/* Global values */
border-inline-end-color: inherit;
border-inline-end-color: initial;
border-inline-end-color: revert;
border-inline-end-color: revert-layer;
border-inline-end-color: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}} und {{cssxref("border-inline-start-color")}}, die die anderen Randfarben des Elements definieren.

### Werte

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-inline-end-color: red;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rand-Eigenschaften zugeordnet: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
