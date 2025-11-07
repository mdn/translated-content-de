---
title: grid
slug: Web/CSS/Reference/At-rules/@media/grid
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`grid`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob das Ausgabegerät einen rasterbasierten Bildschirm verwendet.

Die meisten modernen Computer und Smartphones haben bitmap-basierte Bildschirme. Beispiele für rasterbasierte Geräte sind textbasierte Terminals und einfache Telefone mit nur einem festen Schriftfont.

## Syntax

Das `grid`-Feature wird als ein {{cssxref("CSS_media_queries/Using_media_queries", "&lt;mq-boolean&gt;")}} Wert (`0` oder `1`) angegeben, der angibt, ob das Ausgabegerät rasterbasiert ist oder nicht.

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
