---
title: border-block-color
slug: Web/CSS/border-block-color
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`border-block-color`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Farbe der logischen Block-Ränder eines Elements. Diese korrespondiert mit einer physischen Randfarbe, abhängig vom Schreibmodus, der Richtung und der Textausrichtung des Elements. Sie entspricht der {{cssxref("border-top-color")}} und {{cssxref("border-bottom-color")}}, oder der {{cssxref("border-right-color")}} und {{cssxref("border-left-color")}}, abhängig von den Werten von {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

{{InteractiveExample("CSS Demo: border-block-color")}}

```css interactive-example-choice
border-block-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-color: rgb(170 50 220 / 0.6);
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
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

Die Randfarbe in der anderen Dimension kann mit {{cssxref("border-inline-color")}} gesetzt werden, das {{cssxref("border-inline-start-color")}} und {{cssxref("border-inline-end-color")}} festlegt.

## Syntax

```css
border-block-color: yellow;
border-block-color: #f5f6f7;

/* Global values */
border-block-color: inherit;
border-block-color: initial;
border-block-color: revert;
border-block-color: revert-layer;
border-block-color: unset;
```

### Werte

- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rand mit vertikalem Text

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
  border: 10px solid blue;
  border-block-color: red;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft korrespondiert mit den physischen Rand-Eigenschaften: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, oder {{cssxref("border-left-color")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
