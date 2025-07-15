---
title: device-aspect-ratio
slug: Web/CSS/@media/device-aspect-ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}

> [!NOTE]
> Um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Viewports abzufragen, sollten Entwickler stattdessen das [`aspect-ratio`](/de/docs/Web/CSS/@media/aspect-ratio) Media-Feature verwenden.

Das **`device-aspect-ratio`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um das Breiten-Höhen-{{Glossary("aspect_ratio", "Seitenverhältnis")}} eines Ausgabegeräts zu testen.

## Syntax

Die `device-aspect-ratio`-Funktion wird als {{cssxref("&lt;ratio&gt;")}} angegeben. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-device-aspect-ratio`** und **`max-device-aspect-ratio`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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
