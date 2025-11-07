---
title: device-width
slug: Web/CSS/Reference/At-rules/@media/device-width
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{deprecated_header}}

> [!NOTE]
> Um die Breite des Ansichtsfensters abzufragen, sollten Entwickler stattdessen die [`width`](/de/docs/Web/CSS/Reference/At-rules/@media/width) Media-Feature verwenden.

Das **`device-width`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Breite der Renderfläche eines Ausgabegeräts zu testen.

## Syntax

Das `device-width` Feature wird als {{cssxref("&lt;length&gt;")}}-Wert angegeben. Es handelt sich um ein Bereichs-Feature, was bedeutet, dass Sie auch die präfixierten Varianten **`min-device-width`** und **`max-device-width`** verwenden können, um Mindest- bzw. Höchstwerte abzufragen.

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

- [Verwenden von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
