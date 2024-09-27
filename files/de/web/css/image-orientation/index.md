---
title: image-orientation
slug: Web/CSS/image-orientation
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`image-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt eine layoutunabhängige Korrektur der Orientierung eines Bildes an.

{{EmbedInteractiveExample("pages/css/image-orientation.html")}}

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
  - : Es erfolgt keine zusätzliche Bildrotation; das Bild wird so orientiert, wie es codiert ist oder wie es andere CSS-Eigenschaftswerte vorgeben.
- `from-image`
  - : Standard-Ausgangswert. Die im Bild enthaltenen [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen werden verwendet, um das Bild entsprechend zu drehen.

> **Warning:** `image-orientation: none;` **überschreibt nicht** die Orientierung von Bildern aus unsicheren Ursprüngen, wie sie durch ihre [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen codiert sind, aus Sicherheitsgründen. Erfahren Sie mehr vom [Entwurfsthema der CSS-Arbeitsgruppe](https://github.com/w3c/csswg-drafts/issues/5165).

## Beschreibung

Diese Eigenschaft soll _nur_ zur Korrektur der Orientierung von Bildern verwendet werden, die mit gedrehter Kamera aufgenommen wurden. Sie sollte _nicht_ für beliebige Rotationen verwendet werden. Für andere Zwecke als die Korrektur der Bildorientierung aufgrund der Aufnahme oder des Scans sollte eine {{cssxref("transform")}}-Eigenschaft mit dem `rotate`-Schlüsselwort verwendet werden, um die Rotation anzugeben. Dies schließt alle benutzergesteuerten Änderungen an der Bildorientierung ein oder bei Erfordernissen für Drucke im Hoch- oder Querformat.

Falls diese Eigenschaft zusammen mit anderen CSS-Eigenschaften wie einer {{cssxref("&lt;transform-function&gt;")}} verwendet wird, wird jede `image-orientation`-Rotation vor anderen Transformationen angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Orientierung von Bildern anhand der Bilddaten

Das folgende Bild wurde um 180 Grad gedreht, und die `image-orientation`-Eigenschaft wird verwendet, um seine Orientierung basierend auf den EXIF-Daten im Bild zu korrigieren. Durch Ändern des `image-orientation`-Wertes auf `none` können Sie den Effekt der Eigenschaft sehen.

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
