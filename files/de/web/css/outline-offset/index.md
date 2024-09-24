---
title: outline-offset
slug: Web/CSS/outline-offset
l10n:
  sourceCommit: aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{CSSRef}}

Die **`outline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand zwischen einer [Umrandung (Outline)](/de/docs/Web/CSS/outline) und dem Rand oder der Grenze eines Elements fest.

{{EmbedInteractiveExample("pages/css/outline-offset.html")}}

## Syntax

```css
/* <length> Werte */
outline-offset: 3px;
outline-offset: 0.2em;

/* Globale Werte */
outline-offset: inherit;
outline-offset: initial;
outline-offset: revert;
outline-offset: revert-layer;
outline-offset: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Breite des Raums zwischen dem Element und seiner Umrandung. Ein negativer Wert platziert die Umrandung innerhalb des Elements. Ein Wert von `0` platziert die Umrandung so, dass kein Abstand zwischen ihr und dem Element besteht.

## Beschreibung

Eine Umrandung (Outline) ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des Randes. Der Raum zwischen einem Element und seiner Umrandung ist transparent. Mit anderen Worten, es ist derselbe wie der Hintergrund des Elternelements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Outline-Offsets in Pixeln

#### HTML

```html
<p>Gallia est omnis divisa in partes tres.</p>
```

#### CSS

```css
p {
  outline: 1px dashed red;
  outline-offset: 10px;
  background: yellow;
  border: 1px solid blue;
  margin: 15px;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_outline_offset_in_pixels')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("outline")}}
- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}
