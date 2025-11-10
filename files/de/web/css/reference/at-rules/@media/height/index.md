---
title: height
slug: Web/CSS/Reference/At-rules/@media/height
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`height`**-Eigenschaft der [CSS](/de/docs/Web/CSS) [Media Query-Funktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um Stile basierend auf der Höhe des {{Glossary("viewport", "Viewports")}} (oder des Seitenrahmens bei [seitengesteuerten Medien](/de/docs/Web/CSS/Guides/Paged_media)) anzuwenden.

## Syntax

Die `height`-Eigenschaft wird als ein {{cssxref("&lt;length&gt;")}}-Wert angegeben, der die Höhe des Viewports darstellt. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-height`** und **`max-height`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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

- [Verwenden von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
