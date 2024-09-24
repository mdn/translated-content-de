---
title: Höhe
slug: Web/CSS/@media/height
l10n:
  sourceCommit: 421deed53984505909884b3b290002b228d29e7b
---

{{CSSRef}}

Die **`height`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um Stile basierend auf der Höhe des {{glossary("Viewports")}} (oder des Seite-Box, für [seitengestaltete Medien](/de/docs/Web/CSS/CSS_paged_media)) anzuwenden.

## Syntax

Die `height`-Funktion wird als ein {{cssxref("&lt;length&gt;")}}-Wert angegeben, der die Höhe des Viewports darstellt. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die Präfixe **`min-height`** und **`max-height`** verwenden können, um minimale bzw. maximale Werte abzufragen.

## Beispiele

### HTML

```html
<div>Beobachten Sie dieses Element, während Sie die Höhe Ihres Viewports ändern.</div>
```

### CSS

```css
/* Exakte Höhe */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* Minimale Höhe */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* Maximale Höhe */
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
