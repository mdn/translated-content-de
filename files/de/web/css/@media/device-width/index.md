---
title: device-width
slug: Web/CSS/@media/device-width
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{deprecated_header}}

> [!NOTE]
> Um die Breite des Viewports abzufragen, sollten Entwickler die [`width`](/de/docs/Web/CSS/@media/width) Medienfunktion verwenden.

Die **`device-width`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Breite der Rendering-Fläche eines Ausgabegeräts zu testen.

## Syntax

Die `device-width` Funktion wird als ein {{cssxref("&lt;length&gt;")}} Wert angegeben. Es ist eine Bereichsfunktion, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-device-width`** und **`max-device-width`** verwenden können, um nach Mindest- und Höchstwerten zu fragen.

## Beispiele

### Anwenden eines speziellen Stylesheets für Geräte, die schmaler als 800 Pixel sind

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

- [Medienabfragen verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
