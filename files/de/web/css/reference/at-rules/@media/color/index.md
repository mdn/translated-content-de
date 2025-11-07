---
title: color
slug: Web/CSS/Reference/At-rules/@media/color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`color`** [CSS](/de/docs/Web/CSS) [Medienabfrage](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Farbkomponente (Rot, Grün, Blau) des Ausgabegeräts zu überprüfen.

## Syntax

Das `color`-Feature wird als ein {{cssxref("&lt;integer&gt;")}}-Wert angegeben, der die Anzahl der Bits pro Farbkomponente (Rot, Grün, Blau) des Ausgabegeräts darstellt. Wenn das Gerät kein Farbgerät ist, beträgt der Wert Null. Es handelt sich um ein Bereichs-Feature, was bedeutet, dass Sie auch die präfixierten Varianten **`min-color`** und **`max-color`** verwenden können, um nach minimalen bzw. maximalen Werten zu fragen.

> [!NOTE]
> Wenn die verschiedenen Farbkomponenten durch unterschiedliche Bitzahlen repräsentiert werden, wird die kleinste Zahl verwendet. Zum Beispiel, wenn ein Display 5 Bits für Blau und Rot und 6 Bits für Grün verwendet, wird das Gerät als solches angesehen, das 5 Bits pro Farbkomponente verwendet. Wenn das Gerät indizierte Farben verwendet, wird die minimale Bitanzahl pro Farbkomponente in der Farbpalette verwendet.

Sehen Sie [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/Guides/Colors/Applying_color), um mehr darüber zu erfahren, wie Sie CSS verwenden, um Farbe auf HTML anzuwenden.

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

- Die CSS-Eigenschaft {{cssxref("color")}}
- Die CSS-Dateneinheit {{cssxref("&lt;color&gt;")}}
