---
title: border-inline-style
slug: Web/CSS/border-inline-style
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-inline-style`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Stil der logischen Inline-Ränder eines Elements fest, was auf einen physikalischen Randstil abgebildet wird, abhängig vom Schreibmodus des Elements, der Richtung und der Textausrichtung. Sie entspricht den Eigenschaften {{cssxref("border-top-style")}} und {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}} und {{cssxref("border-right-style")}}, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

{{EmbedInteractiveExample("pages/css/border-inline-style.html")}}

Der Randstil in der anderen Dimension kann mit {{cssxref("border-block-style")}} festgelegt werden, das {{cssxref("border-block-start-style")}} und {{cssxref("border-block-end-style")}} setzt.

## Syntax

```css
/* <'border-style'> Werte */
border-inline-style: dashed;
border-inline-style: dotted;
border-inline-style: groove;

/* Globale Werte */
border-inline-style: inherit;
border-inline-style: initial;
border-inline-style: revert;
border-inline-style: revert-layer;
border-inline-style: unset;
```

### Werte

- `<'border-style'>`
  - : Der Linienstil des Rahmens. Siehe {{ cssxref("border-style") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von border-inline-style

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
  border-inline-style: dashed;
}
```

{{EmbedLiveSample("Setting border-inline-style", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physikalischen Rahmeneigenschaften abgebildet: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
