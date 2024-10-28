---
title: object-fit
slug: Web/CSS/object-fit
l10n:
  sourceCommit: 27e8f6c17e93b026d6083ca333ed0d4ff6360d3e
---

{{CSSRef}}

Die **`object-fit`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Inhalt eines [ersetzten Elements](/de/docs/Web/CSS/Replaced_element), wie etwa einem {{HTMLElement("img")}} oder {{HTMLElement("video")}}, in seinen Container skaliert werden soll.

> [!NOTE]
> Die `object-fit`-Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.

Sie können die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Element-Boxs mit der {{cssxref("object-position")}} Eigenschaft verändern.

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

## Syntax

```css
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;

/* Global values */
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: revert-layer;
object-fit: unset;
```

Die `object-fit` Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `contain`
  - : Der ersetzte Inhalt wird so skaliert, dass sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird, während er in die Inhaltsbox des Elements passt. Das gesamte Objekt wird so positioniert, dass es die Box füllt, wobei das Seitenverhältnis beibehalten wird, sodass das Objekt ["letterboxed"](<https://en.wikipedia.org/wiki/Letterboxing_(filming)>) oder ["pillarboxed"](https://en.wikipedia.org/wiki/Pillarbox) wird, wenn sein Seitenverhältnis nicht dem Seitenverhältnis der Box entspricht.
- `cover`
  - : Der ersetzte Inhalt wird so dimensioniert, dass sein Seitenverhältnis beibehalten wird, während das gesamte Inhaltsfeld des Elements gefüllt wird. Wenn das Seitenverhältnis des Objekts nicht mit dem Seitenverhältnis seiner Box übereinstimmt, wird das Objekt beschnitten, um zu passen.
- `fill`
  - : Der ersetzte Inhalt wird so dimensioniert, dass er die Inhaltsbox des Elements ausfüllt. Das gesamte Objekt wird die Box vollständig ausfüllen. Wenn das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Objekts nicht mit dem Seitenverhältnis seiner Box übereinstimmt, wird das Objekt gedehnt, um zu passen.
- `none`
  - : Der ersetzte Inhalt wird nicht skaliert.
- `scale-down`
  - : Der Inhalt wird so dimensioniert, als ob `none` oder `contain` angegeben wären, je nachdem, was zu einer kleineren konkreten Objektgröße führen würde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von object-fit für ein Bild

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
