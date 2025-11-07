---
title: border-block-style
slug: Web/CSS/Reference/Properties/border-block-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-block-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Stil der logischen Blockgrenzen eines Elements. Diese werden entsprechend dem Schreibmodus, der Richtung und der Textausrichtung des Elements in einen physischen Rahmenstil umgewandelt. Sie entspricht den Eigenschaften {{cssxref("border-top-style")}} und {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}} und {{cssxref("border-right-style")}}, je nach den festgelegten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

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
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

Der Rahmenstil in der anderen Dimension kann mit {{cssxref("border-inline-style")}} festgelegt werden, das {{cssxref("border-inline-start-style")}} und {{cssxref("border-inline-end-style")}} setzt.

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

### Gestrichelter Rahmen mit vertikalem Text

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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rahmen-Eigenschaften zugeordnet: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
