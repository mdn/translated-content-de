---
title: padding-block-start
slug: Web/CSS/padding-block-start
l10n:
  sourceCommit: f26b3f2ab7a079151245759bc2682427dc36870c
---

{{CSSRef}}

Die **`padding-block-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert das logische Anfangs-Block-Padding eines Elements, das je nach Schreibmodus, Richtung und Textorientierung des Elements in ein physisches Padding umgewandelt wird.

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
  - : Die Größe des Paddings als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentsatz, relativ zur [inline-size](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) (_Breite_ in einer horizontalen Sprache) des [containenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die `padding-block-start` Eigenschaft nimmt die gleichen Werte wie physische Padding-Eigenschaften wie {{cssxref("padding-top")}}. Sie kann jedoch je nach den gesetzten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} gleichbedeutend mit `padding-top`, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, oder {{cssxref("padding-right")}} sein.

Sie hängt mit {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}} zusammen, welche die anderen Padding-Werte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anfangs-Block-Padding für vertikalen Text festlegen

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
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
