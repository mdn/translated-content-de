---
title: CSS-Media-Feature `device-aspect-ratio`
short-title: device-aspect-ratio
slug: Web/CSS/Reference/At-rules/@media/device-aspect-ratio
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsbereichs abzufragen, sollten Entwickler stattdessen die [`aspect-ratio`](/de/docs/Web/CSS/Reference/At-rules/@media/aspect-ratio)-Medienfunktion verwenden.

Die **`device-aspect-ratio`** [CSS](/de/docs/Web/CSS)-[Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um das Breite-zu-Höhe-{{Glossary("aspect_ratio", "Seitenverhältnis")}} eines Ausgabegeräts zu testen.

## Syntax

Die `device-aspect-ratio`-Funktion wird als {{cssxref("&lt;ratio&gt;")}} angegeben. Sie ist eine Bereichsfunktion, was bedeutet, dass Sie auch die präfixierten Varianten **`min-device-aspect-ratio`** und **`max-device-aspect-ratio`** verwenden können, um minimale bzw. maximale Werte abzufragen.

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
