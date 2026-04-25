---
title: "`object-fit` CSS property"
short-title: object-fit
slug: Web/CSS/Reference/Properties/object-fit
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die CSS-Eigenschaft **`object-fit`** legt fest, wie der Inhalt eines {{Glossary("replaced_elements", "ausgetauschten Elements")}}, wie beispielsweise eines {{HTMLElement("img")}} oder {{HTMLElement("video")}}, angepasst werden soll, um in seinen Container zu passen.

> [!NOTE]
> Die `object-fit`-Eigenschaft hat keine Wirkung auf {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} und {{HTMLElement("fencedframe")}}-Elemente.

Sie können die Ausrichtung des Inhaltsobjekts des ausgetauschten Elements innerhalb des Elementrahmens mit der Eigenschaft {{cssxref("object-position")}} ändern.

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

Die `object-fit`-Eigenschaft wird als ein einzelnes Schlüsselwort aus der unten stehenden Liste von Werten festgelegt.

### Werte

- `contain`
  - : Der ausgetauschte Inhalt wird skaliert, um sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beizubehalten und gleichzeitig in den Inhaltsrahmen des Elements zu passen. Das gesamte Objekt wird so angepasst, dass es den Rahmen ausfüllt, während sein Seitenverhältnis erhalten bleibt. Das Objekt wird ["letterboxed"](<https://en.wikipedia.org/wiki/Letterboxing_(filming)>) oder ["pillarboxed"](https://en.wikipedia.org/wiki/Pillarbox), wenn sein Seitenverhältnis nicht dem des Rahmens entspricht.
- `cover`
  - : Der ausgetauschte Inhalt wird so dimensioniert, dass er sein Seitenverhältnis beibehält, während er den gesamten Inhaltsrahmen des Elements ausfüllt. Wenn das Seitenverhältnis des Objekts nicht dem des Rahmens entspricht, wird das Objekt beschnitten, um zu passen.
- `fill`
  - : Der ausgetauschte Inhalt wird dimensioniert, um den Inhaltsrahmen des Elements auszufüllen. Dies ist der {{cssxref("initial")}}-Wert. Das gesamte Objekt wird den Rahmen vollständig ausfüllen. Wenn das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Objekts nicht dem des Rahmens entspricht, wird das Objekt zum Anpassen gestreckt.
- `none`
  - : Der ausgetauschte Inhalt wird nicht skaliert.
- `scale-down`
  - : Der Inhalt wird so dimensioniert, als ob `none` oder `contain` angegeben wären, wobei das kleinere Maß verwendet wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### `object-fit` für ein Bild einstellen

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
- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
