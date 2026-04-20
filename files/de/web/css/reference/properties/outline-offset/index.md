---
title: "`outline-offset` CSS property"
short-title: outline-offset
slug: Web/CSS/Reference/Properties/outline-offset
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`outline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Abstand zwischen einem [Kontur](/de/docs/Web/CSS/Reference/Properties/outline) und dem Rand oder der Grenze eines Elements fest.

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
  - : Die Breite des Abstands zwischen dem Element und seiner Kontur. Ein negativer Wert platziert die Kontur innerhalb des Elements. Ein Wert von `0` platziert die Kontur so, dass es keinen Abstand zwischen ihr und dem Element gibt.

## Beschreibung

Eine Kontur ist eine Linie, die um ein Element gezeichnet wird, außerhalb des Randbereichs. Der Raum zwischen einem Element und seiner Kontur ist transparent. Mit anderen Worten, es ist dasselbe wie der Hintergrund des übergeordneten Elements.

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
