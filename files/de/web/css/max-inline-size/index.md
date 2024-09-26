---
title: max-inline-size
slug: Web/CSS/max-inline-size
l10n:
  sourceCommit: 9591173963147e1996e3f40892b90dd9f691e15d
---

{{CSSRef}}

Die **`max-inline-size`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die maximale horizontale oder vertikale Größe eines Blockelements, abhängig von dessen Schreibrichtung. Sie entspricht entweder der {{cssxref("max-width")}} oder der {{cssxref("max-height")}} Eigenschaft, je nach Wert des {{cssxref("writing-mode")}}.

Ist die Schreibrichtung vertikal ausgerichtet, bezieht sich der Wert von `max-inline-size` auf die maximale Höhe des Elements; andernfalls bezieht er sich auf die maximale Breite des Elements. Eine verwandte Eigenschaft ist {{cssxref("max-block-size")}}, die die andere Dimension des Elements definiert.

{{EmbedInteractiveExample("pages/css/max-inline-size.html")}}

## Syntax

```css
/* <length> Werte */
max-inline-size: 300px;
max-inline-size: 25em;
max-inline-size: anchor-size(width);
max-inline-size: anchor-size(--myAnchor self-block, 200px);

/* <percentage> Werte */
max-inline-size: 75%;

/* Schlüsselwort-Werte */
max-inline-size: none;
max-inline-size: max-content;
max-inline-size: min-content;
max-inline-size: fit-content;
max-inline-size: fit-content(20em);

/* Globale Werte */
max-inline-size: inherit;
max-inline-size: initial;
max-inline-size: revert;
max-inline-size: revert-layer;
max-inline-size: unset;
```

### Werte

Die `max-inline-size` Eigenschaft nimmt dieselben Werte an wie die Eigenschaften {{cssxref("max-width")}} und {{cssxref("max-height")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maximale Inline-Größe in Pixeln setzen

#### HTML

```html
<p class="exampleText">Beispieltext</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-inline-size: 200px;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_maximum_inline_size_in_pixels")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugeordneten physischen Eigenschaften: {{cssxref("max-width")}} und {{cssxref("max-height")}}
- {{cssxref("writing-mode")}}