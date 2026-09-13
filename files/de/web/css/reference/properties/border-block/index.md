---
title: "`border-block` CSS-Eigenschaft"
short-title: border-block
slug: Web/CSS/Reference/Properties/border-block
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`border-block`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die einzelnen logischen Block-Rand-Eigenschaftswerte an einer einzigen Stelle im Stylesheet fest.

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
  background-color: #eeeeee;
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("border-block-color")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}

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

Das `border-block` wird mit einem oder mehreren der folgenden Werte, in beliebiger Reihenfolge, angegeben:

- {{cssxref("&lt;line-width&gt;")}}
  - : Die Breite des Rands. Siehe {{cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Der Linienstil des Rands. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rands.

## Beschreibung

`border-block` kann verwendet werden, um die Werte für eine oder mehrere der {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}} und {{cssxref("border-block-color")}} festzulegen, wobei sowohl der Anfang als auch das Ende in der Blockdimension auf einmal festgelegt werden. Die physischen Ränder, denen es zugeordnet wird, hängen vom Schreibmodus, der Richtung und der Textorientierung des Elements ab. Sie entsprechen den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Die Ränder in der anderen Dimension können mit {{cssxref("border-inline")}} festgelegt werden, welche {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}} setzt.

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Rand-Eigenschaften abgebildet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
