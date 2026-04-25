---
title: "`device-height` CSS-Media-Feature"
short-title: device-height
slug: Web/CSS/Reference/At-rules/@media/device-height
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{deprecated_header}}

> [!NOTE]
> Um die Höhe des Viewports abzufragen, sollten Entwickler stattdessen die [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height)-Media-Feature verwenden.

Die **`device-height`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Höhe der Rendering-Oberfläche eines Ausgabegeräts zu testen.

## Syntax

Die `device-height`-Feature wird als ein {{cssxref("&lt;length&gt;")}}-Wert angegeben. Es handelt sich um eine Bereichs-Feature, was bedeutet, dass Sie auch die vorgestellten **`min-device-height`** und **`max-device-height`** Varianten verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

## Beispiele

### Anwenden eines speziellen Stylesheets für Geräte, die kürzer als 800 Pixel sind

```html
<link
  rel="stylesheet"
  media="screen and (max-device-height: 799px)"
  href="https://cdn.example.com/short-styles.css" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
