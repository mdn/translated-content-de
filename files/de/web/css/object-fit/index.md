---
title: object-fit
slug: Web/CSS/object-fit
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

Die **`object-fit`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, wie der Inhalt eines {{Glossary("replaced_elements", "ersetzten Elements")}}, wie z.B. einem {{HTMLElement("img")}} oder {{HTMLElement("video")}}, skaliert werden soll, um in seinen Container zu passen.

> [!NOTE]
> Die `object-fit` Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, und {{HTMLElement("fencedframe")}} Elemente.

Sie können die Ausrichtung des Inhaltsobjekts des ersetzten Elements innerhalb des Elementkastens mit der {{cssxref("object-position")}} Eigenschaft verändern.

{{InteractiveExample("CSS Demo: object-fit")}}

```css interactive-example-choice
object-fit: fill;
```

```css interactive-example-choice
object-fit: contain;
```

```css interactive-example-choice
object-fit: cover;
```

```css interactive-example-choice
object-fit: none;
```

```css interactive-example-choice
object-fit: scale-down;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/plumeria-146x200.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: 100%;
  border: 2px dotted #888888;
}
```

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

Die `object-fit` Eigenschaft wird als ein Einzel-Keyword angegeben, das aus der untenstehenden Werteliste ausgewählt wird.

### Werte

- `contain`
  - : Der ersetzte Inhalt wird skaliert, um sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beizubehalten, während er in den Inhaltbereich des Elements passt. Das gesamte Objekt wird so skaliert, dass es den Kasten ausfüllt, wobei das Seitenverhältnis beibehalten wird. Wenn es nicht mit dem Seitenverhältnis des Kastens übereinstimmt, wird es ["letterboxed"](<https://en.wikipedia.org/wiki/Letterboxing_(filming)>) oder ["pillarboxed"](https://en.wikipedia.org/wiki/Pillarbox).
- `cover`
  - : Der ersetzte Inhalt wird so bemessen, dass er sein Seitenverhältnis beibehält und den gesamten Inhaltbereich des Elements ausfüllt. Wenn das Seitenverhältnis des Objekts nicht mit dem des Kastens übereinstimmt, wird das Objekt beschnitten, um zu passen.
- `fill`
  - : Der ersetzte Inhalt wird so bemessen, dass er den Inhaltbereich des Elements vollständig ausfüllt. Das gesamte Objekt wird den Kasten vollständig füllen. Wenn das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Objekts nicht mit dem des Kastens übereinstimmt, wird das Objekt gestreckt, um zu passen.
- `none`
  - : Der ersetzte Inhalt wird nicht skaliert.
- `scale-down`
  - : Der Inhalt wird so bemessen, als ob `none` oder `contain` angegeben wäre, je nachdem, welches eine kleinere konkrete Objektgröße verursachen würde.

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
  font-family: "Courier New", monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid black;
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
