---
title: color
slug: Web/CSS/@media/color
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`color`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Farbkomponente (rot, grün, blau) des Ausgabegeräts zu testen.

## Syntax

Die `color`-Eigenschaft wird als ein {{cssxref("&lt;integer&gt;")}}-Wert angegeben, der die Anzahl der Bits pro Farbkomponente (rot, grün, blau) des Ausgabegeräts repräsentiert. Wenn das Gerät kein Farbgerät ist, ist der Wert null. Es handelt sich um eine Bereichseigenschaft, was bedeutet, dass Sie auch die vorangestellten **`min-color`** und **`max-color`** Varianten verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

> [!NOTE]
> Wenn die verschiedenen Farbkomponenten durch unterschiedliche Bitanzahlen dargestellt werden, wird die kleinste Zahl verwendet. Zum Beispiel, wenn ein Display 5 Bits für Blau und Rot und 6 Bits für Grün verwendet, wird angenommen, dass das Gerät 5 Bits pro Farbkomponente verwendet. Wenn das Gerät indizierte Farben verwendet, wird die minimale Anzahl von Bits pro Farbkomponente in der Farbpalette verwendet.

Siehe [Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), um mehr darüber zu erfahren, wie Sie CSS verwenden, um Farbe auf HTML anzuwenden.

## Beispiele

### HTML

```html
<p>
  This text should be black on non-color devices, red on devices with a low
  number of colors, and greenish on devices with a high number of colors.
</p>
```

### CSS

```css
p {
  color: black;
}

/* Any color device */
@media (color) {
  p {
    color: red;
  }
}

/* Any color device with at least 8 bits per color component */
@media (min-color: 8) {
  p {
    color: #24ba13;
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

- Die CSS {{cssxref("color")}} Eigenschaft
- Die CSS {{cssxref("&lt;color&gt;")}} Dateneinheit
