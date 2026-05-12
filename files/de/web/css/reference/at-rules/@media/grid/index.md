---
title: "`grid` CSS-Media-Feature"
short-title: grid
slug: Web/CSS/Reference/At-rules/@media/grid
l10n:
  sourceCommit: ddf85bfec1b6e43cdacb404de0c38a801c561640
---

Die **`grid`** [CSS](/de/docs/Web/CSS) [Medienabfrage-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob das Ausgabegerät einen gitterbasierten Bildschirm verwendet.

Die meisten modernen Computer und Smartphones haben bitmapbasierte Bildschirme. Beispiele für gitterbasierte Geräte sind Textterminals und einfache Telefone mit nur einer festen Schriftart.

## Syntax

Das `grid`-Feature wird als Wert angegeben, der darstellt, ob das Ausgabegerät gitterbasiert ist — `1`, wenn es der Fall ist, und `0`, wenn nicht.

## Beispiele

### HTML

```html
<p class="unknown">I don't know if you're using a grid device. :-(</p>
<p class="bitmap">You are using a bitmap device.</p>
<p class="grid">You are using a grid device! Neato!</p>
```

### CSS

```css
:not(.unknown) {
  color: lightgray;
}

@media (grid: 0) {
  .unknown {
    color: lightgray;
  }

  .bitmap {
    color: red;
    text-transform: uppercase;
  }
}

@media (grid: 1) {
  .unknown {
    color: lightgray;
  }

  .grid {
    color: black;
    text-transform: uppercase;
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

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
