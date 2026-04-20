---
title: "`resolution` CSS-Medienmerkmal"
short-title: resolution
slug: Web/CSS/Reference/At-rules/@media/resolution
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`resolution`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Pixeldichte des Ausgabegeräts zu testen.

## Syntax

Das `resolution`-Merkmal wird als {{cssxref("resolution")}}-Wert angegeben, der die Pixeldichte des Ausgabegeräts repräsentiert. Es handelt sich um ein Bereichsmerkmal, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-resolution`** und **`max-resolution`** verwenden können, um Mindest- und Höchstwerte abzufragen.

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
