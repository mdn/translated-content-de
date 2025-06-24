---
title: image-orientation
slug: Web/CSS/image-orientation
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`image-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt eine layout-unabhängige Korrektur der Ausrichtung eines Bildes an.

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
  - : Wendet keine zusätzliche Bilddrehung an; das Bild wird so orientiert, wie es kodiert ist oder wie es andere CSS-Eigenschaften vorgeben.
- `from-image`
  - : Standard-Initialwert. Die im Bild enthaltenen [EXIF](https://en.wikipedia.org/wiki/EXIF) Informationen werden verwendet, um das Bild entsprechend zu drehen.

> [!WARNING] > `image-orientation: none;` **überschreibt nicht** die Ausrichtung von Bildern aus unsicheren Ursprüngen, wie sie durch ihre [EXIF](https://en.wikipedia.org/wiki/EXIF) Informationen kodiert sind, aufgrund von Sicherheitsbedenken. Erfahren Sie mehr im [Entwurf des CSS-Arbeitsgruppendokuments](https://github.com/w3c/csswg-drafts/issues/5165).

## Beschreibung

Diese Eigenschaft ist _nur_ dazu gedacht, die Ausrichtung von Bildern zu korrigieren, die mit gedrehter Kamera aufgenommen wurden. Sie sollte _nicht_ für beliebige Drehungen verwendet werden. Für jeden anderen Zweck, außer der Korrektur der Bildausrichtung aufgrund der Aufnahme oder des Scannens, verwenden Sie eine {{cssxref("transform")}} Eigenschaft mit dem `rotate` Schlüsselwort, um die Drehung anzugeben. Dies schließt alle vom Nutzer veranlassten Änderungen an der Bildausrichtung ein, oder Änderungen, die für den Druck im Hoch- versus Querformat erforderlich sind.

Wenn diese Eigenschaft zusammen mit anderen CSS-Eigenschaften, wie zum Beispiel einer {{cssxref("&lt;transform-function&gt;")}}, verwendet wird, wird die `image-orientation` Drehung vor allen anderen Transformationen angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bildorientierung basierend auf Bilddaten

Das folgende Bild wurde um 180 Grad gedreht, und die `image-orientation` Eigenschaft wird verwendet, um seine Orientierung basierend auf den EXIF-Daten im Bild zu korrigieren. Durch Ändern der `image-orientation` zu `none` können Sie die Wirkung der Eigenschaft erkennen.

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
