---
title: "-moz-device-pixel-ratio"
slug: Web/CSS/@media/-moz-device-pixel-ratio
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}} {{Non-standard_header}} {{Deprecated_header}}

Die Gecko-exklusive [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) **`-moz-device-pixel-ratio`** kann verwendet werden, um Styles basierend auf der Anzahl der Gerätepixel pro CSS-Pixel anzuwenden.

> [!WARNING]
> Verwenden Sie dieses Feature nicht. Verwenden Sie stattdessen das [`resolution`](/de/docs/Web/CSS/@media/resolution) Feature mit der Einheit `dppx`.

> [!NOTE]
> Dieses Media-Feature wird auch von WebKit als `-webkit-device-pixel-ratio` implementiert. Die von Gecko implementierten Präfixe min und max heißen `min--moz-device-pixel-ratio` und `max--moz-device-pixel-ratio`; Die gleichen Präfixe, wie von WebKit implementiert, heißen `-webkit-min-device-pixel-ratio` und `-webkit-max-device-pixel-ratio`.

## Syntax

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel.

**Media:** {{cssxref("@media")}}
**Akzeptiert min/max Präfixe:** ja

## Beispiele

### Einfaches Kompatibilitätsbeispiel

`-moz-device-pixel-ratio` kann für die Kompatibilität mit Firefox-Versionen älter als 16 und zusammen mit `-webkit-device-pixel-ratio` für Kompatibilität mit WebKit-basierten Browsern, die `dppx` nicht unterstützen, verwendet werden.

Beispiel:

```css
/* Zuerst für Webkit-basierte Browser einstellen */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* Ältere Firefox-Browser (vor Firefox 16) */,
  (min-resolution: 2dppx) /* Der Standardweg */,
  (min-resolution: 192dpi); /* dppx Fallback */
```

> [!NOTE]
> Sehen Sie sich diesen [CSSWG-Artikel](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) für gute Praktiken zur Kompatibilität in Bezug auf `resolution` und `dppx` an.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
