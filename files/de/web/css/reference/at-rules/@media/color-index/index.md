---
title: "`color-index` CSS Media-Feature"
short-title: color-index
slug: Web/CSS/Reference/At-rules/@media/color-index
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`color-index`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Anzahl der Einträge in der Farbabruftabelle des Ausgabegeräts zu testen.

## Syntax

Das `color-index` Feature wird als ein {{cssxref("&lt;integer&gt;")}} Wert spezifiziert, der die Anzahl der Einträge in der Farbabruftabelle des Ausgabegeräts repräsentiert. (Dieser Wert ist null, wenn das Gerät keine solche Tabelle verwendet.) Es ist ein Bereichs-Feature, was bedeutet, dass Sie auch die Varianten **`min-color-index`** und **`max-color-index`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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
