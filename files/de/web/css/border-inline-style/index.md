---
title: border-inline-style
slug: Web/CSS/border-inline-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-inline-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Stil der logischen Inline-Ränder eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements zu einem physischen Randstil abgebildet wird. Sie entspricht den Eigenschaften {{cssxref("border-top-style")}} und {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}} und {{cssxref("border-right-style")}} abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-inline-style")}}

```css interactive-example-choice
border-inline-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-style: groove;
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

Der Randstil in der anderen Dimension kann mit {{cssxref("border-block-style")}} festgelegt werden, das {{cssxref("border-block-start-style")}} und {{cssxref("border-block-end-style")}} setzt.

## Syntax

```css
/* <'border-style'> values */
border-inline-style: dashed;
border-inline-style: dotted;
border-inline-style: groove;

/* Global values */
border-inline-style: inherit;
border-inline-style: initial;
border-inline-style: revert;
border-inline-style: revert-layer;
border-inline-style: unset;
```

### Werte

- `<'border-style'>`
  - : Der Linienstil des Randes. Siehe {{ cssxref("border-style") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von border-inline-style

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
  border: 5px solid blue;
  border-inline-style: dashed;
}
```

{{EmbedLiveSample("Setting border-inline-style", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Rand-Eigenschaften abgebildet: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
