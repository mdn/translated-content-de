---
title: border-inline-start-width
slug: Web/CSS/border-inline-start-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-inline-start-width`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Breite des logischen inline-start Rands eines Elements, die sich je nach Schreibrichtung, Richtung und Textausrichtung des Elements auf eine physische Randbreite abbildet. Sie entspricht der {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} oder {{cssxref("border-left-width")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-inline-start-width")}}

```css interactive-example-choice
border-inline-start-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start-width: 4px;
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
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Syntax

```css
/* <'border-width'> values */
border-inline-start-width: 5px;
border-inline-start-width: thick;

/* Global values */
border-inline-start-width: inherit;
border-inline-start-width: initial;
border-inline-start-width: revert;
border-inline-start-width: revert-layer;
border-inline-start-width: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}}, und {{cssxref("border-inline-end-width")}}, die die anderen Randbreiten des Elements definieren.

### Werte

- `<'border-width'>`
  - : Die Breite des Rands. Siehe {{ cssxref("border-width") }}.

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
  border: 1px solid blue;
  border-inline-start-width: 5px;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Randeigenschaften zugeordnet: {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, und {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
