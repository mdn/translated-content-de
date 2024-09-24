---
title: inset-block-end
slug: Web/CSS/inset-block-end
l10n:
  sourceCommit: 09c431e017263c263558df1821f187f76660dde9
---

{{CSSRef}}

Die **`inset-block-end`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Block-Ende-Versatz eines Elements, der je nach Schreibrichtung, Richtung und Textorientierung des Elements auf eine physische Einfügung abgebildet wird. Sie entspricht der {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, oder {{cssxref("left")}} Eigenschaft, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definierten Werten.

Diese {{glossary("inset properties", "Einfügungs-Eigenschaft")}} hat keine Auswirkung auf nicht positionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-block-end.html")}}

## Syntax

```css
/* <length> Werte */
inset-block-end: 3px;
inset-block-end: 2.4em;
inset-block-end: calc(anchor(start) + 20px);
inset-block-end: anchor(--myAnchor 50%);

/* <percentage> der Breite oder Höhe des enthaltenen Blocks */
inset-block-end: 10%;

/* Schlüsselwort-Wert */
inset-block-end: auto;

/* Globale Werte */
inset-block-end: inherit;
inset-block-end: initial;
inset-block-end: revert;
inset-block-end: revert-layer;
inset-block-end: unset;
```

### Werte

Die `inset-block-end` Eigenschaft nimmt die gleichen Werte wie die {{cssxref("left")}} Eigenschaft an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen des Block-Ende-Versatzes

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
  writing-mode: vertical-rl;
  position: relative;
  inset-block-end: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_end_offset", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften, welche andere Einfügungen definieren: {{cssxref("inset-block-start")}}, {{cssxref("inset-inline-start")}}, und {{cssxref("inset-inline-end")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, und {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
