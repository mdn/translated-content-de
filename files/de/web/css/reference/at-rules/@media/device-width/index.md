---
title: "`device-width` CSS-Media-Feature"
short-title: device-width
slug: Web/CSS/Reference/At-rules/@media/device-width
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Um die Breite des Ansichtsfensters abzufragen, sollten Entwickler stattdessen die [`width`](/de/docs/Web/CSS/Reference/At-rules/@media/width) Media-Feature verwenden.

Die **`device-width`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Breite der Anzeigefläche eines Ausgabegeräts zu testen.

## Syntax

Die `device-width`-Feature wird als {{cssxref("&lt;length&gt;")}} Wert angegeben. Es handelt sich um ein Bereichsfeature, was bedeutet, dass Sie auch die mit **`min-device-width`** und **`max-device-width`** versehenen Varianten verwenden können, um Minimum- und Maximumwerte abzufragen.

## Beispiele

### Anwenden eines speziellen Stylesheets für Geräte, die schmaler als 800 Pixel sind

```html
<link
  rel="stylesheet"
  media="screen and (max-device-width: 799px)"
  href="https://cdn.example.com/narrow-styles.css" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
