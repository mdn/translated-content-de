---
title: border-inline
slug: Web/CSS/border-inline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zur Einstellung der einzelnen logischen Inline-Rand-Eigenschaften an einer einzigen Stelle im Stylesheet.

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
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

Die physischen Ränder, auf die `border-inline` verweist, hängen vom Schreibmodus, der Richtung und der Textorientierung des Elements ab. Sie entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

Die Ränder in der anderen Dimension können mit {{cssxref("border-block")}} gesetzt werden, das {{cssxref("border-block-start")}} und {{cssxref("border-block-end")}} festlegt.

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`border-inline-color`](/de/docs/Web/CSS/border-inline-color)
- [`border-inline-style`](/de/docs/Web/CSS/border-inline-style)
- [`border-inline-width`](/de/docs/Web/CSS/border-inline-width)

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

Das `border-inline` wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge spezifiziert:

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Linienstil des Randes. Siehe {{cssxref("border-style")}}.
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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft verweist auf eine der physischen Rand-Eigenschaften: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
