---
title: "`width` CSS-Media-Feature"
short-title: width
slug: Web/CSS/Reference/At-rules/@media/width
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`width`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Breite des {{Glossary("viewport", "Viewports")}} (oder des Seitenbereichs für [paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media)) zu testen.

## Syntax

Das `width`-Feature wird als {{cssxref("&lt;length&gt;")}}-Wert angegeben, der die Breite des Viewports darstellt. Es handelt sich um ein Bereichs-Feature, d.h. es können auch die vorangestellten Varianten **`min-width`** und **`max-width`** verwendet werden, um Mindest- bzw. Höchstwerte abzufragen.

## Beispiele

### HTML

```html
<div>Watch this element as you resize your viewport's width.</div>
```

### CSS

```css
/* Exact width */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* Minimum width */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* Maximum width */
@media (max-width: 50rem) {
  div {
    border: 2px solid blue;
  }
}
```

### Ergebnis

{{EmbedLiveSample('Examples','90%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
