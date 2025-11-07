---
title: color-index
slug: Web/CSS/Reference/At-rules/@media/color-index
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`color-index`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Anzahl der Einträge in der Farbsuch-Lookup-Tabelle des Ausgabegeräts zu testen.

## Syntax

Die `color-index`-Eigenschaft wird als ein {{cssxref("&lt;integer&gt;")}} Wert angegeben, der die Anzahl der Einträge in der Farbsuch-Lookup-Tabelle des Ausgabegeräts repräsentiert. (Dieser Wert ist null, wenn das Gerät eine solche Tabelle nicht verwendet.) Es handelt sich um ein Bereichs-Feature, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-color-index`** und **`max-color-index`** verwenden können, um Mindest- und Höchstwerte abzufragen.

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
  media="(color-index >= 256)"
  href="http://foo.bar.com/color-stylesheet.css" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
