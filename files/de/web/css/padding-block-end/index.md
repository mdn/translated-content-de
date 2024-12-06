---
title: padding-block-end
slug: Web/CSS/padding-block-end
l10n:
  sourceCommit: f26b3f2ab7a079151245759bc2682427dc36870c
---

{{CSSRef}}

Die **`padding-block-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die logische Block-End-Polsterung eines Elements, die je nach Schreibmodus, Richtung und Textausrichtung des Elements einer physischen Polsterung zugeordnet wird.

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

Die Eigenschaft `padding-block-end` nimmt dieselben Werte an wie physische Polstereigenschaften wie {{cssxref("padding-top")}}. Sie kann jedoch je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} festgelegten Werten gleichwertig zu {{cssxref("padding-bottom")}}, `padding-top`, {{cssxref("padding-left")}} oder {{cssxref("padding-right")}} sein.

Sie bezieht sich auf {{cssxref("padding-block-start")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}, welche die anderen Polsterwerte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Block-End-Polsterung für vertikalen Text festlegen

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
