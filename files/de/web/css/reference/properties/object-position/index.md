---
title: "`object-position` CSS property"
short-title: object-position
slug: Web/CSS/Reference/Properties/object-position
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`object-position`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Ausrichtung der Inhalte des ausgewählten {{Glossary("replaced_elements", "ersetzten Elements")}} innerhalb des Elementrahmens an. Bereiche des Rahmens, die nicht vom Objekt des ersetzten Elements abgedeckt werden, zeigen den Hintergrund des Elements.

Sie können anpassen, wie die intrinsische Größe des Objekts des ersetzten Elements (das heißt seine natürliche Größe) angepasst wird, um innerhalb des Elementrahmens zu passen, indem Sie die {{cssxref("object-fit")}} Eigenschaft verwenden.

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
> Die Position kann so eingestellt werden, dass das ersetzte Element außerhalb seines Rahmens gezeichnet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionierung von Bildinhalten

#### HTML

Hier sehen wir HTML, das zwei {{HTMLElement("img")}}-Elemente umfasst, von denen jedes das MDN-Logo anzeigt.

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo" />
<img id="object-position-2" src="mdn.svg" alt="MDN Logo" />
```

#### CSS

Das CSS enthält Standard-Styling für das `<img>`-Element selbst sowie separate Stile für jedes der beiden Bilder.

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

Das erste Bild wird mit seinem linken Rand 10 Pixel vom linken Rand des Elementrahmens eingerückt positioniert. Das zweite Bild wird mit seinem rechten Rand bündig am rechten Rand des Elementrahmens positioniert und befindet sich 10 % der Höhe des Elementrahmens nach unten.

#### Ergebnis

{{ EmbedLiveSample('Positioning_image_content', '100%','600px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
