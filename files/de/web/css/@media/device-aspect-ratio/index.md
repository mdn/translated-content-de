---
title: device-aspect-ratio
slug: Web/CSS/@media/device-aspect-ratio
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}} {{deprecated_header}}

> [!NOTE]
> Um das {{glossary("aspect ratio", "Seitenverhältnis")}} des Viewports abzufragen, sollten Entwickler die [`aspect-ratio`](/de/docs/Web/CSS/@media/aspect-ratio) Medienfunktion verwenden.

Das **`device-aspect-ratio`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um das Breite-zu-Höhe-{{glossary("aspect ratio", "Seitenverhältnis")}} eines Ausgabegeräts zu testen.

## Syntax

Das `device-aspect-ratio`-Merkmal wird als {{cssxref("&lt;ratio&gt;")}} angegeben. Es ist ein Bereichsmerkmal, was bedeutet, dass Sie auch die mit **`min-device-aspect-ratio`** und **`max-device-aspect-ratio`** versehenen Varianten verwenden können, um Minimum- bzw. Maximumwerte abzufragen.

## Beispiele

### Verwendung von min-device-aspect-ratio

```css
article {
  padding: 1rem;
}

@media screen and (min-device-aspect-ratio: 16/9) {
  article {
    padding: 1rem 5vw;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
