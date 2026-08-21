---
title: "`-moz-device-pixel-ratio` CSS Media-Feature"
short-title: -moz-device-pixel-ratio
slug: Web/CSS/Reference/At-rules/@media/-moz-device-pixel-ratio
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

Das **`-moz-device-pixel-ratio`** Gecko-exklusive [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um Stile basierend auf der Anzahl von Gerätepixeln pro CSS-Pixel anzuwenden.

> [!WARNING]
> Verwenden Sie dieses Feature nicht. Benutzen Sie stattdessen das [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Feature mit der Einheit `dppx`.

> [!NOTE]
> Dieses Media-Feature wird auch von WebKit als `-webkit-device-pixel-ratio` implementiert. Die von Gecko implementierten Präfixe für min und max heißen `min--moz-device-pixel-ratio` und `max--moz-device-pixel-ratio`; die gleichen Präfixe werden von WebKit jedoch als `-webkit-min-device-pixel-ratio` und `-webkit-max-device-pixel-ratio` bezeichnet.

## Syntax

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel.

**Media:** {{cssxref("@media")}}
**Akzeptiert Min/Max-Präfixe:** ja

## Beispiele

### Grundlegendes Kompatibilitätsbeispiel

`-moz-device-pixel-ratio` kann für die Kompatibilität mit Firefox-Versionen älter als Version 16 und zusammen mit `-webkit-device-pixel-ratio` für die Kompatibilität mit WebKit-basierten Browsern verwendet werden, die `dppx` nicht unterstützen.

Beispiel:

```css
/* First, set for WebKit-based browsers */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* Older Firefox browsers (prior to firefox 16) */,
  (min-resolution: 2dppx) /* The standard way */,
  (min-resolution: 192dpi); /* dppx fallback */
```

> [!NOTE]
> Lesen Sie diesen [CSSWG-Artikel](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/), um gute Praktiken bezüglich der Kompatibilität von `resolution` und `dppx` zu erfahren.

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
