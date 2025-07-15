---
title: padding-block-end
slug: Web/CSS/padding-block-end
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`padding-block-end`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert das logische Block-Ende-Polster eines Elements, das je nach Schreibmodus, Richtung und Textorientierung des Elements auf ein physisches Polster abgebildet wird.

{{InteractiveExample("CSS Demo: padding-block-end")}}

```css interactive-example-choice
padding-block-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-block-end: 5em;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-end: 5em;
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
  - : Die Größe des Polsters als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Polsters als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umfassenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die `padding-block-end`-Eigenschaft nimmt die gleichen Werte an wie physische Polstereigenschaften wie {{cssxref("padding-top")}}. Sie kann jedoch abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} festgelegt sind, äquivalent zu {{cssxref("padding-bottom")}}, `padding-top`, {{cssxref("padding-left")}} oder {{cssxref("padding-right")}} sein.

Sie steht in Beziehung zu {{cssxref("padding-block-start")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}}, die die anderen Polsterwerte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Block-End-Paddings für vertikalen Text

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
