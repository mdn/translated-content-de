---
title: color-index
slug: Web/CSS/Reference/At-rules/@media/color-index
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`color-index`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Anzahl der Einträge in der Farbauswahltabelle des Ausgabegeräts zu testen.

## Syntax

Das `color-index` Merkmal wird als ein {{cssxref("&lt;integer&gt;")}} Wert angegeben, der die Anzahl der Einträge in der Farbauswahltabelle des Ausgabegeräts darstellt. (Dieser Wert ist null, wenn das Gerät eine solche Tabelle nicht verwendet.) Es handelt sich um ein Bereichsmerkmal, was bedeutet, dass Sie auch die präfixierten Varianten **`min-color-index`** und **`max-color-index`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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

Dieses HTML wendet ein spezielles Stylesheet für Geräte an, die mindestens 256 Farben haben.

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
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
