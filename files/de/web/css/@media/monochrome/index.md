---
title: monochrome
slug: Web/CSS/@media/monochrome
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`monochrome`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Pixel im monochromen Frame-Buffer des Ausgabegeräts zu testen.

## Syntax

Das `monochrome`-Feature wird als eine {{cssxref("&lt;integer&gt;")}} angegeben, die die Anzahl der Bits pro Pixel im monochromen Frame-Buffer darstellt. Wenn das Gerät kein monochromes Gerät ist, ist der Wert null. Es handelt sich um ein Bereichs-Feature, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-monochrome`** und **`max-monochrome`** verwenden können, um entsprechend Mindest- und Höchstwerte abzufragen.

## Beispiele

### HTML

```html
<p class="mono">Your device supports monochrome pixels!</p>
<p class="no-mono">Your device doesn't support monochrome pixels.</p>
```

### CSS

```css
p {
  display: none;
}

/* Any monochrome device */
@media (monochrome) {
  p.mono {
    display: block;
    color: #333;
  }
}

/* Any non-monochrome device */
@media (monochrome: 0) {
  p.no-mono {
    display: block;
    color: #ee3636;
  }
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
