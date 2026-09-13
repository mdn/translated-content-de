---
title: "`border-inline` CSS-Eigenschaft"
short-title: border-inline
slug: Web/CSS/Reference/Properties/border-inline
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`border-inline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft legt die einzelnen logischen Inline-Randwerte an einer Stelle im Stylesheet fest.

{{InteractiveExample("CSS Demo: border-inline")}}

```css interactive-example-choice
border-inline: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline: 1rem solid;
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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}

## Syntax

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* Global values */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

### Werte

`border-inline` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge angegeben:

- {{cssxref("&lt;line-width&gt;")}}
  - : Die Breite des Randes. Siehe {{cssxref("border-width")}}.
- {{cssxref("&lt;line-style&gt;")}}
  - : Der Linienstil des Randes. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

## Beschreibung

Die physischen Ränder, auf die `border-inline` verweist, hängen von der Schreibrichtung, Richtung und Textausrichtung des Elements ab. Es entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Die Ränder in der anderen Dimension können mit {{cssxref("border-block")}} festgelegt werden, was {{cssxref("border-block-start")}} und {{cssxref("border-block-end")}} setzt.

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
  border-inline: 5px dashed blue;
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
- Diese Eigenschaft verweist auf eine der physischen Randeigenschaften: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
