---
title: padding-block-start
slug: Web/CSS/padding-block-start
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`padding-block-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Blockanfang-Abstand eines Elements, der je nach Schreibrichtung, Richtung und Textausrichtung des Elements in einen physischen Abstand umgesetzt wird.

{{EmbedInteractiveExample("pages/css/padding-block-start.html")}}

## Syntax

```css
/* <length> values */
padding-block-start: 10px; /* An absolute length */
padding-block-start: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-block-start: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: revert;
padding-block-start: revert-layer;
padding-block-start: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentwert, relativ zur [Inline-Größe](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) (_Breite_ in einer horizontalen Sprache) des [Umfangsblocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die Eigenschaft `padding-block-start` wird in der Spezifikation so definiert, dass sie die gleichen Werte wie die Eigenschaft {{cssxref("padding-top")}} annimmt. Allerdings hängt die physische Eigenschaft, auf die sie abgebildet wird, von den festgelegten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab. Daher könnte sie in {{cssxref("padding-bottom")}}, {{cssxref("padding-right")}} oder {{cssxref("padding-left")}} umgewandelt werden.

Sie bezieht sich auf {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}}, die die anderen Abstände des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Blockanfang-Abstand für vertikalen Text setzen

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
  padding-block-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_start_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
