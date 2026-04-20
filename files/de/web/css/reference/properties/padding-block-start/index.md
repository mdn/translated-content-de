---
title: "`padding-block-start` CSS property"
short-title: padding-block-start
slug: Web/CSS/Reference/Properties/padding-block-start
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`padding-block-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den logischen Blockstart-Padding eines Elements, welcher je nach Schreibmodus, Richtung und Textausrichtung des Elements auf ein physisches Padding abgebildet wird.

{{InteractiveExample("CSS Demo: padding-block-start")}}

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-block-start: 5em;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 5em;
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
  - : Die Größe des Paddings als Prozentsatz, relativ zur [inline-size](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) (_Breite_ in einer horizontalen Sprache) des [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die `padding-block-start`-Eigenschaft nimmt die gleichen Werte wie physische Padding-Eigenschaften, wie zum Beispiel {{cssxref("padding-top")}}. Sie kann jedoch abhängig von den gesetzten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} gleichwertig zu `padding-top`, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, oder {{cssxref("padding-right")}} sein.

Sie bezieht sich auf {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}, welche die anderen Padding-Werte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen des Blockstart-Paddings für vertikalen Text

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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
