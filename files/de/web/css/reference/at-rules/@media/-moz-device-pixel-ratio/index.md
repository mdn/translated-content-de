---
title: "`-moz-device-pixel-ratio` CSS Media-Feature"
short-title: -moz-device-pixel-ratio
slug: Web/CSS/Reference/At-rules/@media/-moz-device-pixel-ratio
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{Non-standard_header}} {{Deprecated_header}}

Die **`-moz-device-pixel-ratio`** Gecko-exklusive [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um Styles basierend auf der Anzahl von Geräte-Pixeln pro CSS-Pixel anzuwenden.

> [!WARNING]
> Verwenden Sie dieses Feature nicht. Verwenden Sie stattdessen das [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Feature mit der Einheit `dppx`.

> [!NOTE]
> Dieses Media-Feature wird auch von WebKit als `-webkit-device-pixel-ratio` implementiert. Die von Gecko implementierten Präfixe min und max heißen `min--moz-device-pixel-ratio` und `max--moz-device-pixel-ratio`; jedoch werden die gleichen Präfixe von WebKit als `-webkit-min-device-pixel-ratio` und `-webkit-max-device-pixel-ratio` benannt.

## Syntax

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel.

**Media:** {{cssxref("@media")}}
**Akzeptiert min/max Präfixe:** ja

## Beispiele

### Grundlegendes Kompatibilitätsbeispiel

`-moz-device-pixel-ratio` kann für die Kompatibilität mit Firefox-Versionen älter als 16 verwendet werden und zusammen mit `-webkit-device-pixel-ratio` für die Kompatibilität mit WebKit-basierten Browsern, die `dppx` nicht unterstützen.

Beispiel:

```css
/* First, set for WebKit-based browsers */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* Older Firefox browsers (prior to firefox 16) */,
  (min-resolution: 2dppx) /* The standard way */,
  (min-resolution: 192dpi); /* dppx fallback */
```

> [!NOTE]
> In diesem [CSSWG-Artikel](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) finden Sie gute Praktiken zur Kompatibilität mit `resolution` und `dppx`.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
