---
title: border-left-color
slug: Web/CSS/border-left-color
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`border-left-color`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des linken [Rahmens](/de/docs/Web/CSS/border) eines Elements fest. Sie kann auch mit den verkürzten CSS-Eigenschaften {{cssxref("border-color")}} oder {{cssxref("border-left")}} gesetzt werden.

{{EmbedInteractiveExample("pages/css/border-left-color.html")}}

## Syntax

```css
/* <color> values */
border-left-color: red;
border-left-color: #ffbb00;
border-left-color: rgb(255 0 0);
border-left-color: hsl(100deg 50% 25% / 75%);
border-left-color: currentcolor;
border-left-color: transparent;

/* Global values */
border-left-color: inherit;
border-left-color: initial;
border-left-color: revert;
border-left-color: revert-layer;
border-left-color: unset;
```

Die `border-left-color`-Eigenschaft wird als einzelner Wert angegeben.

### Werte

- {{cssxref("&lt;color&gt;")}}
  - : Die Farbe des linken Rahmens.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein einfaches `<div>` mit einem Rahmen

#### HTML

```html
<div class="mybox">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="redtext">red</span>.
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-left-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('A_simple_div_with_a_border')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die rahmenbezogenen CSS-Kurzschreibweisen: {{Cssxref("border")}}, {{Cssxref("border-left")}}, und {{Cssxref("border-color")}}.
- Die farbbezogenen CSS-Eigenschaften für die anderen Rahmen: {{Cssxref("border-right-color")}}, {{Cssxref("border-bottom-color")}}, und {{Cssxref("border-top-color")}}.
- Die anderen rahmenbezogenen CSS-Eigenschaften, die auf denselben Rahmen angewendet werden: {{cssxref("border-left-style")}} und {{cssxref("border-left-width")}}.
- Der Standardfarbwert [`currentcolor`](/de/docs/Web/CSS/color_value#currentcolor_keyword).
