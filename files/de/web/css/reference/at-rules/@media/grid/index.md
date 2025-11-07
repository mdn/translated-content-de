---
title: grid
slug: Web/CSS/Reference/At-rules/@media/grid
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`grid`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob das Ausgabegerät einen rasterbasierten Bildschirm verwendet.

Die meisten modernen Computer und Smartphones haben bitmap-basierte Bildschirme. Beispiele für rasterbasierte Geräte sind Text-only-Terminals und einfache Telefone mit nur einer festen Schriftart.

## Syntax

Das `grid`-Feature wird als {{cssxref("CSS_media_queries/Using_media_queries", "&lt;mq-boolean&gt;")}} Wert (`0` oder `1`) angegeben, der darstellt, ob das Ausgabegerät rasterbasiert ist oder nicht.

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
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
