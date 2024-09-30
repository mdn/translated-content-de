---
title: device-width
slug: Web/CSS/@media/device-width
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}} {{deprecated_header}}

> [!NOTE]
> Um die Breite des Viewports abzufragen, sollten Entwickler stattdessen das [`width`](/de/docs/Web/CSS/@media/width) Media-Feature verwenden.

Das **`device-width`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Breite der Renderfläche eines Ausgabegeräts zu testen.

## Syntax

Das `device-width` Feature wird als {{cssxref("&lt;length&gt;")}} Wert angegeben. Es ist ein Bereichs-Feature, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-device-width`** und **`max-device-width`** verwenden können, um Mindest- und Höchstwerte abzufragen.

## Beispiele

### Ein spezielles Stylesheet für Geräte anwenden, die schmaler als 800 Pixel sind

```html
<link
  rel="stylesheet"
  media="screen and (max-device-width: 799px)"
  href="http://foo.bar.com/narrow-styles.css" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
