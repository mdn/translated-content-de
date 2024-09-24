---
title: block-größe
slug: Web/CSS/block-size
l10n:
  sourceCommit: 9591173963147e1996e3f40892b90dd9f691e15d
---

{{CSSRef}}

Die **`block-size`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die horizontale oder vertikale Größe eines Blockelements, abhängig von dessen Schreibrichtung. Sie entspricht entweder der {{cssxref("width")}}- oder der {{cssxref("height")}}-Eigenschaft, abhängig vom Wert des {{cssxref("writing-mode")}}.

Wenn die Schreibrichtung vertikal orientiert ist, bezieht sich der Wert von `block-size` auf die Breite des Elements; andernfalls bezieht er sich auf die Höhe des Elements. Eine verwandte Eigenschaft ist {{cssxref("inline-size")}}, die die andere Dimension des Elements definiert.

{{EmbedInteractiveExample("pages/css/block-size.html")}}

## Syntax

```css
/* <length> Werte */
block-size: 300px;
block-size: 25em;
block-size: anchor-size(height);
block-size: calc(anchor-size(--myAnchor block) * 0.75);

/* <percentage> Werte */
block-size: 75%;

/* Schlüsselwortwerte */
block-size: max-content;
block-size: min-content;
block-size: fit-content;
block-size: fit-content(20em);
block-size: auto;

/* Globale Werte */
block-size: inherit;
block-size: initial;
block-size: revert;
block-size: revert-layer;
block-size: unset;
```

### Werte

Die `block-size`-Eigenschaft nimmt die gleichen Werte wie die {{cssxref("width")}} und {{cssxref("height")}}-Eigenschaften an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Blockgröße mit vertikalem Text

#### HTML

```html
<p class="exampleText">Beispieltext</p>
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
