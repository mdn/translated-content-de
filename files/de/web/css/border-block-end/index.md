---
title: border-block-end
slug: Web/CSS/border-block-end
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`border-block-end`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zum Festlegen der einzelnen logischen Block-Endrand-Eigenschaftswerte an einer einzigen Stelle im Stylesheet.

{{InteractiveExample("CSS Demo: border-block-end")}}

```css interactive-example-choice
border-block-end: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end: 1rem solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: thick double #32a1ce;
writing-mode: vertical-lr;
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

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-block-end-color`](/de/docs/Web/CSS/border-block-end-color)
- [`border-block-end-style`](/de/docs/Web/CSS/border-block-end-style)
- [`border-block-end-width`](/de/docs/Web/CSS/border-block-end-width)

## Syntax

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;

/* Global values */
border-block-end: inherit;
border-block-end: initial;
border-block-end: revert;
border-block-end: revert-layer;
border-block-end: unset;
```

`border-block-end` kann verwendet werden, um die Werte von {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}} und {{cssxref("border-block-end-color")}} zu setzen. Der physische Rand, auf den er abzielt, hängt vom Schreibmodus, der Richtung und der Textausrichtung des Elements ab. Er entspricht je nach den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} der Eigenschaft {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.

Verwandte Eigenschaften sind {{cssxref("border-block-start")}}, {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}}, die die anderen Ränder des Elements definieren.

### Werte

Das `border-block-end` wird mit einem oder mehreren der folgenden Werte angegeben, in beliebiger Reihenfolge:

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
  border-block-end: 5px dashed blue;
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
- Diese Eigenschaft korrespondiert mit einer der physischen Rand-Eigenschaften: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
