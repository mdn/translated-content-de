---
title: image-orientation
slug: Web/CSS/image-orientation
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`image-orientation`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt eine layout-unabhängige Korrektur für die Orientierung eines Bildes an.

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
  - : Wendet keine zusätzliche Bildrotation an; das Bild wird wie kodiert oder durch andere CSS-Eigenschaftswerte bestimmt ausgerichtet.
- `from-image`
  - : Standard-Ausgangswert. Die im Bild enthaltenen [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen werden verwendet, um das Bild angemessen zu drehen.

> **Warning:** `image-orientation: none;` **überschreibt nicht** die von der EXIF-Information kodierte Orientierung von Bildern nicht-sicherer Herkunft, aufgrund von Sicherheitsbedenken. Erfahren Sie mehr vom [CSS-Arbeitsgruppen-Entwurfsprotokoll](https://github.com/w3c/csswg-drafts/issues/5165).

## Beschreibung

Diese Eigenschaft soll _nur_ dazu verwendet werden, um die Orientierung von Bildern zu korrigieren, die mit gedrehter Kamera aufgenommen wurden. Sie sollte _nicht_ für willkürliche Drehungen verwendet werden. Für Zwecke jenseits der Korrektur der Bildorientierung aufgrund der Aufnahme oder des Scannens verwenden Sie eine {{cssxref("transform")}}-Eigenschaft mit dem `rotate`-Schlüsselwort, um die Drehung anzugeben. Dies schließt benutzergesteuerte Änderungen der Bildorientierung oder Änderungen ein, die für den Druck im Hoch- oder Querformat erforderlich sind.

Wenn sie in Verbindung mit anderen CSS-Eigenschaften wie einer {{cssxref("&lt;transform-function&gt;")}} verwendet wird, wird die `image-orientation`-Drehung vor allen anderen Transformationen angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Orientierung des Bildes anhand der Bilddaten

Das folgende Bild wurde um 180 Grad gedreht, und die `image-orientation`-Eigenschaft wird verwendet, um seine Ausrichtung basierend auf den EXIF-Daten im Bild zu korrigieren. Durch Änderung des `image-orientation`-Werts auf `none` können Sie die Wirkung der Eigenschaft sehen.

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

- Weitere bildbezogene CSS-Eigenschaften: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("transform")}} und {{cssxref("rotate")}}
