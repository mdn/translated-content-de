---
title: device-aspect-ratio
slug: Web/CSS/@media/device-aspect-ratio
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}} {{deprecated_header}}

> [!NOTE]
> Um das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des Viewports abzufragen, sollten Entwickler stattdessen die [`aspect-ratio`](/de/docs/Web/CSS/@media/aspect-ratio) Medienfunktion verwenden.

Die **`device-aspect-ratio`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um das Breite-zu-Höhe-[Seitenverhältnis](/de/docs/Glossary/aspect_ratio) eines Ausgabegeräts zu testen.

## Syntax

Die `device-aspect-ratio` Funktion wird als {{cssxref("&lt;ratio&gt;")}} angegeben. Es ist eine Bereichsfunktion, was bedeutet, dass Sie auch die prefixierten **`min-device-aspect-ratio`** und **`max-device-aspect-ratio`** Varianten verwenden können, um minimale und maximale Werte abzufragen.

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
