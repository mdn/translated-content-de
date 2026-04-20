---
title: "`padding-block-end` CSS property"
short-title: padding-block-end
slug: Web/CSS/Reference/Properties/padding-block-end
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`padding-block-end`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die logische Blockend-Auspolsterung eines Elements, die abhängig vom Schreibmodus, der Ausrichtung und der Textorientierung des Elements in eine physische Auspolsterung umgewandelt wird.

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
  - : Die Größe der Auspolsterung als fester Wert. Muss nicht-negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe der Auspolsterung als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [Enthaltenen Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block). Muss nicht-negativ sein.

## Beschreibung

Die Eigenschaft `padding-block-end` nimmt die gleichen Werte wie physische Auspolsterungseigenschaften wie {{cssxref("padding-top")}} an. Sie kann jedoch je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} festgelegten Werten gleichwertig zu {{cssxref("padding-bottom")}}, `padding-top`, {{cssxref("padding-left")}} oder {{cssxref("padding-right")}} sein.

Sie steht in Beziehung zu {{cssxref("padding-block-start")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}}, die die anderen Auspolsterungswerte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Blockend-Auspolsterung für vertikalen Text festlegen

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

- [CSS-Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
