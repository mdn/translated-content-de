---
title: -moz-device-pixel-ratio
slug: Web/CSS/Reference/At-rules/@media/-moz-device-pixel-ratio
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Non-standard_header}} {{Deprecated_header}}

Die nur in Gecko verfügbare CSS-[Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) **`-moz-device-pixel-ratio`** kann verwendet werden, um Stile basierend auf der Anzahl der Gerätepixel pro CSS-Pixel anzuwenden.

> [!WARNING]
> Verwenden Sie diese Funktion nicht. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution)-Funktion mit der Einheit `dppx`.

> [!NOTE]
> Diese Medienfunktion wird auch von WebKit als `-webkit-device-pixel-ratio` implementiert. Die von Gecko implementierten Präfixe min und max werden als `min--moz-device-pixel-ratio` und `max--moz-device-pixel-ratio` bezeichnet; die gleichen Präfixe von WebKit werden jedoch als `-webkit-min-device-pixel-ratio` und `-webkit-max-device-pixel-ratio` bezeichnet.

## Syntax

- {{cssxref("&lt;number&gt;")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel.

**Medien:** {{cssxref("@media")}}
**Akzeptiert min/max-Präfixe:** ja

## Beispiele

### Grundlegendes Kompatibilitätsbeispiel

`-moz-device-pixel-ratio` kann zur Kompatibilität mit Firefox-Versionen älter als 16 verwendet werden und in Verbindung mit `-webkit-device-pixel-ratio` für Kompatibilität mit WebKit-basierten Browsern, die `dppx` nicht unterstützen.

Beispiel:

```css
/* First, set for WebKit-based browsers */
@media (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2) /* Older Firefox browsers (prior to firefox 16) */,
  (min-resolution: 2dppx) /* The standard way */,
  (min-resolution: 192dpi); /* dppx fallback */
```

> [!NOTE]
> Siehe diesen [CSSWG-Artikel](https://www.w3.org/blog/CSS/2012/06/14/unprefix-webkit-device-pixel-ratio/) für bewährte Praktiken zur Kompatibilität bezüglich `resolution` und `dppx`.

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
