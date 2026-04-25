---
title: "`color` CSS-Media-Feature"
short-title: color
slug: Web/CSS/Reference/At-rules/@media/color
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`color`**- [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Farbkomponente (rot, grün, blau) des Ausgabegeräts zu testen.

## Syntax

Die `color`-Feature wird als ein {{cssxref("&lt;integer&gt;")}} Wert spezifiziert, der die Anzahl der Bits pro Farbkomponente (rot, grün, blau) des Ausgabegeräts darstellt. Wenn das Gerät kein Farbgerät ist, beträgt der Wert null. Es handelt sich um ein Bereichs-Feature, was bedeutet, dass Sie auch die mit **`min-color`** und **`max-color`** vorangestellten Varianten verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

> [!NOTE]
> Wenn die verschiedenen Farbkomponenten durch unterschiedliche Bitanzahlen repräsentiert werden, wird die kleinste Zahl verwendet. Zum Beispiel, wenn ein Display 5 Bits für Blau und Rot und 6 Bits für Grün nutzt, wird das Gerät als ein Gerät angesehen, das 5 Bits pro Farbkomponente verwendet. Wenn das Gerät indizierte Farben verwendet, wird die minimale Anzahl von Bits pro Farbkomponente in der Farbtafel verwendet.

Sehen Sie sich [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color) an, um mehr darüber zu erfahren, wie Sie mit CSS Farbe auf HTML anwenden können.

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

- Die CSS-{{cssxref("color")}}-Eigenschaft
- Die CSS-{{cssxref("&lt;color&gt;")}} Daten-Einheit
