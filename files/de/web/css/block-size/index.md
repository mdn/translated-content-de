---
title: block-size
slug: Web/CSS/block-size
l10n:
  sourceCommit: 9591173963147e1996e3f40892b90dd9f691e15d
---

{{CSSRef}}

Die **`block-size`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die horizontale oder vertikale Größe eines Blockelements, abhängig von seinem Schreibmodus. Sie entspricht entweder der {{cssxref("width")}}- oder der {{cssxref("height")}}-Eigenschaft, abhängig vom Wert des {{cssxref("writing-mode")}}.

Wenn der Schreibmodus vertikal ausgerichtet ist, bezieht sich der Wert von `block-size` auf die Breite des Elements; andernfalls bezieht er sich auf die Höhe des Elements. Eine verwandte Eigenschaft ist {{cssxref("inline-size")}}, die die andere Dimension des Elements definiert.

{{EmbedInteractiveExample("pages/css/block-size.html")}}

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

Die `block-size`-Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften.

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
