---
title: "`padding-inline-end` CSS property"
short-title: padding-inline-end
slug: Web/CSS/Reference/Properties/padding-inline-end
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`padding-inline-end`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert den logischen Endeinzug (padding) eines Elements in Inline-Richtung. Sie wird je nach Schreibrichtung, Leserichtung und Textausrichtung des Elements auf einen physischen Einzug abgebildet.

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
  - : Die Größe des Einzugs als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Einzugs als Prozentsatz, relativ zur [inline-size](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) (_Breite_ in einer horizontalen Sprache) des [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die `padding-inline-end`-Eigenschaft nimmt die gleichen Werte wie physische Einzugseigenschaften, wie zum Beispiel {{cssxref("padding-top")}}, an. Sie kann jedoch je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} festgelegten Werten äquivalent zu {{cssxref("padding-right")}}, {{cssxref("padding-left")}}, `padding-top` oder {{cssxref("padding-bottom")}} sein.

Sie steht in Bezug zu {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-start")}}, die die anderen Einzugswerte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen des Inline-Einzugs am Ende für vertikalen Text

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
