---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`padding-inline-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Inline-Endabstand eines Elements, der je nach Schreibmodus, Richtung und Textorientierung des Elements auf einen physikalischen Abstand abgebildet wird.

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
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, relativ zur [inline-size](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) (_Breite_ in einer horizontalen Sprache) des [containing block](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die Eigenschaft `padding-inline-end` ist in der Spezifikation so definiert, dass sie die gleichen Werte wie die Eigenschaft {{cssxref("padding-top")}} annimmt. Die physikalische Eigenschaft, auf die sie abgebildet wird, hängt jedoch von den Werten ab, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} festgelegt sind. Daher könnte sie auf {{cssxref("padding-bottom")}}, {{cssxref("padding-right")}}, oder {{cssxref("padding-left")}} abbilden.

Sie steht in Zusammenhang mit {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, und {{cssxref("padding-inline-start")}}, die die anderen Abstände des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Endabstand für vertikalen Text festlegen

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
- Die zugeordneten physikalischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
