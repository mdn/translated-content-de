---
title: inset
slug: Web/CSS/inset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`inset`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine Kurzform, die den {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und/oder {{cssxref("left")}} Eigenschaften entspricht. Sie hat die gleiche Mehrfachwert-Syntax wie die Kurzform von {{cssxref("margin")}}.

Diese {{Glossary("inset_properties", "inset-Eigenschaften")}}, einschließlich `inset`, haben keine Wirkung auf nicht platzierte Elemente.

{{InteractiveExample("CSS Demo: inset")}}

```css interactive-example-choice
inset: 1em;
```

```css interactive-example-choice
inset: 5% 0;
```

```css interactive-example-choice
inset: 2em 50px 20px;
```

```css interactive-example-choice
inset: 10px 30% 20px 0;
```

```css interactive-example-choice
inset: 0;
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

Obwohl Teil des Moduls [CSS logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values), definiert es keine _logischen_ Offsets. Es definiert _physische_ Offsets, unabhängig vom Schreibmodus, der Leserichtung und der Textausrichtung des Elements.

## Bestandteil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{Cssxref("top")}}
- {{Cssxref("right")}}
- {{Cssxref("bottom")}}
- {{Cssxref("left")}}

## Syntax

```css
/* <length> values */
inset: 10px; /* value applied to all edges */
inset: 4px 8px; /* top/bottom left/right */
inset: 5px 15px 10px; /* top left/right bottom */
inset: 2.4em 3em 3em 3em; /* top right bottom left */
inset: calc(anchor(50%) + 10px) anchor(self-start) auto auto;
inset: anchor-size(block) calc(anchor(50%) + 10px) auto
  calc(anchor-size(width) / 4);

/* <percentage>s of the width (left/right) or height (top/bottom) of the containing block */
inset: 10% 5% 5% 5%;

/* Keyword value */
inset: auto;

/* Global values */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;
```

### Werte

Die `inset` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("left")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Offsets für ein Element einstellen

#### HTML

```html
<div>
  <span class="exampleText">Example text</span>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 150px;
  height: 120px;
  position: relative;
}

.exampleText {
  writing-mode: sideways-rl;
  position: absolute;
  inset: 20px 40px 30px 10px;
  background-color: #c8c800;
}
```

#### Resultat

{{EmbedLiveSample("Setting_offsets_for_an_element", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- {{cssxref("position")}}
- [CSS positioned layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS logical properties and values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
