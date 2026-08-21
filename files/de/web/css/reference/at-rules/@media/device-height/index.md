---
title: "`device-height` CSS-Media-Feature"
short-title: device-height
slug: Web/CSS/Reference/At-rules/@media/device-height
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Um die Höhe des Viewports abzufragen, sollten Entwickler die [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height) Media-Feature verwenden.

Die **`device-height`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Höhe der Darstellungsfläche eines Ausgabegeräts zu testen.

## Syntax

Die `device-height` Feature wird als ein {{cssxref("&lt;length&gt;")}} Wert angegeben. Es handelt sich um ein Bereichsmerkmal, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-device-height`** und **`max-device-height`** verwenden können, um Mindest- und Höchstwerte abzufragen.

## Beispiele

### Anwendung eines speziellen Stylesheets für Geräte, die kürzer als 800 Pixel sind

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
