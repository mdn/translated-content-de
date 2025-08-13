---
title: border-left-color
slug: Web/CSS/border-left-color
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`border-left-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des linken [Rahmens](/de/docs/Web/CSS/border) eines Elements fest. Sie kann auch mit den Kurzschreibweise-Eigenschaften {{cssxref("border-color")}} oder {{cssxref("border-left")}} festgelegt werden.

{{InteractiveExample("CSS Demo: border-left-color")}}

```css interactive-example-choice
border-left-color: red;
```

```css interactive-example-choice
border-left-color: #32a1ce;
```

```css interactive-example-choice
border-left-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-left-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-left-color: transparent;
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
}
```

## Syntax

```css
/* <color> values */
border-left-color: red;
border-left-color: #ffbb00;
border-left-color: rgb(255 0 0);
border-left-color: hsl(100deg 50% 25% / 75%);
border-left-color: currentColor;
border-left-color: transparent;

/* Global values */
border-left-color: inherit;
border-left-color: initial;
border-left-color: revert;
border-left-color: revert-layer;
border-left-color: unset;
```

Die Eigenschaft `border-left-color` wird als einzelner Wert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des linken Rahmens.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein div mit einem Rahmen

#### HTML

```html
<div class="my-box">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="red-text">red</span>.
  </p>
</div>
```

#### CSS

```css
.my-box {
  border: solid 0.3em gold;
  border-left-color: red;
  width: auto;
}

.red-text {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('A_div_with_a_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die CSS-Kurzschreibweise-Eigenschaften für Rahmen: {{Cssxref("border")}}, {{Cssxref("border-left")}}, und {{Cssxref("border-color")}}.
- Die farbbezogenen CSS-Eigenschaften für die anderen Rahmen: {{Cssxref("border-right-color")}}, {{Cssxref("border-bottom-color")}}, und {{Cssxref("border-top-color")}}.
- Die anderen rahmenbezogenen CSS-Eigenschaften, die auf denselben Rahmen angewendet werden: {{cssxref("border-left-style")}} und {{cssxref("border-left-width")}}.
- Der Standardfarbwert [`currentColor`](/de/docs/Web/CSS/color_value#currentcolor_keyword).
