---
title: inset-block-start
slug: Web/CSS/inset-block-start
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset-block-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Blockanfang-Versatz eines Elements, der je nach Schriftmodus, Richtung und Textausrichtung des Elements auf einen physischen Einsatz abgebildet wird. Sie entspricht der {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} oder {{cssxref("left")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Diese {{glossary("inset properties", "inset-Eigenschaft")}} hat keine Auswirkung auf nicht-positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-block-start.html")}}

## Syntax

```css
/* <length> Werte */
inset-block-start: 3px;
inset-block-start: 2.4em;
inset-block-start: anchor(end);
inset-block-start: calc(anchor(--myAnchor 50%) + 5px);

/* <percentage> der Breite oder Höhe des umgebenden Blocks */
inset-block-start: 10%;

/* Schlüsselwortwert */
inset-block-start: auto;

/* Globale Werte */
inset-block-start: inherit;
inset-block-start: initial;
inset-block-start: revert;
inset-block-start: revert-layer;
inset-block-start: unset;
```

### Werte

Die `inset-block-start` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Blockanfang-Versatz einstellen

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
  inset-block-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_start_offset", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften, die andere Einsätze definieren: {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- Die abgebildeten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
