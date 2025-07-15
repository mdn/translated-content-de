---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`padding-inline-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Inline-Endabstand eines Elements, der abhängig vom Schreibmodus, der Richtung und der Textorientierung des Elements auf einen physikalischen Abstand abgebildet wird.

{{InteractiveExample("CSS Demo: padding-inline-end")}}

```css interactive-example-choice
padding-inline-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-inline-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-inline-end: 5em;
writing-mode: horizontal-tb;
direction: rtl;
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
padding-inline-end: 10px; /* An absolute length */
padding-inline-end: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-inline-end: 5%; /* A padding relative to the block container's width */

/* Global values */
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
  - : Die Größe des Abstands als Prozentsatz, relativ zur [inline-size](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow) (_Breite_ in einer horizontalen Sprache) des [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die `padding-inline-end` Eigenschaft nimmt die gleichen Werte an wie physikalische Abstands-Eigenschaften wie {{cssxref("padding-top")}}. Sie kann jedoch äquivalent zu {{cssxref("padding-right")}}, {{cssxref("padding-left")}}, `padding-top` oder {{cssxref("padding-bottom")}} sein, abhängig von den gesetzten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Sie bezieht sich auf {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-start")}}, die die anderen Abstands-Eigenschaften des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des Inline-Endabstands für vertikalen Text

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
- Die abgebildeten physikalischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
