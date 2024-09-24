---
title: Breite
slug: Web/CSS/@media/width
l10n:
  sourceCommit: 421deed53984505909884b3b290002b228d29e7b
---

{{CSSRef}}

Die **`width`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Breite des {{glossary("viewports")}} (oder des Seitenkästchens bei [paginierter Medien](/de/docs/Web/CSS/CSS_paged_media)) zu testen.

## Syntax

Die `width`-Funktion wird als ein {{cssxref("&lt;length&gt;")}}-Wert angegeben, der die Breite des Viewports darstellt. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-width`** und **`max-width`** verwenden können, um nach Mindest- und Höchstwerten zu fragen.

## Beispiele

### HTML

```html
<div>Beobachten Sie dieses Element, während Sie die Breite Ihres Viewports ändern.</div>
```

### CSS

```css
/* Exakte Breite */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* Mindestbreite */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* Höchstbreite */
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
