---
title: "-moz-device-pixel-ratio"
slug: Web/CSS/@media/-moz-device-pixel-ratio
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}} {{Non-standard_header}} {{Deprecated_header}}

Der **`-moz-device-pixel-ratio`** Gecko-only [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um Stile basierend auf der Anzahl der Geräte-Pixel pro CSS-Pixel anzuwenden.

> [!WARNING]
> Verwenden Sie diese Funktion nicht. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der Einheit `dppx`.

> [!NOTE]
> Dieses Media-Feature wird auch von WebKit als `-webkit-device-pixel-ratio` implementiert. Die `min` und `max` Präfixe, wie sie von Gecko implementiert sind, heißen `min--moz-device-pixel-ratio` und `max--moz-device-pixel-ratio`; aber die gleichen Präfixe, wie sie von Webkit implementiert sind, heißen `-webkit-min-device-pixel-ratio` und `-webkit-max-device-pixel-ratio`.

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
/* First, set for Webkit-based browsers */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* Older Firefox browsers (prior to firefox 16) */,
  (min-resolution: 2dppx) /* The standard way */,
  (min-resolution: 192dpi); /* dppx fallback */
```

> [!NOTE]
> Lesen Sie diesen [CSSWG Artikel](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) für bewährte Praktiken zur Kompatibilität bezüglich `resolution` und `dppx`.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
