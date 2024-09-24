---
title: padding-block
slug: Web/CSS/padding-block
l10n:
  sourceCommit: 6b48d9fb5065ee53207e9053f465cc0989c2619a
---

{{CSSRef}}

Die **`padding-block`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) definiert den logischen Blockanfang und das Blockende der Auffüllung eines Elements, die von den physikalischen Auffüllungseigenschaften abhängen, basierend auf dem Schreibmodus des Elements, der Richtung und der Textausrichtung.

{{EmbedInteractiveExample("pages/css/padding-block.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("padding-block-start")}}
- {{cssxref("padding-block-end")}}

## Syntax

```css
/* <length> Werte */
padding-block: 10px 20px; /* Eine absolute Länge */
padding-block: 1em 2em; /* relativ zur Textgröße */
padding-block: 10px; /* setzt sowohl Start- als auch Endwerte */

/* <percentage> Werte */
padding-block: 5% 2%; /* relativ zur Breite des nächstgelegenen Blockcontainers */

/* Globale Werte */
padding-block: inherit;
padding-block: initial;
padding-block: revert;
padding-block: revert-layer;
padding-block: unset;
```

Die `padding-block` Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, wird er sowohl für {{cssxref("padding-block-start")}} als auch {{cssxref("padding-block-end")}} verwendet. Wenn zwei Werte angegeben werden, wird der erste für {{cssxref("padding-block-start")}} und der zweite für {{cssxref("padding-block-end")}} verwendet.

### Werte

Die `padding-block` Eigenschaft nimmt dieselben Werte wie die {{cssxref("padding-left")}} Eigenschaft an.

## Beschreibung

Diese Werte entsprechen den Eigenschaften {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}}, oder {{cssxref("padding-right")}} und {{cssxref("padding-left")}}, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} definiert sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Blockauffüllung für vertikalen Text

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
  padding-block: 20px 40px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_block_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physikalischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
