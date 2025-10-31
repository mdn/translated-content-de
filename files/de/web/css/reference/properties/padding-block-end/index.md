---
title: padding-block-end
slug: Web/CSS/Reference/Properties/padding-block-end
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`padding-block-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert das logische Blockende-Polster eines Elements, welches je nach Schreibrichtung des Elements, Richtung und Textausrichtung auf ein physikalisches Padding abgebildet wird.

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
  - : Die Größe des Paddings als fester Wert. Muss nicht-negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht-negativ sein.

## Beschreibung

Die `padding-block-end` Eigenschaft nimmt dieselben Werte wie physikalische Padding-Eigenschaften wie {{cssxref("padding-top")}} an. Sie kann jedoch je nach den festgelegten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} äquivalent zu {{cssxref("padding-bottom")}}, `padding-top`, {{cssxref("padding-left")}}, oder {{cssxref("padding-right")}} sein.

Sie bezieht sich auf {{cssxref("padding-block-start")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}, welche die anderen Padding-Werte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Blockende-Paddings für vertikalen Text

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
- Die zugeordneten physikalischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
