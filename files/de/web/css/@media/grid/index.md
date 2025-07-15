---
title: grid
slug: Web/CSS/@media/grid
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`grid`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob das Ausgabegerät einen rasterbasierten Bildschirm verwendet.

Die meisten modernen Computer und Smartphones haben bitmapbasierte Bildschirme. Beispiele für rasterbasierte Geräte sind Text-Terminals und einfache Telefone mit nur einer festen Schriftart.

## Syntax

Das `grid`-Merkmal wird als ein {{cssxref("CSS_media_queries/Using_media_queries", "&lt;mq-boolean&gt;")}} Wert (`0` oder `1`) angegeben, der angibt, ob das Ausgabegerät rasterbasiert ist oder nicht.

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
