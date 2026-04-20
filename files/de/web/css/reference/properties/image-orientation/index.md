---
title: "`image-orientation` CSS property"
short-title: image-orientation
slug: Web/CSS/Reference/Properties/image-orientation
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`image-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine layoutunabhängige Korrektur der Ausrichtung eines Bildes.

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
  - : Wendet keine zusätzliche Bilddrehung an; das Bild wird so ausgerichtet, wie es kodiert ist oder wie es andere CSS-Eigenschaftswerte vorgeben.
- `from-image`
  - : Standardanfangswert. Die im Bild enthaltenen [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen werden verwendet, um das Bild entsprechend zu drehen.

> [!WARNING]
> `image-orientation: none;` **überschreibt nicht** die Ausrichtung von Bildern ohne sichere Herkunft, wie sie von ihren [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen kodiert ist, aus Sicherheitsgründen. Erfahren Sie mehr im [Entwurfsthema der CSS-Arbeitsgruppe](https://github.com/w3c/csswg-drafts/issues/5165).

## Beschreibung

Diese Eigenschaft ist _ausschließlich_ dazu gedacht, die Ausrichtung von Bildern zu korrigieren, die mit gedrehter Kamera aufgenommen wurden. Sie sollte _nicht_ für willkürliche Drehungen verwendet werden. Für alle anderen Zwecke als die Korrektur der Ausrichtung eines Bildes aufgrund der Art und Weise, wie es aufgenommen oder gescannt wurde, verwenden Sie die {{cssxref("transform")}}-Eigenschaft mit dem Schlüsselwort `rotate`, um die Drehung zu spezifizieren. Dies schließt alle benutzergesteuerten Änderungen der Ausrichtung des Bildes ein oder Änderungen, die für den Druck im Hoch- versus Querformat erforderlich sind.

Wenn diese Eigenschaft in Verbindung mit anderen CSS-Eigenschaften wie einer {{cssxref("&lt;transform-function&gt;")}} verwendet wird, wird die `image-orientation`-Drehung vor allen anderen Transformationen angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Orientierung des Bildes basierend auf Bilddaten

Das folgende Bild wurde um 180 Grad gedreht, und die `image-orientation`-Eigenschaft wird verwendet, um ihre Ausrichtung basierend auf den EXIF-Daten im Bild zu korrigieren. Durch Ändern der `image-orientation`-Anzeige auf `none` können Sie die Wirkung der Eigenschaft sehen.

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
