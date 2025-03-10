---
title: outline-offset
slug: Web/CSS/outline-offset
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`outline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt den Abstand zwischen einem [Umriss (outline)](/de/docs/Web/CSS/outline) und dem Rand oder der Begrenzung eines Elements.

{{InteractiveExample("CSS Demo: outline-offset")}}

```css interactive-example-choice
outline-offset: 4px;
```

```css interactive-example-choice
outline-offset: 0.6rem;
```

```css interactive-example-choice
outline-offset: 12px;
outline: 5px dashed blue;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 2px solid crimson;
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntax

```css
/* <length> values */
outline-offset: 3px;
outline-offset: 0.2em;

/* Global values */
outline-offset: inherit;
outline-offset: initial;
outline-offset: revert;
outline-offset: revert-layer;
outline-offset: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Breite des Raums zwischen dem Element und seinem Umriss. Ein negativer Wert platziert den Umriss innerhalb des Elements. Ein Wert von `0` platziert den Umriss so, dass kein Raum zwischen ihm und dem Element ist.

## Beschreibung

Ein Umriss ist eine Linie, die um ein Element herum gezeichnet wird, außerhalb des Randbereichs. Der Raum zwischen einem Element und seinem Umriss ist transparent. Mit anderen Worten, er ist wie der Hintergrund des Elternelements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des outline-offset in Pixeln

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
