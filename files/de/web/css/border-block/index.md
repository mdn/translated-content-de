---
title: border-block
slug: Web/CSS/border-block
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

Die **`border-block`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) zum Festlegen der individuellen logischen Blockrand-Eigenschaftswerte an einer Stelle im Stylesheet.

{{EmbedInteractiveExample("pages/css/border-block.html")}}

`border-block` kann verwendet werden, um die Werte für eine oder mehrere der Eigenschaften {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}} und {{cssxref("border-block-color")}} festzulegen, wobei sowohl der Anfang als auch das Ende in der Blockdimension gleichzeitig eingestellt werden. Die physischen Ränder, auf die es abgebildet wird, hängen vom Schreibmodus, der Leserichtung und der Textorientierung des Elements ab. Es entspricht den Eigenschaften {{cssxref("border-top")}} und {{cssxref("border-bottom")}} oder {{cssxref("border-right")}} und {{cssxref("border-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Die Ränder in der anderen Dimension können mit {{cssxref("border-inline")}} eingestellt werden, das {{cssxref("border-inline-start")}} und {{cssxref("border-inline-end")}} setzt.

## Zu den Einzel-Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`border-block-color`](/de/docs/Web/CSS/border-block-color)
- [`border-block-style`](/de/docs/Web/CSS/border-block-style)
- [`border-block-width`](/de/docs/Web/CSS/border-block-width)

## Syntax

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;

/* Globale Werte */
border-block: inherit;
border-block: initial;
border-block: revert;
border-block: revert-layer;
border-block: unset;
```

### Werte

Die `border-block`-Eigenschaft wird mit einem oder mehreren der folgenden Werte in beliebiger Reihenfolge spezifiziert:

- `<'border-width'>`
  - : Die Breite des Randes. Siehe {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Der Linienstil des Randes. Siehe {{cssxref("border-style")}}.
- {{CSSXref("&lt;color&gt;")}}
  - : Die Farbe des Randes.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rand mit vertikalem Text

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
  writing-mode: vertical-rl;
  border-block: 5px dashed blue;
}
```

#### Ergebnisse

{{EmbedLiveSample("Border_with_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Diese Eigenschaft wird auf eine der physischen Rand-Eigenschaften abgebildet: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}}.
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
