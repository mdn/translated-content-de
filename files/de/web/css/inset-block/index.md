---
title: inset-block
slug: Web/CSS/inset-block
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset-block`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die logischen Blockanfänge und -enden eines Elements, die je nach Schreibweise, Richtung und Textorientierung des Elements auf physische Offsets abgebildet werden. Sie entspricht den Eigenschaften {{cssxref("top")}} und {{cssxref("bottom")}} oder {{cssxref("right")}} und {{cssxref("left")}}, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

Diese {{glossary("inset properties", "inset property")}} hat keine Wirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-block.html")}}

## Teil-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}

## Syntax

```css
/* <length> Werte */
inset-block: 3px 10px;
inset-block: 2.4em 3em;
inset-block: 10px; /* Wert wird auf Anfang und Ende angewendet */
inset-block: auto anchor(start);
inset-block: calc(anchor(--myAnchor 50%) + 10px) auto;

/* <percentage> der Breite oder Höhe des umgebenden Blocks */
inset-block: 10% 5%;

/* Schlüsselwortwert */
inset-block: auto;

/* Globale Werte */
inset-block: inherit;
inset-block: initial;
inset-block: revert;
inset-block: revert-layer;
inset-block: unset;
```

### Werte

Die Eigenschaft `inset-block` nimmt dieselben Werte wie die {{cssxref("left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Blockanfangs- und -end-Offsets

#### HTML

```html
<div>
  <p class="exampleText">Beispieltext</p>
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
  inset-block: 20px 50px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_start_and_end_offsets", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugeordneten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} und {{cssxref("left")}}
- Die zugeordnete physische Kurzform: {{cssxref("inset")}}
- Die zugeordnete Inline-Kurzform: {{cssxref("inset-inline")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
