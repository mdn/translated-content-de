---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`padding-inline-end`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert den logischen Inline-End-Abstand eines Elements, welcher abhängig von der Schreibrichtung, Richtung und Textausrichtung des Elements zu einem physischen Abstand umgewandelt wird.

{{EmbedInteractiveExample("pages/css/padding-inline-end.html")}}

## Syntax

```css
/* <length> Werte */
padding-inline-end: 10px; /* Eine absolute Länge */
padding-inline-end: 1em; /* Eine Länge relativ zur Textgröße */

/* <percentage> Wert */
padding-inline-end: 5%; /* Ein Abstand relativ zur Breite des Blockcontainers */

/* Globale Werte */
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
  - : Die Größe des Abstands als Prozentsatz, relativ zur [inline-size](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) (_Breite_ in einer horizontalen Sprache) des [umschließenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die `padding-inline-end`-Eigenschaft ist in der Spezifikation so definiert, dass sie die gleichen Werte wie die {{cssxref("padding-top")}}-Eigenschaft annimmt. Das physische Attribut, dem sie zugeordnet wird, hängt jedoch von den festgelegten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} ab. Daher könnte sie {{cssxref("padding-bottom")}}, {{cssxref("padding-right")}} oder {{cssxref("padding-left")}} zugeordnet werden.

Sie bezieht sich auf {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-start")}}, die die anderen Abstände des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des Inline-End-Abstands für vertikalen Text

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
