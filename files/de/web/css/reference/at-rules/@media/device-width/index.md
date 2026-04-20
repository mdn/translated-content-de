---
title: "`device-width` CSS-Medienfeature"
short-title: device-width
slug: Web/CSS/Reference/At-rules/@media/device-width
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{deprecated_header}}

> [!NOTE]
> Um die Breite des Ansichtsfensters abzufragen, sollten Entwickler stattdessen das [`width`](/de/docs/Web/CSS/Reference/At-rules/@media/width) Medienfeature verwenden.

Das **`device-width`** [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Breite der Rendering-Oberfläche eines Ausgabegeräts zu testen.

## Syntax

Das `device-width` Feature wird als ein {{cssxref("&lt;length&gt;")}} Wert angegeben. Es ist ein Bereichsmerkmal, was bedeutet, dass Sie auch die mit Präfix versehenen Varianten **`min-device-width`** und **`max-device-width`** verwenden können, um Mindest- und Höchstwerte abzufragen.

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
