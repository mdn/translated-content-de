---
title: color
slug: Web/CSS/Reference/At-rules/@media/color
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`color`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Farbkomponente (Rot, Grün, Blau) des Ausgabegeräts zu prüfen.

## Syntax

Das `color`-Merkmal wird als ein {{cssxref("&lt;integer&gt;")}}-Wert angegeben, der die Anzahl der Bits pro Farbkomponente (Rot, Grün, Blau) des Ausgabegeräts darstellt. Wenn das Gerät kein Farbgerät ist, beträgt der Wert null. Es handelt sich um ein Bereichsmerkmal, was bedeutet, dass Sie auch die präfixierten Varianten **`min-color`** und **`max-color`** verwenden können, um jeweils minimale und maximale Werte abzufragen.

> [!NOTE]
> Wenn die verschiedenen Farbkomponenten durch unterschiedliche Anzahlen von Bits dargestellt werden, wird die kleinste Zahl verwendet. Beispielsweise, wenn ein Display 5 Bits für Blau und Rot und 6 Bits für Grün verwendet, dann wird das Gerät als eines betrachtet, das 5 Bits pro Farbkomponente verwendet. Wenn das Gerät indizierte Farben verwendet, wird die minimale Anzahl von Bits pro Farbkomponente in der Farbtabelle verwendet.

Siehe [Farbe auf HTML-Elemente mit CSS anwenden](/de/docs/Web/CSS/CSS_colors/Applying_color), um mehr darüber zu erfahren, wie CSS verwendet wird, um HTML Farbe zu verleihen.

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
