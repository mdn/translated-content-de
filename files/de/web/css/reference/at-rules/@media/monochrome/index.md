---
title: "`monochrome` CSS-Media-Feature"
short-title: monochrome
slug: Web/CSS/Reference/At-rules/@media/monochrome
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`monochrome`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Pixel im monochromen Frame-Puffer des Ausgabegeräts zu testen.

## Syntax

Das `monochrome`-Feature wird als ein {{cssxref("&lt;integer&gt;")}} angegeben, der die Anzahl der Bits pro Pixel im monochromen Frame-Puffer darstellt. Wenn das Gerät kein monochromes Gerät ist, ist der Wert null. Es ist ein Bereichsfeature, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-monochrome`** und **`max-monochrome`** verwenden können, um minimale bzw. maximale Werte abzufragen.

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
    color: #333333;
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
