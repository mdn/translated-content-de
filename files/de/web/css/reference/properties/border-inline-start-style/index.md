---
title: border-inline-start-style
slug: Web/CSS/Reference/Properties/border-inline-start-style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`border-inline-start-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Stil des logischen Inline-Start-Randes eines Elements, der je nach dem Schreibmodus, der Ausrichtung und der Textorientierung des Elements auf einen physischen Randstil abgebildet wird. Sie entspricht der {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}} Eigenschaft, je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definierten Werten.

{{InteractiveExample("CSS Demo: border-inline-start-style")}}

```css interactive-example-choice
border-inline-start-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-start-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-start-style: groove;
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
/* <'border-style'> values */
border-inline-start-style: dashed;
border-inline-start-style: dotted;
border-inline-start-style: groove;

/* Global values */
border-inline-start-style: inherit;
border-inline-start-style: initial;
border-inline-start-style: revert;
border-inline-start-style: revert-layer;
border-inline-start-style: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-style")}}, {{cssxref("border-block-end-style")}}, und {{cssxref("border-inline-end-style")}}, die die anderen Randstile des Elements definieren.

### Werte

- `<'border-style'>`
  - : Der Linienstil des Rands. Siehe {{ cssxref("border-style") }}.

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
  border: 5px solid blue;
  border-inline-start-style: dashed;
}
```

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Rand-Eigenschaften abgebildet: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
