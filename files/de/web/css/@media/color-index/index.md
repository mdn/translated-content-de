---
title: color-index
slug: Web/CSS/@media/color-index
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Das **`color-index`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Einträge in der Farbnachschlagetabelle des Ausgabegeräts zu testen.

## Syntax

Das `color-index`-Feature wird als ein {{cssxref("&lt;integer&gt;")}} Wert angegeben, der die Anzahl der Einträge in der Farbnachschlagetabelle des Ausgabegeräts darstellt. (Dieser Wert ist null, wenn das Gerät keine solche Tabelle verwendet.) Es handelt sich um ein Bereichs-Feature, was bedeutet, dass Sie auch die Varianten **`min-color-index`** und **`max-color-index`** verwenden können, um minimale bzw. maximale Werte abzufragen.

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
<link rel="stylesheet" href="http://foo.bar.com/base.css" />
<link
  rel="stylesheet"
  media="all and (min-color-index: 256)"
  href="http://foo.bar.com/color-stylesheet.css" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
