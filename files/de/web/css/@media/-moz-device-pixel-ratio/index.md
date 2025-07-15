---
title: -moz-device-pixel-ratio
slug: Web/CSS/@media/-moz-device-pixel-ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}} {{Deprecated_header}}

Das Gecko-spezifische [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) **`-moz-device-pixel-ratio`** kann verwendet werden, um Stile basierend auf der Anzahl der Geräte-Pixel pro CSS-Pixel anzuwenden.

> [!WARNING]
> Verwenden Sie diese Funktion nicht. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der Einheit `dppx`.

> [!NOTE]
> Dieses Media-Feature wird auch von WebKit als `-webkit-device-pixel-ratio` implementiert. Die von Gecko implementierten Präfixe `min` und `max` heißen `min--moz-device-pixel-ratio` und `max--moz-device-pixel-ratio`, während die von WebKit implementierten Präfixe `-webkit-min-device-pixel-ratio` und `-webkit-max-device-pixel-ratio` benannt sind.

## Syntax

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel.

**Media:** {{cssxref("@media")}}
**Akzeptiert min/max Präfixe:** Ja

## Beispiele

### Grundlegendes Kompatibilitätsbeispiel

`-moz-device-pixel-ratio` kann für die Kompatibilität mit älteren Versionen von Firefox als Version 16 verwendet werden und zusammen mit `-webkit-device-pixel-ratio` für die Kompatibilität mit WebKit-basierten Browsern, die `dppx` nicht unterstützen.

Beispiel:

```css
/* First, set for WebKit-based browsers */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* Older Firefox browsers (prior to firefox 16) */,
  (min-resolution: 2dppx) /* The standard way */,
  (min-resolution: 192dpi); /* dppx fallback */
```

> [!NOTE]
> Lesen Sie diesen [CSSWG Artikel](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) für bewährte Praktiken zur Kompatibilität in Bezug auf `resolution` und `dppx`.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
