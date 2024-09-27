---
title: object-position
slug: Web/CSS/object-position
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`object-position`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Ausrichtung der Inhalte des ausgewählten [ersetzten Elements](/de/docs/Web/CSS/Replaced_element) innerhalb des Rahmens des Elements fest. Bereiche des Rahmens, die nicht vom Objekt des ersetzten Elements abgedeckt werden, zeigen den Hintergrund des Elements.

Sie können anpassen, wie die intrinsische Größe des Objekts des ersetzten Elements (d.h. seine natürliche Größe) angepasst wird, um in den Rahmen des Elements zu passen, indem Sie die {{cssxref("object-fit")}} Eigenschaft verwenden.

{{EmbedInteractiveExample("pages/css/object-position.html")}}

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
> Die Position kann so eingestellt werden, dass das ersetzte Element außerhalb seines Rahmens gezeichnet wird.

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

Das CSS enthält die Standard-Stilvorlage für das `<img>` Element selbst sowie separate Stile für jedes der beiden Bilder.

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

Das erste Bild ist so positioniert, dass seine linke Kante 10 Pixel von der linken Kante des Rahmens des Elements entfernt ist. Das zweite Bild ist so positioniert, dass seine rechte Kante bündig an der rechten Kante des Rahmens des Elements liegt und 10% der Höhe des Rahmens des Elements nach unten positioniert ist.

#### Ergebnis

{{ EmbedLiveSample('Positioning_image_content', '100%','600px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
