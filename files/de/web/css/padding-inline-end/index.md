---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
l10n:
  sourceCommit: f26b3f2ab7a079151245759bc2682427dc36870c
---

{{CSSRef}}

Die **`padding-inline-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen inline end padding eines Elements, der in Abhängigkeit vom Schreibmodus, der Richtung und der Textorientierung des Elements auf ein physisches Padding abgebildet wird.

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
  - : Die Größe des Paddings als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentsatz, relativ zur [inline-size](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) (_Breite_ in einer horizontalen Sprache) des [containing block](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die Eigenschaft `padding-inline-end` nimmt dieselben Werte an wie physikalische Padding-Eigenschaften wie {{cssxref("padding-top")}}. Sie kann jedoch je nach den eingestellten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} gleichwertig mit {{cssxref("padding-right")}}, {{cssxref("padding-left")}}, `padding-top` oder {{cssxref("padding-bottom")}} sein.

Sie steht im Zusammenhang mit {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-start")}}, die die anderen Padding-Werte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des inneren End-Paddings für vertikalen Text

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
