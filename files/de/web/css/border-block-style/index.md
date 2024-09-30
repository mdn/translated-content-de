---
title: border-block-style
slug: Web/CSS/border-block-style
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-block-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Stil der logischen Blockrahmen eines Elements, der je nach Schreibrichtung, Richtung und Textausrichtung des Elements in eine physische Rahmenart umgesetzt wird. Sie entspricht den Eigenschaften {{cssxref("border-top-style")}} und {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}} und {{cssxref("border-right-style")}}, je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-style.html")}}

Der Rahmenstil in der anderen Dimension kann mit {{cssxref("border-inline-style")}} festgelegt werden, der {{cssxref("border-inline-start-style")}} und {{cssxref("border-inline-end-style")}} setzt.

## Syntax

```css
/* <'border-style'> values */
border-block-style: dashed;
border-block-style: dotted;
border-block-style: groove;

/* Global values */
border-block-style: inherit;
border-block-style: initial;
border-block-style: revert;
border-block-style: revert-layer;
border-block-style: unset;
```

### Werte

- `<'border-style'>`
  - : Der Linienstil des Rahmens. Siehe {{ cssxref("border-style") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gestrichelter Rahmen mit vertikalem Text

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
  border: 5px solid blue;
  border-block-style: dashed;
}
```

#### Ergebnisse

{{EmbedLiveSample("Dashed_border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird einer der physischen Rahmeneigenschaften zugeordnet: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
