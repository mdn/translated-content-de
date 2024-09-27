---
title: device-height
slug: Web/CSS/@media/device-height
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}} {{deprecated_header}}

> [!NOTE]
> Um die Höhe des Viewports abzufragen, sollten Entwickler stattdessen die [`height`](/de/docs/Web/CSS/@media/height) Media-Feature verwenden.

Das **`device-height`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Höhe der Ausgabegeräte-Renderingfläche zu testen.

## Syntax

Das `device-height` Feature wird als ein {{cssxref("&lt;length&gt;")}} Wert angegeben. Es ist ein Bereichs-Feature, was bedeutet, dass Sie auch die präfixierten Varianten **`min-device-height`** und **`max-device-height`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

## Beispiele

### Anwendung eines speziellen Stylesheets für Geräte, die kürzer als 800 Pixel sind

```html
<link
  rel="stylesheet"
  media="screen and (max-device-height: 799px)"
  href="http://foo.bar.com/short-styles.css" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
