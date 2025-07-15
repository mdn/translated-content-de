---
title: width
slug: Web/CSS/@media/width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`width`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Breite des {{Glossary("viewport", "Viewports")}} (oder des Seitenrahmens, für [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media)) zu testen.

## Syntax

Das `width`-Feature wird als {{cssxref("&lt;length&gt;")}}-Wert angegeben, der die Breite des Viewports repräsentiert. Es ist ein Bereichs-Feature, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-width`** und **`max-width`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
