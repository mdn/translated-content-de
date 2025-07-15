---
title: border-block-start-style
slug: Web/CSS/border-block-start-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-block-start-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Stil des logischen Anfangsrahmens eines Blocks eines Elements, der je nach Schreibrichtung, Richtung und Textausrichtung des Elements einem physischen Rahmenstil zugeordnet wird. Sie entspricht der {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}} oder {{cssxref("border-left-style")}} Eigenschaft, je nachdem, welche Werte für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

{{InteractiveExample("CSS Demo: border-block-start-style")}}

```css interactive-example-choice
border-block-start-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-start-style: groove;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-start-style: dashed;
writing-mode: vertical-lr;
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
/* <'border-style'> values */
border-block-start-style: dashed;
border-block-start-style: dotted;
border-block-start-style: groove;

/* Global values */
border-block-start-style: inherit;
border-block-start-style: initial;
border-block-start-style: revert;
border-block-start-style: revert-layer;
border-block-start-style: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-end-style")}}, {{cssxref("border-inline-start-style")}}, und {{cssxref("border-inline-end-style")}}, die die anderen Rahmenstile des Elements definieren.

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
  border-block-start-style: dashed;
}
```

#### Ergebnisse

{{EmbedLiveSample("Dashed_border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einem der physischen Rahmenstile zugeordnet: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
