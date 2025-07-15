---
title: color-index
slug: Web/CSS/@media/color-index
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`color-index`** [CSS](/de/docs/Web/CSS) [Media-Funktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Einträge in der Farbumschlagtabelle des Ausgabegeräts zu testen.

## Syntax

Die `color-index`-Funktion wird als ein {{cssxref("&lt;integer&gt;")}} Wert angegeben, der die Anzahl der Einträge in der Farbumschlagtabelle des Ausgabegeräts darstellt. (Dieser Wert ist null, wenn das Gerät eine solche Tabelle nicht verwendet.) Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die mit einem Präfix versehenen Varianten **`min-color-index`** und **`max-color-index`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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

Dieses HTML wird für Geräte mit mindestens 256 Farben ein spezielles Stylesheet anwenden.

```html
<link rel="stylesheet" href="http://foo.bar.com/base.css" />
<link
  rel="stylesheet"
  media="(color-index >= 256)"
  href="http://foo.bar.com/color-stylesheet.css" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
