---
title: border-inline
slug: Web/CSS/Reference/Properties/border-inline
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`border-inline`** [CSS](/de/docs/Web/CSS)-Eigenschaft ist eine [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zum Setzen der einzelnen logischen Inline-Rand-Werte an einer Stelle im Stylesheet.

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

## Bestandteile der Eigenschaft

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die `border-inline` wird mit einem oder mehreren der folgenden Werte angegeben, in beliebiger Reihenfolge:

- `<'border-width'>`
  - : Die Breite des Rands. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Linienstil des Rands. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Rands.

## Beschreibung

Die physischen Ränder, auf die `border-inline` abbildet, hängen vom Schreibmodus, der Richtung und der Textorientierung des Elements ab. Es entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Die Ränder in der anderen Dimension können mit {{cssxref("border-block")}} gesetzt werden, was {{cssxref("border-block-start")}} und {{cssxref("border-block-end")}} festlegt.

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
- Diese Eigenschaft wird auf eine der physischen Rand-Eigenschaften abgebildet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
