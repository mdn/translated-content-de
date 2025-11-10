---
title: monochrome
slug: Web/CSS/Reference/At-rules/@media/monochrome
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`monochrome`** [CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts zu testen.

## Syntax

Das `monochrome`-Merkmal wird als ein {{cssxref("&lt;integer&gt;")}} angegeben, der die Anzahl der Bits pro Pixel im monochromen Framebuffer darstellt. Wenn das Gerät kein monochromes Gerät ist, beträgt der Wert null. Es ist ein Bereichsmerkmal, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-monochrome`** und **`max-monochrome`** verwenden können, um minimale und maximale Werte abzufragen.

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
