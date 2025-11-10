---
title: inset-inline
slug: Web/CSS/Reference/Properties/inset-inline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`inset-inline`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die logischen Anfangs- und Endversätze eines Elements in der Inline-Richtung, die je nach Schreibrichtung, Richtung und Textausrichtung des Elements auf physische Versätze abgebildet werden. Sie entspricht den {{cssxref("top")}}- und {{cssxref("bottom")}}- oder den {{cssxref("right")}}- und {{cssxref("left")}}-Eigenschaften, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} festgelegten Werten.

Diese {{Glossary("inset_properties", "Inset-Eigenschaft")}} hat keine Auswirkung auf nicht positionierte Elemente.

{{InteractiveExample("CSS Demo: inset-inline")}}

```css interactive-example-choice
inset-inline: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
inset-inline: 10px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
inset-inline: 5% 10%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <div id="example-element">I am absolutely positioned.</div>
    <p>
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
    </p>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 0.75em solid #ad1457;
  padding: 0.75em;
  text-align: left;
  position: relative;
  width: 100%;
  min-height: 200px;
}

#example-element {
  background-color: #07136c;
  border: 6px solid #ffa000;
  color: white;
  position: absolute;
  inset: 0;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}

## Syntax

```css
/* <length> values */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* value applied to start and end */
inset-inline: auto calc(anchor(self-start) + 20px);
inset-inline: 400px anchor-size(--my-anchor height, 100px);

/* <percentage>s of the width or height of the containing block */
inset-inline: 10% 5%;

/* Keyword value */
inset-inline: auto;

/* Global values */
inset-inline: inherit;
inset-inline: initial;
inset-inline: revert;
inset-inline: revert-layer;
inset-inline: unset;
```

### Werte

Die `inset-inline`-Eigenschaft nimmt die gleichen Werte wie die {{cssxref("left")}}-Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Inline-Anfangs- und Endversätzen

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
  position: relative;
  inset-inline: 20px 50px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_and_end_offsets", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die abgebildeten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}
- Die abgebildete physische Kurzform: {{cssxref("inset")}}
- Die abgebildete Block-Kurzform: {{cssxref("inset-block")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
