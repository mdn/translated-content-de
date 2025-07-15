---
title: border-block
slug: Web/CSS/border-block
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-block`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), um die individuellen logischen Blockgrenzen-Eigenschaftswerte an einer einzigen Stelle im Stylesheet festzulegen.

{{InteractiveExample("CSS Demo: border-block")}}

```css interactive-example-choice
border-block: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block: 1rem solid;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

`border-block` kann verwendet werden, um die Werte für eine oder mehrere der Eigenschaften {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}} und {{cssxref("border-block-color")}} festzulegen und dabei sowohl den Anfang als auch das Ende in der Block-Dimension gleichzeitig zu setzen. Die physischen Grenzen, auf die es abbildet, hängen vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Es entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}} je nach den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

Die Grenzen in der anderen Dimension können mit {{cssxref("border-inline")}} gesetzt werden, was {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}} setzt.

## Zusammengehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-block-color`](/de/docs/Web/CSS/border-block-color)
- [`border-block-style`](/de/docs/Web/CSS/border-block-style)
- [`border-block-width`](/de/docs/Web/CSS/border-block-width)

## Syntax

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;

/* Global values */
border-block: inherit;
border-block: initial;
border-block: revert;
border-block: revert-layer;
border-block: unset;
```

### Werte

Die `border-block` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

- `<'border-width'>`
  - : Die Breite der Grenze. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Linienstil der Grenze. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe der Grenze.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grenze mit vertikalem Text

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
  border-block: 5px dashed blue;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft ordnet sich einer der physischen Grenzen-Eigenschaften zu: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
