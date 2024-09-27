---
title: color
slug: Web/CSS/@media/color
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`color`** [CSS](/de/docs/Web/CSS) [Medienabfrage](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Farbkomponente (Rot, Grün, Blau) des Ausgabegeräts zu testen.

## Syntax

Die `color`-Eigenschaft wird als ein {{cssxref("&lt;integer&gt;")}}-Wert angegeben, der die Anzahl der Bits pro Farbkomponente (Rot, Grün, Blau) des Ausgabegeräts darstellt. Wenn das Gerät kein Farbgerät ist, beträgt der Wert null. Es handelt sich um eine Bereichseigenschaft, was bedeutet, dass Sie auch die präfixierten Varianten **`min-color`** und **`max-color`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

> [!NOTE]
> Wenn die verschiedenen Farbkomponenten durch unterschiedliche Anzahlen von Bits dargestellt werden, wird die kleinste Anzahl verwendet. Wenn ein Display beispielsweise 5 Bits für Blau und Rot und 6 Bits für Grün verwendet, gilt das Gerät als ein Gerät mit 5 Bits pro Farbkomponente. Wenn das Gerät indizierte Farben verwendet, wird die minimale Anzahl von Bits pro Farbkomponente in der Farbpalette verwendet.

Siehe [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color), um mehr darüber zu erfahren, wie Sie CSS verwenden, um Farbe auf HTML anzuwenden.

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
