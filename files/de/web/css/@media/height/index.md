---
title: height
slug: Web/CSS/@media/height
l10n:
  sourceCommit: 421deed53984505909884b3b290002b228d29e7b
---

{{CSSRef}}

Das **`height`**- [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um Styles basierend auf der Höhe des [Viewports](/de/docs/Glossary/viewport) (oder der Seitenbox bei [Paged Media](/de/docs/Web/CSS/CSS_paged_media)) anzuwenden.

## Syntax

Das `height`-Feature wird als {{cssxref("&lt;length&gt;")}}-Wert angegeben, der der Höhe des Viewports entspricht. Es handelt sich um ein Bereichsfeature, was bedeutet, dass Sie auch die Präfixvarianten **`min-height`** und **`max-height`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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
