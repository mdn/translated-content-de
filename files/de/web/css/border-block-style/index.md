---
title: border-block-style
slug: Web/CSS/border-block-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-block-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Stil der logischen Blockränder eines Elements, welcher je nach Schreibrichtung, Richtung und Textorientierung des Elements auf einen physikalischen Randstil abgebildet wird. Sie entspricht den {{cssxref("border-top-style")}} und {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}} und {{cssxref("border-right-style")}} Eigenschaften, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-block-style")}}

```css interactive-example-choice
border-block-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-style: groove;
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

Der Randstil in der anderen Dimension kann mit {{cssxref("border-inline-style")}} gesetzt werden, welche {{cssxref("border-inline-start-style")}}, und {{cssxref("border-inline-end-style")}} setzt.

## Syntax

```css
/* <'border-style'> values */
border-block-style: dashed;
border-block-style: dotted;
border-block-style: groove;

/* Global values */
border-block-style: inherit;
border-block-style: initial;
border-block-style: revert;
border-block-style: revert-layer;
border-block-style: unset;
```

### Werte

- `<'border-style'>`
  - : Der Linienstil des Rahmens. Siehe {{ cssxref("border-style") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gepunkteter Rahmen mit vertikalem Text

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
  border-block-style: dashed;
}
```

#### Ergebnisse

{{EmbedLiveSample("Dashed_border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Randeigenschaften abgebildet: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
