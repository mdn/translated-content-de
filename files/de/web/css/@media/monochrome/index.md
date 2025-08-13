---
title: monochrome
slug: Web/CSS/@media/monochrome
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`monochrome`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Pixel im monochromen Rahmenpuffer des Ausgabegeräts zu testen.

## Syntax

Die `monochrome`-Funktion wird als ein {{cssxref("&lt;integer&gt;")}} angegeben, der die Anzahl der Bits pro Pixel im monochromen Rahmenpuffer repräsentiert. Wenn das Gerät kein monochromes Gerät ist, beträgt der Wert Null. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-monochrome`** und **`max-monochrome`** verwenden können, um minimale bzw. maximale Werte abzufragen.

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
