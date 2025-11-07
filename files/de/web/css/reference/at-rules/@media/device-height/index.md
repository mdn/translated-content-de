---
title: device-height
slug: Web/CSS/Reference/At-rules/@media/device-height
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{deprecated_header}}

> [!NOTE]
> Um die Höhe des Viewports abzufragen, sollten Entwickler die [`height`](/de/docs/Web/CSS/Reference/At-rules/@media/height) Medienfunktion verwenden.

Die **`device-height`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Höhe der Darstellungsfläche eines Ausgabegeräts zu testen.

## Syntax

Die `device-height`-Funktion wird als ein {{cssxref("&lt;length&gt;")}}-Wert angegeben. Es handelt sich um eine Bereichsfunktion, was bedeutet, dass Sie auch die vorangestellten Varianten **`min-device-height`** und **`max-device-height`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

## Beispiele

### Anwenden eines speziellen Stylesheets für Geräte, die kürzer als 800 Pixel sind

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

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
