---
title: Auflösung
slug: Web/CSS/@media/resolution
l10n:
  sourceCommit: a18eaa8478fb9da1de8052cb2a18b00be00cdca0
---

{{CSSRef}}

Die **`resolution`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Pixeldichte des Ausgabegeräts zu testen.

## Syntax

Die `resolution`-Funktion wird als ein {{cssxref("&lt;resolution&gt;")}} Wert angegeben, der die Pixeldichte des Ausgabegeräts repräsentiert. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-resolution`** und **`max-resolution`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

## Beispiele

### HTML

```html
<p>This is a test of your device's pixel density.</p>
```

### CSS

```css
/* Exakte Auflösung mit der Einheit `dpi` */
@media (resolution: 150dpi) {
  p {
    color: red;
  }
}

/* Mindestauflösung synonyme Einheiten: `dppx` und `x` */
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

/* Maximale Auflösung mit der Einheit `dpcm` */
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

- {{domxref("window.devicePixelRatio")}}
- Die {{cssxref("image-resolution")}} Eigenschaft
