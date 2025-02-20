---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`padding-inline-end`**-[CSS](/de/docs/Web/CSS)-Eigenschaft definiert den logischen Inline-Ende-Abstand (Padding) eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements einer physischen Polsterung zugeordnet wird.

{{EmbedInteractiveExample("pages/css/padding-inline-end.html")}}

## Syntax

```css
/* <length> values */
padding-inline-end: 10px; /* An absolute length */
padding-inline-end: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-inline-end: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-inline-end: inherit;
padding-inline-end: initial;
padding-inline-end: revert;
padding-inline-end: revert-layer;
padding-inline-end: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nichtnegativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, bezogen auf die [inline-size](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) (_Breite_ in einer horizontalen Sprache) des [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nichtnegativ sein.

## Beschreibung

Die `padding-inline-end`-Eigenschaft nimmt dieselben Werte wie physische Polsterungseigenschaften wie {{cssxref("padding-top")}} an. Sie kann jedoch je nach den Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} gleichbedeutend mit {{cssxref("padding-right")}}, {{cssxref("padding-left")}}, `padding-top` oder {{cssxref("padding-bottom")}} sein.

Sie steht in Bezug zu {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-start")}}, die die anderen Polsterungswerte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Inline-Ende-Abstands für vertikalen Text

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
  padding-inline-end: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_end_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
