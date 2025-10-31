---
title: object-position
slug: Web/CSS/Reference/Properties/object-position
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`object-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Ausrichtung der Inhalte des ausgewählten {{Glossary("replaced_elements", "ersetzten Elements")}} innerhalb des Box des Elements fest. Bereiche der Box, die nicht vom Objekt des ersetzten Elements abgedeckt sind, zeigen den Hintergrund des Elements an.

Sie können anpassen, wie die inhärente Größe des Objekts des ersetzten Elements (also seine natürliche Größe) eingestellt wird, um in die Box des Elements zu passen, indem Sie die {{cssxref("object-fit")}} Eigenschaft verwenden.

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
  - : Von einem bis vier Werte, die die 2D-Position des Elements definieren. Relative oder absolute Offsets können verwendet werden.

> [!NOTE]
> Die Position kann so eingestellt werden, dass das ersetzte Element außerhalb seines Box gezeichnet wird.

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

Das erste Bild ist mit seiner linken Kante 10 Pixel von der linken Kante des Box des Elements entfernt positioniert. Das zweite Bild ist mit seiner rechten Kante bündig an der rechten Kante des Box des Elements positioniert und befindet sich 10% von der Höhe des Box des Elements entfernt.

#### Ergebnis

{{ EmbedLiveSample('Positioning_image_content', '100%','600px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
