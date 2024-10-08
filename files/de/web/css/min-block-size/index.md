---
title: min-block-size
slug: Web/CSS/min-block-size
l10n:
  sourceCommit: 9591173963147e1996e3f40892b90dd9f691e15d
---

{{CSSRef}}

Die **`min-block-size`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert die minimale horizontale oder vertikale Größe eines Blockelements, abhängig von seinem Schreibmodus. Sie entspricht entweder der {{cssxref("min-width")}}- oder der {{cssxref("min-height")}}-Eigenschaft, abhängig vom Wert des {{cssxref("writing-mode")}}.

Wenn der Schreibmodus vertikal orientiert ist, bezieht sich der Wert von `min-block-size` auf die Mindestbreite des Elements; andernfalls bezieht er sich auf die Mindesthöhe des Elements. Eine verwandte Eigenschaft ist {{cssxref("min-inline-size")}}, die die andere Dimension des Elements definiert.

{{EmbedInteractiveExample("pages/css/min-block-size.html")}}

## Syntax

```css
/* <length> values */
min-block-size: 100px;
min-block-size: 5em;
min-block-size: anchor-size(self-inline);

/* <percentage> values */
min-block-size: 10%;

/* Keyword values */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content;
min-block-size: fit-content(20em);

/* Global values */
min-block-size: inherit;
min-block-size: initial;
min-block-size: revert;
min-block-size: revert-layer;
min-block-size: unset;
```

### Werte

Die `min-block-size`-Eigenschaft nimmt die gleichen Werte wie die Eigenschaften {{cssxref("min-width")}} und {{cssxref("min-height")}} an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Minimale Blockgröße für vertikalen Text festlegen

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  min-block-size: 200px;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_minimum_block_size_for_vertical_text")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugeordneten physischen Eigenschaften: {{cssxref("min-width")}} und {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
