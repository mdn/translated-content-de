---
title: color-index
slug: Web/CSS/Reference/At-rules/@media/color-index
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Die **`color-index`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Anzahl der Einträge in der Farbnachschlagetabelle des Ausgabegeräts zu testen.

## Syntax

Die `color-index`-Funktion wird als ein {{cssxref("&lt;integer&gt;")}} Wert angegeben, der die Anzahl der Einträge in der Farbnachschlagetabelle des Ausgabegeräts darstellt. (Dieser Wert ist null, wenn das Gerät keine solche Tabelle verwendet.) Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die präfixierten Varianten **`min-color-index`** und **`max-color-index`** verwenden können, um nach Mindest- bzw. Höchstwerten zu fragen.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<p>This is a test.</p>
```

#### CSS

```css
p {
  color: black;
}

@media (color-index) {
  p {
    color: red;
  }
}

@media (min-color-index: 15000) {
  p {
    color: #1475ef;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example")}}

### Benutzerdefiniertes Stylesheet

Dieses HTML wird ein spezielles Stylesheet für Geräte anwenden, die mindestens 256 Farben haben.

```html
<link rel="stylesheet" href="https://cdn.example.com/base.css" />
<link
  rel="stylesheet"
  media="(color-index >= 256)"
  href="https://cdn.example.com/color-stylesheet.css" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
