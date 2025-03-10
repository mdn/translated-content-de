---
title: image-orientation
slug: Web/CSS/image-orientation
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`image-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine layout-unabhängige Korrektur der Ausrichtung eines Bildes fest.

{{InteractiveExample("CSS Demo: image-orientation")}}

```css interactive-example-choice
image-orientation: none;
```

```css interactive-example-choice
image-orientation: from-image;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/hummingbird.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: inherit;
}
```

## Syntax

```css
/* keyword values */
image-orientation: none;
image-orientation: from-image; /* Use EXIF data from the image */

/* Global values */
image-orientation: inherit;
image-orientation: initial;
image-orientation: revert;
image-orientation: revert-layer;
image-orientation: unset;
```

### Werte

- `none`
  - : Wendet keine zusätzliche Bilddrehung an; das Bild ist so ausgerichtet, wie es kodiert ist oder wie es durch andere CSS-Eigenschaften angegeben wird.
- `from-image`
  - : Standard-Startwert. Die im Bild enthaltenen [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen werden verwendet, um das Bild korrekt zu drehen.

> **Warning:** `image-orientation: none;` **überschreibt nicht** die Ausrichtung von Bildern aus unsicheren Ursprüngen, wie sie durch ihre [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen kodiert sind, aus Sicherheitsgründen. Weitere Informationen finden Sie im [Entwurf des CSS-Arbeitsteams](https://github.com/w3c/csswg-drafts/issues/5165).

## Beschreibung

Diese Eigenschaft sollte _nur_ verwendet werden, um die Ausrichtung von Bildern zu korrigieren, die mit gedrehter Kamera aufgenommen wurden. Sie sollte _nicht_ für beliebige Drehungen verwendet werden. Für alle anderen Zwecke als die Korrektur der Bildausrichtung aufgrund der Art und Weise, wie es aufgenommen oder gescannt wurde, verwenden Sie eine {{cssxref("transform")}}-Eigenschaft mit dem Schlüsselwort `rotate`, um die Drehung anzugeben. Dies schließt alle vom Benutzer geleiteten Änderungen der Bildausrichtung ein oder Änderungen, die für das Drucken im Hoch- oder Querformat erforderlich sind.

Wenn sie in Verbindung mit anderen CSS-Eigenschaften verwendet wird, wie z. B. einer {{cssxref("&lt;transform-function&gt;")}}, wird jede `image-orientation`-Drehung vor allen anderen Transformationen angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ausrichtung des Bildes aus Bilddaten

Das folgende Bild wurde um 180 Grad gedreht und die `image-orientation`-Eigenschaft wird verwendet, um seine Ausrichtung basierend auf den im Bild enthaltenen EXIF-Daten zu korrigieren. Indem Sie die `image-orientation` auf `none` ändern, können Sie die Wirkung der Eigenschaft sehen.

#### CSS

```css
#image {
  image-orientation: from-image; /* Can be changed in the live sample */
}
```

```css hidden
img {
  margin: 0.5rem 0;
}

label {
  font-family: monospace;
}
```

```html hidden
<img id="image" src="oriole.jpg" alt="Orientation taken from the image" />

<div>
  <input
    type="radio"
    id="from-image"
    name="orientation"
    value="from-image"
    checked />
  <label for="from-image">from-image</label>
</div>

<div>
  <input type="radio" id="none" name="orientation" value="none" />
  <label for="none">none</label>
</div>
```

```js hidden
document.addEventListener("change", (evt) => {
  document.getElementById("image").style.imageOrientation = evt.target.value;
});
```

#### Ergebnis

{{EmbedLiveSample("Orienting_image_from_image_data", "100%", 900)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("transform")}} und {{cssxref("rotate")}}
