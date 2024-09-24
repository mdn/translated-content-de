---
title: akustisch
slug: Web/CSS/@media/aural
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}} {{deprecated_header}}

Der `aural` [CSS](/de/docs/Web/CSS) [Medientyp](/de/docs/Web/CSS/@media#media_types) wird für Geräte verwendet, die über Sprachwiedergabefähigkeiten verfügen.

## Syntax

Der `aural` CSS-Medientyp wurde verwendet, um einen CSS-Block zu spezifizieren, der nur gilt, wenn der Inhalt mit einem Sprachsynthesegerät präsentiert wird.

```css
@media aural {
  /* sprachspezifische Stile hier */
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
