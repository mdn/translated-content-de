---
title: monochrome
slug: Web/CSS/@media/monochrome
l10n:
  sourceCommit: 0fd3414a0e35e6e30a2cd34977de607a23000bef
---

{{CSSRef}}

Das **`monochrome`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts zu testen.

## Syntax

Das `monochrome`-Feature wird als {{cssxref("&lt;integer&gt;")}} spezifiziert, das die Anzahl der Bits pro Pixel im monochromen Framebuffer darstellt. Wenn das Gerät kein monochromes Gerät ist, beträgt der Wert Null. Es ist ein Bereichs-Feature, was bedeutet, dass Sie auch die präfixierten Varianten **`min-monochrome`** und **`max-monochrome`** verwenden können, um minimale und maximale Werte abzufragen.

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
