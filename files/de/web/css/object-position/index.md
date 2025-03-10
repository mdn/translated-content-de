---
title: object-position
slug: Web/CSS/object-position
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`object-position`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Ausrichtung des Inhalts des ausgewählten [ersetzten Elements](/de/docs/Web/CSS/Replaced_element) innerhalb des Elementkastens an. Bereiche des Kastens, die nicht vom Objekt des ersetzten Elements abgedeckt werden, zeigen den Hintergrund des Elements.

Sie können die Anpassung der intrinsischen Größe (d. h. der natürlichen Größe) des Objekts des ersetzten Elements an den Elementkasten mit der {{cssxref("object-fit")}} Eigenschaft steuern.

{{InteractiveExample("CSS Demo: object-position")}}

```css interactive-example-choice
object-position: 50% 50%;
```

```css interactive-example-choice
object-position: right top;
```

```css interactive-example-choice
object-position: left bottom;
```

```css interactive-example-choice
object-position: 250px 125px;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/moon.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: 250px;
  width: 250px;
  object-fit: none;
  border: 1px solid red;
}
```

## Syntax

```css
/* Keyword values */
object-position: top;
object-position: bottom;
object-position: left;
object-position: right;
object-position: center;

/* <percentage> values */
object-position: 25% 75%;

/* <length> values */
object-position: 0 0;
object-position: 1cm 2cm;
object-position: 10ch 8em;

/* Edge offsets values */
object-position: bottom 10px right 20px;
object-position: right 3em bottom 10px;
object-position: top 0 right 10px;

/* Global values */
object-position: inherit;
object-position: initial;
object-position: revert;
object-position: revert-layer;
object-position: unset;
```

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Ein bis vier Werte, die die 2D-Position des Elements definieren. Relative oder absolute Offsets können verwendet werden.

> [!NOTE]
> Die Position kann so festgelegt werden, dass das ersetzte Element außerhalb seines Kastens gezeichnet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionierung von Bildinhalten

#### HTML

Hier sehen wir HTML, das zwei {{HTMLElement("img")}} Elemente enthält, die jeweils das MDN-Logo anzeigen.

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo" />
<img id="object-position-2" src="mdn.svg" alt="MDN Logo" />
```

#### CSS

Das CSS enthält Standardstile für das `<img>` Element selbst sowie separate Stile für jedes der beiden Bilder.

```css
img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
```

Das erste Bild ist so positioniert, dass seine linke Kante 10 Pixel von der linken Kante des Elementkastens zurückgesetzt ist. Das zweite Bild ist so positioniert, dass seine rechte Kante bündig mit der rechten Kante des Elementkastens ist und 10% des Weges nach unten in der Höhe des Elementkastens positioniert ist.

#### Ergebnis

{{ EmbedLiveSample('Positioning_image_content', '100%','600px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere CSS-Eigenschaften im Zusammenhang mit Bildern: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
