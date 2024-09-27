---
title: width
slug: Web/CSS/@media/width
l10n:
  sourceCommit: 421deed53984505909884b3b290002b228d29e7b
---

{{CSSRef}}

Die **`width`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Breite des [Viewports](/de/docs/Glossary/viewport) (oder des Seitenbereichs bei [Paged Media](/de/docs/Web/CSS/CSS_paged_media)) zu testen.

## Syntax

Die `width`-Funktion wird als ein {{cssxref("&lt;length&gt;")}} Wert angegeben, der die Breite des Viewports repräsentiert. Es ist eine Bereichsfunktion, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-width`** und **`max-width`** verwenden können, um nach minimalen bzw. maximalen Werten zu fragen.

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
