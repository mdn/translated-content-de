---
title: device-height
slug: Web/CSS/Reference/At-rules/@media/device-height
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{deprecated_header}}

> [!NOTE]
> Um die Höhe des Viewports abzufragen, sollten Entwickler stattdessen die [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height) Medienfunktion verwenden.

Das **`device-height`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Höhe der Ausgabefläche eines Ausgabegeräts zu testen.

## Syntax

Die `device-height` Funktion wird als {{cssxref("&lt;length&gt;")}} Wert angegeben. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-device-height`** und **`max-device-height`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

## Beispiele

### Anwenden eines speziellen Stylesheet für Geräte, die kürzer als 800 Pixel sind

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

- [Verwenden von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
