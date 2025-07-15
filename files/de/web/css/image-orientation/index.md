---
title: image-orientation
slug: Web/CSS/image-orientation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`image-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine layout-unabhängige Korrektur der Orientierung eines Bildes fest.

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
  - : Wendet keine zusätzliche Bildrotation an; das Bild wird so orientiert, wie es kodiert ist oder wie es andere CSS-Eigenschaften vorgeben.
- `from-image`
  - : Standard-Ausgangswert. Die im Bild enthaltenen [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen werden verwendet, um das Bild entsprechend zu rotieren.

> [!WARNING]
> `image-orientation: none;` **überschreibt nicht** die Orientierung von Bildern, die nicht von einer sicheren Herkunft stammen, wie sie durch ihre [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen kodiert sind, aufgrund von Sicherheitsbedenken. Mehr dazu finden Sie im [Entwurfsproblem der CSS-Arbeitsgruppe](https://github.com/w3c/csswg-drafts/issues/5165).

## Beschreibung

Diese Eigenschaft soll _ausschließlich_ zur Korrektur der Orientierung von Bildern verwendet werden, die mit gedrehter Kamera aufgenommen wurden. Sie sollte _nicht_ für willkürliche Drehungen verwendet werden. Für jegliche andere Zwecke als die Korrektur der Bildorientierung aufgrund der Art und Weise, wie es aufgenommen oder gescannt wurde, verwenden Sie eine {{cssxref("transform")}} Eigenschaft mit dem `rotate`-Schlüsselwort, um die Drehung anzugeben. Dies schließt alle benutzergesteuerten Änderungen an der Orientierung des Bildes ein oder Änderungen, die für den Druck im Hoch- oder Querformat erforderlich sind.

Wenn sie in Verbindung mit anderen CSS-Eigenschaften wie einer {{cssxref("&lt;transform-function&gt;")}} verwendet wird, wird jede `image-orientation` Rotation vor allen anderen Transformationen angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Orientierung des Bildes anhand von Bilddaten

Das folgende Bild wurde um 180 Grad gedreht, und die `image-orientation` Eigenschaft wird verwendet, um seine Orientierung basierend auf den EXIF-Daten im Bild zu korrigieren. Indem Sie die `image-orientation` auf `none` ändern, können Sie die Wirkung der Eigenschaft sehen.

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
