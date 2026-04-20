---
title: "`inline-size` CSS property"
short-title: inline-size
slug: Web/CSS/Reference/Properties/inline-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`inline-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Größe eines Elements entlang der {{Glossary("Grid_Axis", "Inline-Achse")}}. Wenn der {{cssxref("writing-mode")}} horizontal ist, entspricht sie der {{cssxref("width")}}; bei vertikalem Schreibmodus entspricht sie der {{cssxref("height")}}. Eine verwandte Eigenschaft ist {{cssxref("block-size")}}, die die andere Dimension des Elements definiert.

{{InteractiveExample("CSS Demo: inline-size")}}

```css interactive-example-choice
inline-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inline-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the inline-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

## Syntax

```css
/* <length> values */
inline-size: 300px;
inline-size: 25em;
inline-size: anchor-size(width);
inline-size: anchor-size(--my-anchor inline);

/* <percentage> values */
inline-size: 75%;

/* Keyword values */
inline-size: max-content;
inline-size: min-content;
inline-size: fit-content;
inline-size: fit-content(20em);
inline-size: auto;

/* Global values */
inline-size: inherit;
inline-size: initial;
inline-size: revert;
inline-size: revert-layer;
inline-size: unset;
```

### Werte

Die `inline-size`-Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Größe in Pixeln festlegen

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  inline-size: 110px;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_size_in_pixels")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugeordneten physischen Eigenschaften: {{cssxref("width")}} und {{cssxref("height")}}
- {{cssxref("writing-mode")}}
