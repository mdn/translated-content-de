---
title: monochrom
slug: Web/CSS/@media/monochrome
l10n:
  sourceCommit: 0fd3414a0e35e6e30a2cd34977de607a23000bef
---

{{CSSRef}}

Das **`monochrome`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Pixel im monochromen Frame-Buffer des Ausgabegeräts zu testen.

## Syntax

Das `monochrome`-Merkmal wird als ein {{cssxref("&lt;integer&gt;")}} angegeben, das die Anzahl der Bits pro Pixel im monochromen Frame-Buffer darstellt. Wenn das Gerät kein monochromes Gerät ist, beträgt der Wert null. Es handelt sich um ein Bereichsmerkmal, was bedeutet, dass Sie auch die Varianten **`min-monochrome`** und **`max-monochrome`** verwenden können, um minimale und maximale Werte abzufragen.

## Beispiele

### HTML

```html
<p class="mono">Ihr Gerät unterstützt monochrome Pixel!</p>
<p class="no-mono">Ihr Gerät unterstützt keine monochromen Pixel.</p>
```

### CSS

```css
p {
  display: none;
}

/* Jedes monochrome Gerät */
@media (monochrome) {
  p.mono {
    display: block;
    color: #333;
  }
}

/* Jedes nicht-monochrome Gerät */
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
