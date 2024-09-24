---
title: device-width
slug: Web/CSS/@media/device-width
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}} {{deprecated_header}}

> [!NOTE]
> Um die Breite des Ansichtsfensters abzufragen, sollten Entwickler stattdessen die [`width`](/de/docs/Web/CSS/@media/width) Medienfunktion verwenden.

Die **`device-width`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Breite der Renderingfläche eines Ausgabegeräts zu testen.

## Syntax

Das `device-width` Feature wird als {{cssxref("&lt;length&gt;")}} Wert angegeben. Es ist ein Bereichs-Feature, was bedeutet, dass Sie auch die Präfixe **`min-device-width`** und **`max-device-width`** verwenden können, um Mindest- und Höchstwerte abzufragen.

## Beispiele

### Anwendung eines speziellen Stylesheets für Geräte, die schmaler als 800 Pixel sind

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

- [Verwendung von Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
