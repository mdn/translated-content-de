---
title: padding-block-start
slug: Web/CSS/padding-block-start
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`padding-block-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert das logische Blockstart-Polster eines Elements, das je nach Schreibmodus, Richtung und Textausrichtung des Elements einem physischen Polster zugeordnet wird.

{{EmbedInteractiveExample("pages/css/padding-block-start.html")}}

## Syntax

```css
/* <length> Werte */
padding-block-start: 10px; /* Eine absolute Länge */
padding-block-start: 1em; /* Eine Länge relativ zur Textgröße */

/* <percentage> Wert */
padding-block-start: 5%; /* Ein Polster relativ zur Breite des Blockcontainers */

/* Globale Werte */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: revert;
padding-block-start: revert-layer;
padding-block-start: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Polsters als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Polsters als Prozentsatz, relativ zur [Inline-Größe](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) (_Breite_ in einer horizontalen Sprache) des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die `padding-block-start` Eigenschaft ist in der Spezifikation definiert und nimmt die gleichen Werte wie die {{cssxref("padding-top")}} Eigenschaft an. Das physische Attribut, auf das es abgebildet wird, hängt jedoch von den festgelegten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab. Daher könnte sie auf {{cssxref("padding-bottom")}}, {{cssxref("padding-right")}} oder {{cssxref("padding-left")}} abgebildet werden.

Es bezieht sich auf {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}, die die anderen Polster des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Blockstart-Polsters für vertikalen Text

#### HTML

```html
<div>
  <p class="exampleText">Beispieltext</p>
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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
