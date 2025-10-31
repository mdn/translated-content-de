---
title: inset-inline-start
slug: Web/CSS/Reference/Properties/inset-inline-start
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`inset-inline-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert das logische Inline-Start-Offset eines Elements, das abhängig vom Schreibmodus, der Richtung und der Textorientierung des Elements auf ein physisches Offset abgebildet wird. Es entspricht der {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, oder {{cssxref("left")}} Eigenschaft je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definierten Werten.

Diese {{Glossary("inset_properties", "Einrückungseigenschaft")}} hat keine Auswirkung auf nicht positionierte Elemente.

{{InteractiveExample("CSS Demo: inset-inline-start")}}

```css interactive-example-choice
writing-mode: horizontal-tb;
```

```css interactive-example-choice
writing-mode: vertical-rl;
```

```css interactive-example-choice
writing-mode: horizontal-tb;
direction: rtl;
```

```css interactive-example-choice
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div class="example-container" id="example-element">
    <div id="abspos">
      I am absolutely positioned with inset-inline-start: 50px
    </div>
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
#example-element {
  border: 0.75em solid;
  padding: 0.75em;
  position: relative;
  width: 100%;
  min-height: 200px;
  unicode-bidi: bidi-override;
}

#abspos {
  background-color: yellow;
  color: black;
  border: 3px solid red;
  position: absolute;
  inset-inline-start: 50px;
  inline-size: 140px;
  min-block-size: 80px;
}
```

## Syntax

```css
/* <length> values */
inset-inline-start: 3px;
inset-inline-start: 2.4em;
inset-inline-start: calc(anchor(--my-anchor 50%) + 10px);
inset-inline-start: anchor-size(width);

/* <percentage>s of the width or height of the containing block */
inset-inline-start: 10%;

/* Keyword value */
inset-inline-start: auto;

/* Global values */
inset-inline-start: inherit;
inset-inline-start: initial;
inset-inline-start: revert;
inset-inline-start: revert-layer;
inset-inline-start: unset;
```

Die Kurzform für `inset-inline-start` und {{cssxref("inset-inline-end")}} ist {{cssxref("inset-inline")}}.

### Werte

Die `inset-inline-start` Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("left")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Start-Offset setzen

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
  inset-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_offset", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften, die andere Einrückungen definieren: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, und {{cssxref("inset-inline-end")}}
- Die abgebildeten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
