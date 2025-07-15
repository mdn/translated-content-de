---
title: color
slug: Web/CSS/@media/color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`color`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Farbkomponente (rot, grün, blau) des Ausgabegeräts zu testen.

## Syntax

Die `color`-Funktion wird als ein {{cssxref("&lt;integer&gt;")}} Wert angegeben, der die Anzahl der Bits pro Farbkomponente (rot, grün, blau) des Ausgabegeräts darstellt. Wenn das Gerät kein Farbgerät ist, ist der Wert null. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die Präfix-Varianten **`min-color`** und **`max-color`** verwenden können, um jeweils nach Mindest- und Höchstwerten zu fragen.

> [!NOTE]
> Wenn die verschiedenen Farbkomponenten durch unterschiedliche Bitszahlen dargestellt werden, wird die kleinste Zahl verwendet. Zum Beispiel, wenn ein Display 5 Bits für blau und rot und 6 Bits für grün verwendet, dann wird angenommen, dass das Gerät 5 Bits pro Farbkomponente verwendet. Wenn das Gerät indizierte Farben verwendet, wird die Mindestanzahl von Bits pro Farbkomponente in der Farbtabelle verwendet.

Siehe [Die Anwendung von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color), um mehr darüber zu erfahren, wie man mit CSS Farbe auf HTML anwendet.

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
