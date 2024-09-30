---
title: object-fit
slug: Web/CSS/object-fit
l10n:
  sourceCommit: 71f57bc7f6065d835a5af7c3ced3ef26263c809f
---

{{CSSRef}}

Die **`object-fit`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, wie der Inhalt eines [ersetzten Elements](/de/docs/Web/CSS/Replaced_element), wie einem {{HTMLElement("img")}} oder {{HTMLElement("video")}}, an die Größe seines Containers angepasst werden soll.

> [!NOTE]
> Die `object-fit`-Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}} Elemente.

Sie können die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Elementrahmens mithilfe der {{cssxref("object-position")}}-Eigenschaft verändern.

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

Die `object-fit`-Eigenschaft wird als einzelnes Schlüsselwort angegeben, das aus der folgenden Liste von Werten ausgewählt wird.

### Werte

- `contain`
  - : Der ersetzte Inhalt wird skaliert, um sein [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) beizubehalten, während er in den Inhaltsrahmen des Elements passt. Das gesamte Objekt wird so angepasst, dass es den Rahmen füllt, während sein Seitenverhältnis erhalten bleibt. Wenn das Seitenverhältnis nicht mit dem Seitenverhältnis des Rahmens übereinstimmt, wird das Objekt ["letterboxed"](<https://en.wikipedia.org/wiki/Letterboxing_(filming)>).
- `cover`
  - : Der ersetzte Inhalt wird so dimensioniert, dass er sein Seitenverhältnis beibehält, während er den gesamten Inhaltsrahmen des Elements füllt. Wenn das Seitenverhältnis des Objekts nicht mit dem des Rahmens übereinstimmt, wird das Objekt beschnitten, um zu passen.
- `fill`
  - : Der ersetzte Inhalt wird so dimensioniert, dass er den Inhaltsrahmen des Elements vollständig füllt. Das gesamte Objekt füllt den Rahmen vollständig aus. Wenn das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des Objekts nicht mit dem des Rahmens übereinstimmt, wird das Objekt gedehnt, um zu passen.
- `none`
  - : Der ersetzte Inhalt wird nicht neu skaliert.
- `scale-down`
  - : Der Inhalt wird so dimensioniert, als wäre `none` oder `contain` angegeben, je nachdem, was zu einer kleineren konkreten Objektgröße führen würde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### object-fit für ein Bild festlegen

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
- [Seitenverhältnisse verstehen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
