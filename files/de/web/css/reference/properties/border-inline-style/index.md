---
title: border-inline-style
slug: Web/CSS/Reference/Properties/border-inline-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-inline-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Stil der logischen Inline-Ränder eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements auf einen physischen Randstil abgebildet wird. Sie entspricht den Eigenschaften {{cssxref("border-top-style")}} und {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}} und {{cssxref("border-right-style")}}, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definiert sind.

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
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

Der Randstil in der anderen Dimension kann mit {{cssxref("border-block-style")}} festgelegt werden, welches {{cssxref("border-block-start-style")}} und {{cssxref("border-block-end-style")}} setzt.

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Randeigenschaften zugeordnet: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
