---
title: object-position
slug: Web/CSS/object-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`object-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Ausrichtung der Inhalte des ausgewählten {{Glossary("replaced_elements", "ersetzten Elements")}} innerhalb des Rahmens des Elements an. Bereiche des Rahmens, die nicht durch das Objekt des ersetzten Elements abgedeckt sind, zeigen den Hintergrund des Elements.

Sie können mit der {{cssxref("object-fit")}}-Eigenschaft anpassen, wie die intrinsische Größe des Objekts des ersetzten Elements (d.h. seine natürliche Größe) innerhalb des Rahmens des Elements angepasst wird.

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
> Die Position kann so festgelegt werden, dass das ersetzte Element außerhalb seines Rahmens gezeichnet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionierung von Bildinhalten

#### HTML

Hier sehen wir HTML, das zwei {{HTMLElement("img")}}-Elemente enthält, die jeweils das MDN-Logo anzeigen.

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo" />
<img id="object-position-2" src="mdn.svg" alt="MDN Logo" />
```

#### CSS

Das CSS enthält Standardstilregeln für das `<img>`-Element selbst sowie separate Stile für jedes der beiden Bilder.

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

Das erste Bild ist so positioniert, dass seine linke Kante 10 Pixel vom linken Rand des Rahmens des Elements inset ist. Das zweite Bild ist so positioniert, dass seine rechte Kante bündig mit dem rechten Rand des Rahmens des Elements ist und befindet sich 10 % der Höhe des Rahmens des Elements nach unten.

#### Ergebnis

{{ EmbedLiveSample('Positioning_image_content', '100%','600px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
