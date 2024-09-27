---
title: inset-inline-start
slug: Web/CSS/inset-inline-start
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset-inline-start`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert den logischen Inline-Start-Abstand eines Elements, der je nach Schriftsystem, Richtung und Textausrichtung des Elements auf einen physischen Versatz abbildet. Sie entspricht der {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} oder {{cssxref("left")}} Eigenschaft, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Diese [Versatz-Eigenschaft](/de/docs/Glossary/inset_properties) hat keine Wirkung auf nicht-positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-inline-start.html")}}

## Syntax

```css
/* <length> values */
inset-inline-start: 3px;
inset-inline-start: 2.4em;
inset-inline-start: anchor(self-end);
inset-inline-start: calc(anchor(--myAnchor 50%) + 10px);

/* <percentage>s of the width or height of the containing block */
inset-inline-start: 10%;

/* Keyword value */
inset-inline-start: auto;

/* Global values */
inset-inline-start: inherit;
inset-inline-start: initial;
inset-inline-start: revert;
inset-inline-start: revert-layer;
inset-inline-start: unset;
```

Die Kurzform für `inset-inline-start` und {{cssxref("inset-inline-end")}} ist {{cssxref("inset-inline")}}.

### Werte

Die `inset-inline-start` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Inline-Start-Versatzes

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
  inset-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_offset", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften, die andere Versätze definieren: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, und {{cssxref("inset-inline-end")}}
- Die zugeordneten physikalischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
