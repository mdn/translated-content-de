---
title: color-index
slug: Web/CSS/@media/color-index
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

Die **`color-index`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Anzahl der Einträge in der Farbsucheintragstabelle des Ausgabegeräts zu testen.

## Syntax

Die `color-index`-Funktion wird als ein {{cssxref("&lt;integer&gt;")}} Wert angegeben, der die Anzahl der Einträge in der Farbsucheintragstabelle des Ausgabegeräts darstellt. (Dieser Wert ist null, wenn das Gerät eine solche Tabelle nicht verwendet.) Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die Präfixvarianten **`min-color-index`** und **`max-color-index`** verwenden können, um Mindest- und Höchstwerte abzufragen.

## Beispiele

### Basisbeispiel

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

Dieses HTML wendet ein spezielles Stylesheet für Geräte an, die mindestens 256 Farben haben.

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
