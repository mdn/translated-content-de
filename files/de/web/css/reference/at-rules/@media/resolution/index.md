---
title: resolution
slug: Web/CSS/Reference/At-rules/@media/resolution
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`resolution`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Pixeldichte des Ausgabegeräts zu testen.

## Syntax

Die `resolution`-Funktion wird als ein {{cssxref("resolution")}}-Wert angegeben, der die Pixeldichte des Ausgabegeräts darstellt. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-resolution`** und **`max-resolution`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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
- Die {{cssxref("image-resolution")}} Eigenschaft
