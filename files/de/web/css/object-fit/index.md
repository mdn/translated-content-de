---
title: object-fit
slug: Web/CSS/object-fit
l10n:
  sourceCommit: 71f57bc7f6065d835a5af7c3ced3ef26263c809f
---

{{CSSRef}}

Die **`object-fit`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Inhalt eines [replaced element](/de/docs/Web/CSS/Replaced_element), wie ein {{HTMLElement("img")}} oder {{HTMLElement("video")}}, skaliert werden soll, um in seinen Container zu passen.

> [!NOTE]
> Die `object-fit` Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, und {{HTMLElement("fencedframe")}} Elemente.

Sie können die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Box des Elements mit der {{cssxref("object-position")}} Eigenschaft anpassen.

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

## Syntax

```css
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;

/* Globale Werte */
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: revert-layer;
object-fit: unset;
```

Die `object-fit` Eigenschaft wird als ein einzelnes Schlüsselwort festgelegt, das aus der untenstehenden Werteliste ausgewählt wird.

### Werte

- `contain`
  - : Der ersetzte Inhalt wird so skaliert, dass das {{glossary("aspect ratio")}} beibehalten wird, während er innerhalb des Inhaltsbereichs des Elements passt. Das gesamte Objekt wird so angepasst, dass es in die Box passt, wobei das Seitenverhältnis beibehalten wird, sodass das Objekt ["letterboxed"](<https://en.wikipedia.org/wiki/Letterboxing_(filming)>) wird, wenn sein Seitenverhältnis nicht mit dem Seitenverhältnis der Box übereinstimmt.
- `cover`
  - : Der ersetzte Inhalt wird so dimensioniert, dass das Seitenverhältnis beibehalten wird, während der gesamte Inhaltsbereich des Elements ausgefüllt wird. Wenn das Seitenverhältnis des Objekts nicht mit dem Seitenverhältnis seiner Box übereinstimmt, wird das Objekt beschnitten, um zu passen.
- `fill`
  - : Der ersetzte Inhalt wird so dimensioniert, dass er den Inhaltsbereich des Elements ausfüllt. Das gesamte Objekt wird die Box vollständig ausfüllen. Wenn das {{glossary("aspect ratio")}} des Objekts nicht mit dem Seitenverhältnis seiner Box übereinstimmt, wird das Objekt gestreckt, um zu passen.
- `none`
  - : Der ersetzte Inhalt wird nicht skaliert.
- `scale-down`
  - : Der Inhalt wird so dimensioniert, als ob `none` oder `contain` angegeben wäre, je nachdem, was zu einer kleineren konkreten Objektgröße führen würde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von object-fit für ein Bild

#### HTML

```html
<section>
  <h2>object-fit: fill</h2>
  <img class="fill" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="fill narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: contain</h2>
  <img class="contain" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="contain narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: cover</h2>
  <img class="cover" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="cover narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: none</h2>
  <img class="none" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="none narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: scale-down</h2>
  <img class="scale-down" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="scale-down narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />
</section>
```

#### CSS

```css
h2 {
  font-family:
    Courier New,
    monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
  margin: 10px 0;
}

.narrow {
  width: 100px;
  height: 150px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_object-fit_for_an_image', 500, 1100) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("background-size")}}
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
