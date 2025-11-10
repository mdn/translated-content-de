---
title: padding-inline-end
slug: Web/CSS/Reference/Properties/padding-inline-end
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`padding-inline-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen inneren Endabstand eines Elements, der in Abhängigkeit vom Schreibrichtung, der Richtung und der Textorientierung des Elements auf einen physischen Abstand abgebildet wird.

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
  - : Die Größe des Abstands als Prozentsatz, relativ zur [Inline-Größe](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout) (_Breite_ in einer horizontalen Sprache) des [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die Eigenschaft `padding-inline-end` nimmt die gleichen Werte an wie physische Abstandseigenschaften wie {{cssxref("padding-top")}}. Sie kann jedoch je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} festgelegten Werten äquivalent zu {{cssxref("padding-right")}}, {{cssxref("padding-left")}}, `padding-top` oder {{cssxref("padding-bottom")}} sein.

Sie steht in Beziehung zu {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-start")}}, die die anderen Abstandswerte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des inneren Endabstands für vertikalen Text

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
- Die abgebildeten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
