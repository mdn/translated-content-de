---
title: resolution
slug: Web/CSS/@media/resolution
l10n:
  sourceCommit: a18eaa8478fb9da1de8052cb2a18b00be00cdca0
---

{{CSSRef}}

Die **`resolution`**- [CSS](/de/docs/Web/CSS) [Medienabfrage](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Pixeldichte des Ausgabegeräts zu testen.

## Syntax

Das `resolution`-Merkmal wird als ein {{cssxref("&lt;resolution&gt;")}}-Wert angegeben, der die Pixeldichte des Ausgabegeräts darstellt. Es handelt sich um ein Bereichs-Merkmal, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-resolution`** und **`max-resolution`** verwenden können, um jeweils Mindest- und Höchstwerte abzufragen.

## Beispiele

### HTML

```html
<p>This is a test of your device's pixel density.</p>
```

### CSS

```css
/* Exact resolution with unit `dpi` */
@media (resolution: 150dpi) {
  p {
    color: red;
  }
}

/* Minimum resolution synonym units: `dppx` and `x` */
@media (min-resolution: 2dppx) {
  p {
    text-decoration: underline;
  }
}

@media (min-resolution: 2x) {
  p {
    text-decoration: underline;
  }
}

/* Maximum resolution with unit `dpcm` */
@media (max-resolution: 2dpcm) {
  p {
    background: yellow;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio)
- Die {{cssxref("image-resolution")}}-Eigenschaft
