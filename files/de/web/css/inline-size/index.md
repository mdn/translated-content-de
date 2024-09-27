---
title: inline-size
slug: Web/CSS/inline-size
l10n:
  sourceCommit: 9591173963147e1996e3f40892b90dd9f691e15d
---

{{CSSRef}}

Die CSS-Eigenschaft **`inline-size`** definiert die horizontale oder vertikale Größe eines Blockelements, abhängig von seinem Schreibmodus. Sie entspricht entweder der {{cssxref("width")}}- oder der {{cssxref("height")}}-Eigenschaft, je nach Wert von {{cssxref("writing-mode")}}.

Wenn der Schreibmodus vertikal ausgerichtet ist, bezieht sich der Wert von `inline-size` auf die Höhe des Elements; andernfalls bezieht er sich auf die Breite des Elements. Eine verwandte Eigenschaft ist {{cssxref("block-size")}}, die die andere Dimension des Elements definiert.

{{EmbedInteractiveExample("pages/css/inline-size.html")}}

## Syntax

```css
/* <length> values */
inline-size: 300px;
inline-size: 25em;
inline-size: anchor-size(width);
inline-size: anchor-size(--myAnchor inline);

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

Die `inline-size`-Eigenschaft nimmt die gleichen Werte an wie die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Inline-Größe in Pixel

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
