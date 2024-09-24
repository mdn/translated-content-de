---
title: object-position
slug: Web/CSS/object-position
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`object-position`** [CSS](/de/docs/Web/CSS)-Eigenschaft bestimmt die Ausrichtung des Inhalts des ausgewählten [ersetzten Elements](/de/docs/Web/CSS/Replaced_element) innerhalb des Rahmens des Elements. Bereiche des Rahmens, die nicht vom Objekt des ersetzten Elements abgedeckt sind, zeigen den Hintergrund des Elements an.

Sie können anpassen, wie die intrinsische Größe (d.h. die natürliche Größe) des Objekts des ersetzten Elements so angepasst wird, dass es innerhalb des Rahmens des Elements passt, indem Sie die {{cssxref("object-fit")}}-Eigenschaft verwenden.

{{EmbedInteractiveExample("pages/css/object-position.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
object-position: top;
object-position: bottom;
object-position: left;
object-position: right;
object-position: center;

/* <percentage> Werte */
object-position: 25% 75%;

/* <length> Werte */
object-position: 0 0;
object-position: 1cm 2cm;
object-position: 10ch 8em;

/* Randversatzwerte */
object-position: bottom 10px right 20px;
object-position: right 3em bottom 10px;
object-position: top 0 right 10px;

/* Globale Werte */
object-position: inherit;
object-position: initial;
object-position: revert;
object-position: revert-layer;
object-position: unset;
```

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Von einem bis zu vier Werten, die die 2D-Position des Elements definieren. Relative oder absolute Versätze können verwendet werden.

> [!NOTE]
> Die Position kann so eingestellt werden, dass das ersetzte Element außerhalb seines Rahmens gezeichnet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positionierung von Bildinhalten

#### HTML

Hier sehen wir HTML, das zwei {{HTMLElement("img")}}-Elemente enthält, die beide das MDN-Logo anzeigen.

```html
<img id="object-position-1" src="mdn.svg" alt="MDN Logo" />
<img id="object-position-2" src="mdn.svg" alt="MDN Logo" />
```

#### CSS

Das CSS beinhaltet Standardstile für das `<img>`-Element selbst sowie separate Stile für jedes der beiden Bilder.

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

Das erste Bild ist so positioniert, dass sein linker Rand 10 Pixel vom linken Rand des Rahmens des Elements eingezogen ist. Das zweite Bild ist so positioniert, dass sein rechter Rand am rechten Rand des Rahmens des Elements flächenbündig anliegt und sich 10% in Richtung der Höhe des Rahmens des Elements befindet.

#### Ergebnis

{{ EmbedLiveSample('Positioning_image_content', '100%','600px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
