---
title: inset
slug: Web/CSS/inset
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`inset`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ist eine Kurzform, die den Eigenschaften {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und/oder {{cssxref("left")}} entspricht. Sie hat die gleiche Mehrwert-Syntax wie die Kurzform von {{cssxref("margin")}}.

Diese {{Glossary("inset_properties", "inset-Eigenschaften")}}, einschließlich `inset`, haben keine Wirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset.html")}}

Obwohl es Teil des Moduls [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) ist, definiert es keine _logischen_ Verschiebungen. Es definiert _physische_ Verschiebungen, unabhängig vom Schreibmodus, der Richtung und Textausrichtung des Elements.

## Bestehende Eigenschaften

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

### Verschiebungen für ein Element setzen

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

- {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- {{cssxref("inset-block")}} und {{cssxref("inset-inline")}}
- {{cssxref("position")}}
- [CSS Stellungslayout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
