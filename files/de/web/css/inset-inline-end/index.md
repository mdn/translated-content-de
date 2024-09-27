---
title: inset-inline-end
slug: Web/CSS/inset-inline-end
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset-inline-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Inline-End-Offset eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements auf einen physischen Versatz abgebildet wird. Sie entspricht der {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} oder {{cssxref("left")}} Eigenschaft, je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Diese [Inset-Eigenschaft](/de/docs/Glossary/inset_properties) hat keine Wirkung auf nicht-positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-inline-end.html")}}

## Syntax

```css
/* <length> values */
inset-inline-end: 3px;
inset-inline-end: 2.4em;
inset-inline-end: calc(anchor(self-start) + 5px);
inset-inline-end: anchor(--myAnchor 50%);

/* <percentage>s of the width or height of the containing block */
inset-inline-end: 10%;

/* Keyword value */
inset-inline-end: auto;

/* Global values */
inset-inline-end: inherit;
inset-inline-end: initial;
inset-inline-end: revert;
inset-inline-end: revert-layer;
inset-inline-end: unset;
```

Die Kurzform für {{cssxref("inset-inline-start")}} und `inset-inline-end` ist {{cssxref("inset-inline")}}.

### Werte

Die `inset-inline-end` Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("left")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline End-Versatz einstellen

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
  writing-mode: vertical-rl;
  position: relative;
  inset-inline-end: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_end_offset", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften, die andere Insets definieren: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}} und {{cssxref("inset-inline-start")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
