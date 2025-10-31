---
title: padding-inline-start
slug: Web/CSS/Reference/Properties/padding-inline-start
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`padding-inline-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den logischen Startabstand eines Elements in der Inline-Achse. Dieser wird abhängig vom Schreibmodus des Elements, der Schreibrichtung und der Textorientierung auf einen physischen Abstand abgebildet.

{{InteractiveExample("CSS Demo: padding-inline-start")}}

```css interactive-example-choice
padding-inline-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-inline-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-inline-start: 5em;
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
padding-inline-start: 10px; /* An absolute length */
padding-inline-start: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-inline-start: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: revert;
padding-inline-start: revert-layer;
padding-inline-start: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands in Prozent, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthältenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die `padding-inline-start`-Eigenschaft nimmt dieselben Werte an wie physische Eigenschaften wie {{cssxref("padding-top")}}. Sie kann jedoch, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} gesetzt sind, äquivalent zu {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, `padding-top` oder {{cssxref("padding-bottom")}} sein.

Sie steht im Zusammenhang mit {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-end")}}, die die anderen Abstandswerte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung des Inline-Startabstands für vertikalen Text

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
  padding-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
