---
title: width
slug: Web/CSS/Reference/At-rules/@media/width
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`width`** [CSS](/de/docs/Web/CSS) [Media-Eigenschaft](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Breite des {{Glossary("viewport", "Viewports")}} (oder des Seitenbereichs, für [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media)) zu testen.

## Syntax

Die `width`-Eigenschaft wird als ein {{cssxref("&lt;length&gt;")}} Wert angegeben, der die Breite des Viewports darstellt. Es handelt sich um eine Bereichs-Eigenschaft, was bedeutet, dass Sie auch die Präfixe **`min-width`** und **`max-width`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
