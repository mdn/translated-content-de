---
title: padding-block-end
slug: Web/CSS/padding-block-end
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`padding-block-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert das logische Blockende-Polster eines Elements, das je nach Schreibmodus, Richtung und Textausrichtung des Elements einer physischen Polsterung zugeordnet wird.

{{EmbedInteractiveExample("pages/css/padding-block-end.html")}}

## Syntax

```css
/* <length> values */
padding-block-end: 10px; /* An absolute length */
padding-block-end: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-block-end: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-block-end: inherit;
padding-block-end: initial;
padding-block-end: revert;
padding-block-end: revert-layer;
padding-block-end: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe der Polsterung als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe der Polsterung als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die `padding-block-end` Eigenschaft wird in der Spezifikation so definiert, dass sie dieselben Werte wie die Eigenschaft {{cssxref("padding-top")}} annimmt. Die physische Eigenschaft, der sie entspricht, hängt jedoch von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} festgelegten Werten ab. Daher kann sie {{cssxref("padding-bottom")}}, {{cssxref("padding-right")}} oder {{cssxref("padding-left")}} zugeordnet werden.

Sie steht im Zusammenhang mit {{cssxref("padding-block-start")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}}, die die anderen Polsterungen des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Blockende-Polsterung für vertikalen Text

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
  padding-block-end: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_end_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
