---
title: padding-block
slug: Web/CSS/Reference/Properties/padding-block
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`padding-block`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) definiert das logische Anfangs- und End-Padding eines Elements im Block, das je nach Schreibmodus, Richtung und Textausrichtung des Elements den physischen Padding-Eigenschaften zugeordnet wird.

{{InteractiveExample("CSS Demo: padding-block")}}

```css interactive-example-choice
padding-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block: 20px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-block: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block: 2em 4em;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
  unicode-bidi: bidi-override;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("padding-block-start")}}
- {{cssxref("padding-block-end")}}

## Syntax

```css
/* <length> values */
padding-block: 10px 20px; /* An absolute length */
padding-block: 1em 2em; /* relative to the text size */
padding-block: 10px; /* sets both start and end values */

/* <percentage> values */
padding-block: 5% 2%; /* relative to the nearest block container's width */

/* Global values */
padding-block: inherit;
padding-block: initial;
padding-block: revert;
padding-block: revert-layer;
padding-block: unset;
```

Die Eigenschaft `padding-block` kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben ist, wird er sowohl für {{cssxref("padding-block-start")}} als auch für {{cssxref("padding-block-end")}} verwendet. Wenn zwei Werte angegeben sind, wird der erste für {{cssxref("padding-block-start")}} und der zweite für {{cssxref("padding-block-end")}} verwendet.

### Werte

Die Eigenschaft `padding-block` nimmt dieselben Werte wie die Eigenschaft {{cssxref("padding-left")}}.

## Beschreibung

Die durch `padding-block` angegebenen Padding-Werte können den Eigenschaften {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}} oder den Eigenschaften {{cssxref("padding-right")}} und {{cssxref("padding-left")}} entsprechen, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Block-Padding für vertikalen Text setzen

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
  writing-mode: vertical-rl;
  padding-block: 20px 40px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
