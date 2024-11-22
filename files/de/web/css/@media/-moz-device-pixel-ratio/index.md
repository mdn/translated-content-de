---
title: "-moz-device-pixel-ratio"
slug: Web/CSS/@media/-moz-device-pixel-ratio
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{CSSRef}} {{Non-standard_header}} {{Deprecated_header}}

Das Gecko-exklusive **`-moz-device-pixel-ratio`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um Stile basierend auf der Anzahl von Gerätepixeln pro CSS-Pixel anzuwenden.

> [!WARNING]
> Verwenden Sie dieses Feature nicht. Verwenden Sie stattdessen das [`resolution`](/de/docs/Web/CSS/@media/resolution)-Feature mit der `dppx`-Einheit.

> [!NOTE]
> Dieses Media-Feature wird auch von WebKit als `-webkit-device-pixel-ratio` implementiert. Die Min- und Max-Präfixe, wie sie von Gecko implementiert sind, heißen `min--moz-device-pixel-ratio` und `max--moz-device-pixel-ratio`; die gleichen Präfixe, wie sie von WebKit implementiert werden, heißen `-webkit-min-device-pixel-ratio` und `-webkit-max-device-pixel-ratio`.

## Syntax

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel.

**Media:** {{cssxref("@media")}}
**Akzeptiert Min/Max-Präfixe:** ja

## Beispiele

### Einfaches Kompatibilitätsbeispiel

`-moz-device-pixel-ratio` kann für die Kompatibilität mit Firefox-Versionen vor 16 und zusammen mit `-webkit-device-pixel-ratio` für die Kompatibilität mit WebKit-basierten Browsern, die `dppx` nicht unterstützen, verwendet werden.

Beispiel:

```css
/* First, set for WebKit-based browsers */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* Older Firefox browsers (prior to firefox 16) */,
  (min-resolution: 2dppx) /* The standard way */,
  (min-resolution: 192dpi); /* dppx fallback */
```

> [!NOTE]
> Sehen Sie sich diesen [Artikel der CSSWG](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) für gute Praktiken bezüglich Kompatibilität mit `resolution` und `dppx` an.

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
