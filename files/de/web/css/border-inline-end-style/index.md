---
title: border-inline-end-style
slug: Web/CSS/border-inline-end-style
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-inline-end-style`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den Stil des logischen Inline-Ende-Randes eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements auf einen physischen Randstil abgebildet wird. Sie entspricht der Eigenschaft {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}} oder {{cssxref("border-left-style")}} in Abhängigkeit von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

{{EmbedInteractiveExample("pages/css/border-inline-end-style.html")}}

## Syntax

```css
/* <'border-style'> Werte */
border-inline-end-style: dashed;
border-inline-end-style: dotted;
border-inline-end-style: groove;

/* Globale Werte */
border-inline-end-style: inherit;
border-inline-end-style: initial;
border-inline-end-style: revert;
border-inline-end-style: revert-layer;
border-inline-end-style: unset;
```

Verwandte Eigenschaften sind {{cssxref("border-block-start-style")}}, {{cssxref("border-block-end-style")}} und {{cssxref("border-inline-start-style")}}, die die anderen Randstile des Elements definieren.

### Werte

- `<'border-style'>`
  - : Der Linienstil des Randes. Siehe {{ cssxref("border-style") }}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des inline-end-style

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
  border-inline-end-style: dashed;
}
```

#### Ergebnisse

{{EmbedLiveSample("Examples", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Rand-Eigenschaften abgebildet: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, oder {{cssxref("border-left-style")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
