---
title: "`device-aspect-ratio` CSS-Media-Feature"
short-title: device-aspect-ratio
slug: Web/CSS/Reference/At-rules/@media/device-aspect-ratio
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{deprecated_header}}

> [!NOTE]
> Um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsfensters abzufragen, sollten Entwickler stattdessen die [`aspect-ratio`](/de/docs/Web/CSS/Reference/At-rules/@media/aspect-ratio)-Media-Feature verwenden.

Die **`device-aspect-ratio`** [CSS](/de/docs/Web/CSS)-[Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um das Breiten-Höhen-{{Glossary("aspect_ratio", "Seitenverhältnis")}} eines Ausgabegeräts zu testen.

## Syntax

Das `device-aspect-ratio`-Feature wird als {{cssxref("&lt;ratio&gt;")}} angegeben. Es ist ein Bereichs-Feature, was bedeutet, dass Sie auch die präfixierten Varianten **`min-device-aspect-ratio`** und **`max-device-aspect-ratio`** verwenden können, um Mindest- und Höchstwerte abzufragen.

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
