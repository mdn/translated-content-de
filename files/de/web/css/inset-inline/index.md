---
title: inset-inline
slug: Web/CSS/inset-inline
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset-inline`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert die logischen Start- und End-Abstände eines Elements in der Inline-Richtung, die je nach Schreibmodus, Richtung und Textausrichtung des Elements auf physische Abstände abgebildet werden. Sie entspricht den Eigenschaften {{cssxref("top")}} und {{cssxref("bottom")}} oder {{cssxref("right")}} und {{cssxref("left")}} je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Diese [inset property](/de/docs/Glossary/inset_properties) hat keine Auswirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-inline.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}

## Syntax

```css
/* <length> values */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* value applied to start and end */
inset-inline: auto calc(anchor(self-start) + 20px);
inset-inline: anchor(--myAnchor 50%) auto;

/* <percentage>s of the width or height of the containing block */
inset-inline: 10% 5%;

/* Keyword value */
inset-inline: auto;

/* Global values */
inset-inline: inherit;
inset-inline: initial;
inset-inline: revert;
inset-inline: revert-layer;
inset-inline: unset;
```

### Werte

Die `inset-inline`-Eigenschaft nimmt die gleichen Werte wie die {{cssxref("left")}}-Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Start- und End-Abständen inline

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
  position: relative;
  inset-inline: 20px 50px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_and_end_offsets", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die abgebildeten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}
- Die abgebildete physische Kurzform: {{cssxref("inset")}}
- Die abgebildete Block-Kurzform: {{cssxref("inset-block")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
