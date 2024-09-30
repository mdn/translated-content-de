---
title: inset
slug: Web/CSS/inset
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ist eine Abkürzung, die den Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und/oder {{cssxref("left")}} entspricht. Sie hat die gleiche Mehrwertsyntax wie die Kurzschrift der {{cssxref("margin")}}-Eigenschaft.

Diese [inset-Eigenschaft](/de/docs/Glossary/inset_properties) hat keine Auswirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset.html")}}

Obwohl sie Teil des Moduls [CSS-Logik-Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) ist, definiert sie keine _logischen_ Versätze. Sie definiert _physische_ Versätze, unabhängig vom Schreibrichtungsmodus des Elements, der Richtung und der Textorientierung.

## Bestandeigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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
inset: auto auto anchor(center) anchor(self-end);

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

Die `inset`-Eigenschaft nimmt die gleichen Werte wie die {{cssxref("left")}}-Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Versätze für ein Element einstellen

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

#### Ergebnis

{{EmbedLiveSample("Setting_offsets_for_an_element", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Langform-Box-Versatzeigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}.
- Die zugeordneten logischen Abkürzungen: {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- Die Mehrwertsyntax der {{cssxref("margin")}}-Kurzschrift.
