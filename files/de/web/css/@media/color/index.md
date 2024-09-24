---
title: Farbe
slug: Web/CSS/@media/color
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Das **`color`** [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Bits pro Farbkomponente (Rot, Grün, Blau) des Ausgabegeräts zu testen.

## Syntax

Das `color`-Feature wird als ein {{cssxref("&lt;integer&gt;")}} Wert angegeben, der die Anzahl der Bits pro Farbkomponente (Rot, Grün, Blau) des Ausgabegeräts darstellt. Wenn das Gerät kein Farbgerät ist, beträgt der Wert null. Es handelt sich um ein Bereichsfeature, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-color`** und **`max-color`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

> [!NOTE]
> Wenn die verschiedenen Farbkomponenten durch unterschiedliche Bitanzahlen dargestellt werden, wird die kleinste Anzahl verwendet. Zum Beispiel, wenn ein Display 5 Bits für Blau und Rot und 6 Bits für Grün verwendet, wird das Gerät als eines betrachtet, das 5 Bits pro Farbkomponente verwendet. Wenn das Gerät indizierte Farben verwendet, wird die Mindestanzahl an Bits pro Farbkomponente in der Farbpalette verwendet.

Weitere Informationen zur Verwendung von CSS zur Anwendung von Farbe auf HTML finden Sie unter [Anwenden von Farbe auf HTML-Elemente mit CSS](/de/docs/Web/CSS/CSS_colors/Applying_color).

## Beispiele

### HTML

```html
<p>
  Dieser Text sollte auf nichtfarbigen Geräten schwarz sein, auf Geräten mit einer
  geringen Anzahl von Farben rot und auf Geräten mit einer hohen Anzahl von Farben grünlich.
</p>
```

### CSS

```css
p {
  color: black;
}

/* Jedes Farbgerät */
@media (color) {
  p {
    color: red;
  }
}

/* Jedes Farbgerät mit mindestens 8 Bits pro Farbkomponente */
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
- Die CSS-{{cssxref("&lt;color&gt;")}}-Dateneinheit
