---
title: aural
slug: Web/CSS/@media/aural
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}

Der `aural` [CSS](/de/docs/Web/CSS) [Medientyp](/de/docs/Web/CSS/@media#media_types) wird für Geräte verwendet, die über Sprachausgabefunktionen verfügen.

## Syntax

Der `aural` CSS-Medientyp wurde verwendet, um einen CSS-Block zu spezifizieren, der nur angewendet wird, wenn der Inhalt mit einem Sprachsynthesegerät präsentiert wird.

```css
@media aural {
  /* speech-specific styles here */
}
```

## Beispiele

### Einfaches Beispiel

```css
@media aural {
  body {
    voice-family: Paul;
  }
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`@media`](/de/docs/Web/CSS/@media)
