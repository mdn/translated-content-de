---
title: image-orientation
slug: Web/CSS/Reference/Properties/image-orientation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`image-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine layoutunabhängige Korrektur der Ausrichtung eines Bildes fest.

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
  - : Es wird keine zusätzliche Bildrotation angewendet; das Bild wird in der kodierten Ausrichtung oder gemäß anderer CSS-Eigenschaften angezeigt.
- `from-image`
  - : Standardanfangswert. Die im Bild enthaltenen [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen werden verwendet, um das Bild entsprechend zu drehen.

> [!WARNING]
> `image-orientation: none;` **überschreibt nicht** die Ausrichtung von Bildern aus unsicheren Ursprüngen, die durch ihre [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen kodiert sind, aufgrund von Sicherheitsbedenken. Erfahren Sie mehr im [Entwurfsthema der CSS-Arbeitsgruppe](https://github.com/w3c/csswg-drafts/issues/5165).

## Beschreibung

Diese Eigenschaft ist _ausschließlich_ dazu gedacht, die Ausrichtung von Bildern zu korrigieren, die mit einer gedrehten Kamera aufgenommen wurden. Sie sollte _nicht_ für willkürliche Rotationen verwendet werden. Für jeden anderen Zweck als die Korrektur der Ausrichtung eines Bildes aufgrund der Art und Weise, wie es aufgenommen oder gescannt wurde, verwenden Sie eine {{cssxref("transform")}}-Eigenschaft mit dem `rotate`-Schlüsselwort, um die Rotation festzulegen. Dies schließt benutzergesteuerte Änderungen der Ausrichtung des Bildes oder Änderungen, die für den Druck im Hoch- oder Querformat erforderlich sind, ein.

Wenn diese Eigenschaft in Verbindung mit anderen CSS-Eigenschaften verwendet wird, wie z.B. einer {{cssxref("&lt;transform-function&gt;")}}, wird die Rotation durch `image-orientation` vor allen anderen Transformationen angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ausrichtung des Bildes basierend auf Bilddaten

Das folgende Bild wurde um 180 Grad gedreht, und die `image-orientation`-Eigenschaft wird verwendet, um seine Ausrichtung basierend auf den EXIF-Daten im Bild zu korrigieren. Indem Sie `image-orientation` auf `none` ändern, können Sie die Wirkung der Eigenschaft sehen.

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
