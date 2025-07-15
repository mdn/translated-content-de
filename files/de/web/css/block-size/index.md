---
title: block-size
slug: Web/CSS/block-size
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`block-size`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Größe eines Elements entlang der {{Glossary("Grid_Axis", "Block-Achse")}}. Wenn der {{cssxref("writing-mode")}} horizontal ist, entspricht dies der {{cssxref("height")}}; wenn der Schreibmodus vertikal ist, entspricht dies der {{cssxref("width")}}. Eine verwandte Eigenschaft ist {{cssxref("inline-size")}}, die die andere Dimension des Elements definiert.

{{InteractiveExample("CSS Demo: block-size")}}

```css interactive-example-choice
block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
block-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the block-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

## Syntax

```css
/* <length> values */
block-size: 300px;
block-size: 25em;
block-size: anchor-size(height);
block-size: calc(anchor-size(--myAnchor block) * 0.75);

/* <percentage> values */
block-size: 75%;

/* Keyword values */
block-size: max-content;
block-size: min-content;
block-size: fit-content;
block-size: fit-content(20em);
block-size: auto;

/* Global values */
block-size: inherit;
block-size: initial;
block-size: revert;
block-size: revert-layer;
block-size: unset;
```

### Werte

Die `block-size` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Blockgröße mit vertikalem Text

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

#### Ergebnis

{{EmbedLiveSample("Block_size_with_vertical_text")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugeordneten physischen Eigenschaften: {{cssxref("width")}} und {{cssxref("height")}}
- {{cssxref("writing-mode")}}
