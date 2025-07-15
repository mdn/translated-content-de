---
title: height
slug: Web/CSS/@media/height
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`height`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um Stile basierend auf der Höhe des {{Glossary("viewport", "Viewports")}} (oder des Seitenbereichs, für [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media)) anzuwenden.

## Syntax

Das `height`-Feature wird als ein {{cssxref("&lt;length&gt;")}}-Wert angegeben, der die Höhe des Viewports darstellt. Es ist ein Bereichs-Feature, was bedeutet, dass Sie auch die Präfixe **`min-height`** und **`max-height`** Varianten verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

## Beispiele

### HTML

```html
<div>Watch this element as you resize your viewport's height.</div>
```

### CSS

```css
/* Exact height */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* Minimum height */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* Maximum height */
@media (max-height: 40rem) {
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
