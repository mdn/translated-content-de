---
title: "`height` CSS Media-Feature"
short-title: height
slug: Web/CSS/Reference/At-rules/@media/height
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`height`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um Stile basierend auf der Höhe des {{Glossary("viewport", "Viewports")}} (oder der Seitenbox bei [Seitendruck-Medien](/de/docs/Web/CSS/Guides/Paged_media)) anzuwenden.

## Syntax

Die `height`-Eigenschaft wird als {{cssxref("&lt;length&gt;")}}-Wert angegeben, der die Höhe des Viewports darstellt. Es handelt sich um eine Bereichseigenschaft, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-height`** und **`max-height`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
