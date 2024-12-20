---
title: inset-inline
slug: Web/CSS/inset-inline
l10n:
  sourceCommit: da659b5d4f75b66804d97c80ec7c89b8792d7389
---

{{CSSRef}}

Die **`inset-inline`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die logischen Start- und Endversätze eines Elements in der Inline-Richtung. Diese werden je nach Schreibmodus, Richtung und Textausrichtung des Elements auf physische Versätze abgebildet. Sie entspricht den Eigenschaften {{cssxref("top")}} und {{cssxref("bottom")}}, oder {{cssxref("right")}} und {{cssxref("left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

Diese {{Glossary("inset_properties", "Einfügeeigenschaft")}} hat keine Auswirkungen auf unpositionierte Elemente.

{{EmbedInteractiveExample("pages/css/inset-inline.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}

## Syntax

```css
/* <length> values */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* value applied to start and end */
inset-inline: auto calc(anchor(self-start) + 20px);
inset-inline: 400px anchor-size(--myAnchor height, 100px);

/* <percentage>s of the width or height of the containing block */
inset-inline: 10% 5%;

/* Keyword value */
inset-inline: auto;

/* Global values */
inset-inline: inherit;
inset-inline: initial;
inset-inline: revert;
inset-inline: revert-layer;
inset-inline: unset;
```

### Werte

Die `inset-inline` Eigenschaft nimmt die gleichen Werte an wie die {{cssxref("left")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Inline-Start- und Endversätzen

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
