---
title: border-block-end-style
slug: Web/CSS/border-block-end-style
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-block-end-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Stil des logischen Block-End-Randes eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements auf einen physischen Randstil abgebildet wird. Sie entspricht der Eigenschaft {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}} oder {{cssxref("border-left-style")}}, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

{{EmbedInteractiveExample("pages/css/border-block-end-style.html")}}

## Syntax

```css
/* <'border-style'> values */
border-block-end-style: dashed;
border-block-end-style: dotted;
border-block-end-style: groove;

/* Global values */
border-block-end-style: inherit;
border-block-end-style: initial;
border-block-end-style: revert;
border-block-end-style: revert-layer;
border-block-end-style: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-style")}}, {{cssxref("border-inline-start-style")}} und {{cssxref("border-inline-end-style")}}, die die anderen Randstile des Elements definieren.

### Werte

- `<'border-style'>`
  - : Der Linienstil des Randes. Siehe {{ cssxref("border-style") }}.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Gepunkteter Rand mit vertikalem Text

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
  border-block-end-style: dashed;
}
```

#### Ergebnisse

{{EmbedLiveSample("Dashed_border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft ordnet sich einer der physischen Randeigenschaften zu: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}} und {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
