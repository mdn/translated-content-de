---
title: min-inline-size
slug: Web/CSS/min-inline-size
l10n:
  sourceCommit: 9591173963147e1996e3f40892b90dd9f691e15d
---

{{CSSRef}}

Die **`min-inline-size`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die minimale horizontale oder vertikale Größe eines Blockelements, abhängig vom Schreibmodus. Sie entspricht entweder der Eigenschaft {{cssxref("min-width")}} oder der Eigenschaft {{cssxref("min-height")}}, abhängig vom Wert von {{cssxref("writing-mode")}}.

{{EmbedInteractiveExample("pages/css/min-inline-size.html")}}

## Syntax

```css
/* <length> values */
min-inline-size: 100px;
min-inline-size: 5em;
min-inline-size: anchor-size(width);

/* <percentage> values */
min-inline-size: 10%;

/* Keyword values */
min-inline-size: max-content;
min-inline-size: min-content;
min-inline-size: fit-content;
min-inline-size: fit-content(20em);

/* Global values */
min-inline-size: inherit;
min-inline-size: initial;
min-inline-size: revert;
min-inline-size: revert-layer;
min-inline-size: unset;
```

Wenn der Schreibmodus vertikal ausgerichtet ist, bezieht sich der Wert von `min-inline-size` auf die minimale Höhe des Elements; andernfalls bezieht er sich auf die minimale Breite des Elements. Eine verwandte Eigenschaft ist {{cssxref("min-block-size")}}, die die andere Dimension des Elements definiert.

### Werte

Die Eigenschaft `min-inline-size` nimmt die gleichen Werte an wie die Eigenschaften {{cssxref("min-width")}} und {{cssxref("min-height")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mindestgröße für vertikalen Text festlegen

#### HTML

```html
<p class="exampleText">Example text</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 5%;
  min-inline-size: 200px;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_minimum_inline_size_for_vertical_text")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugeordneten physischen Eigenschaften: {{cssxref("min-width")}} und {{cssxref("min-height")}}
- {{cssxref("writing-mode")}}
