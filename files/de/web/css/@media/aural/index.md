---
title: aural
slug: Web/CSS/@media/aural
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}} {{deprecated_header}}

Der `aural` [CSS](/de/docs/Web/CSS) [Medientyp](/de/docs/Web/CSS/@media#media_types) wird für Geräte verwendet, die über Sprachausgabefunktionen verfügen.

## Syntax

Der `aural` CSS-Medientyp wurde verwendet, um einen CSS-Block zu spezifizieren, der nur angewendet wird, wenn der Inhalt auf einem Sprachsynthesegerät präsentiert wird.

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

- [Media queries](/de/docs/Web/CSS/CSS_media_queries)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`@media`](/de/docs/Web/CSS/@media)
