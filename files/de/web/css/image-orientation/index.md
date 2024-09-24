---
title: image-orientation
slug: Web/CSS/image-orientation
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{CSSRef}}

Die **`image-orientation`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt eine von der Gestaltung unabhängige Korrektur der Ausrichtung eines Bildes an.

{{EmbedInteractiveExample("pages/css/image-orientation.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
image-orientation: none;
image-orientation: from-image; /* Verwenden Sie EXIF-Daten aus dem Bild */

/* Globale Werte */
image-orientation: inherit;
image-orientation: initial;
image-orientation: revert;
image-orientation: revert-layer;
image-orientation: unset;
```

### Werte

- `none`
  - : Wendet keine zusätzliche Bilddrehung an; das Bild ist so ausgerichtet, wie es kodiert ist oder wie es andere CSS-Eigenschaftswerte vorgeben.
- `from-image`
  - : Standard-Anfangswert. Die im Bild enthaltenen [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen werden verwendet, um das Bild korrekt zu drehen.

> **Warning:** `image-orientation: none;` **überschreibt nicht** die Ausrichtung von Bildern aus nicht sicheren Ursprüngen, die durch ihre [EXIF](https://en.wikipedia.org/wiki/EXIF)-Informationen kodiert sind, aufgrund von Sicherheitsbedenken. Weitere Informationen finden Sie im [Entwurf des CSS-Arbeitsgruppenthemas](https://github.com/w3c/csswg-drafts/issues/5165).

## Beschreibung

Diese Eigenschaft soll _ausschließlich_ verwendet werden, um die Ausrichtung von Bildern zu korrigieren, die mit einer gedrehten Kamera aufgenommen wurden. Sie sollte _nicht_ für beliebige Drehungen verwendet werden. Für alle Zwecke, die nicht mit der Korrektur der Bildausrichtung aufgrund der Aufnahme oder des Scannens zusammenhängen, verwenden Sie eine {{cssxref("transform")}}-Eigenschaft mit dem Schlüsselwort `rotate`, um die Drehung festzulegen. Dies schließt jede benutzergerichtete Änderung der Bildausrichtung ein oder Änderungen, die für den Druck in Hoch- oder Querformat erforderlich sind.

Wenn diese Eigenschaft zusammen mit anderen CSS-Eigenschaften verwendet wird, wie einer {{cssxref("&lt;transform-function&gt;")}}, wird die `image-orientation`-Drehung vor allen anderen Transformationen angewendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ausrichtung des Bildes anhand der Bilddaten

Das folgende Bild wurde um 180 Grad gedreht, und die `image-orientation`-Eigenschaft wird verwendet, um seine Ausrichtung basierend auf den EXIF-Daten im Bild zu korrigieren. Indem Sie die `image-orientation` auf `none` ändern, können Sie die Wirkung der Eigenschaft sehen.

#### CSS

```css
#image {
  image-orientation: from-image; /* Kann in der Live-Beispiel geändert werden */
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
<img id="image" src="oriole.jpg" alt="Ausrichtung aus dem Bild entnommen" />

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
