---
title: device-aspect-ratio
slug: Web/CSS/Reference/At-rules/@media/device-aspect-ratio
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{deprecated_header}}

> [!NOTE]
> Um das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsfensters abzufragen, sollten Entwickler stattdessen die [`aspect-ratio`](/de/docs/Web/CSS/Reference/At-rules/@media/aspect-ratio)-Medienfunktion verwenden.

Das **`device-aspect-ratio`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um das Breiten-zu-Höhen-{{Glossary("aspect_ratio", "Seitenverhältnis")}} eines Ausgabegeräts zu testen.

## Syntax

Das `device-aspect-ratio` Merkmal wird als {{cssxref("&lt;ratio&gt;")}} angegeben. Es ist ein Bereichsmerkmal, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-device-aspect-ratio`** und **`max-device-aspect-ratio`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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
