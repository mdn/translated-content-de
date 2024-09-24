---
title: inset-inline
slug: Web/CSS/inset-inline
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die logischen Anfangs- und Endabstände eines Elements in der Inline-Richtung. Diese korrespondieren mit den physischen Abständen, abhängig vom Schreibmodus des Elements, der Leserichtung und der Textausrichtung. Sie entspricht den {{cssxref("top")}} und {{cssxref("bottom")}}, oder {{cssxref("right")}} und {{cssxref("left")}} Eigenschaften, je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Diese {{glossary("inset properties", "inset-Eigenschaft")}} hat keine Auswirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-inline.html")}}

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}

## Syntax

```css
/* <length> Werte */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* Wert wird auf Anfang und Ende angewendet */
inset-inline: auto calc(anchor(self-start) + 20px);
inset-inline: anchor(--myAnchor 50%) auto;

/* <percentage> der Breite oder Höhe des enthaltenen Blocks */
inset-inline: 10% 5%;

/* Schlüsselwortwert */
inset-inline: auto;

/* Globale Werte */
inset-inline: inherit;
inset-inline: initial;
inset-inline: revert;
inset-inline: revert-layer;
inset-inline: unset;
```

### Werte

Die `inset-inline` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von Inline-Anfangs- und Endabständen

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

- Die zugeordneten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- Die zugeordnete physische Kurzform: {{cssxref("inset")}}
- Die zugeordnete Block-Kurzform: {{cssxref("inset-block")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
