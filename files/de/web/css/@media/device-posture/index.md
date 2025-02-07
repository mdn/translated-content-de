---
title: device-posture
slug: Web/CSS/@media/device-posture
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{CSSRef}}{{seecompattable}}

Die **`device-posture`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die [aktuelle Haltung](/de/docs/Web/API/Device_Posture_API) des Geräts zu erkennen, also ob der Viewport in einem flachen (`continuous`) oder gefalteten Zustand (`folded`) ist.

## Syntax

Das `device-posture`-Feature wird als ein Schlüsselwortwert aus der folgenden Liste angegeben:

- `continuous`
  - : Gibt einen flachen Bildschirmzustand an. Klappbare Geräte sind `continuous`, wenn sie flach sind; entweder vollständig geöffnet oder vollständig geschlossen. Nicht-klappbare Geräte werden als flach betrachtet und sind daher immer `continuous` — dies schließt nahtlos gebogene Displays sowie Standard-Desktop-, Laptop-, Tablet- und Mobilbildschirme ein.
- `folded`
  - : Gibt einen gefalteten Bildschirmzustand an. Klappbare Geräte sind `folded`, während sie in einer Buch- oder Laptophaltung verwendet werden.

## Beispiele

In diesem Beispiel erkennt das `device-posture` Media-Feature, wenn sich ein Gerät in einer gefalteten Haltung befindet, und fügt basierend auf seiner [`orientation`](/de/docs/Web/CSS/@media/orientation) einen Rand hinzu, um eine größere Trennung zwischen den beiden Panels der Anwendung für ein einfacheres Lesen zu schaffen.

```css
@media (device-posture: folded) and (orientation: landscape) {
  .list-view {
    margin-inline-end: 60px;
  }
}

@media (device-posture: folded) and (orientation: portrait) {
  .list-view {
    margin-block-end: 60px;
  }
}
```

Um den obigen Code in Aktion zu sehen, öffnen Sie die [Device Posture API-Demonstration](https://mdn.github.io/dom-examples/device-posture-api/) auf einem faltbaren Gerät, wenn möglich. Aktuelle Entwicklerwerkzeuge der Browser ermöglichen die Emulation von faltbaren Geräten, jedoch nicht die Emulation von teilweise gefalteten Geräten — nur vollständig geöffneten oder geschlossenen Geräten — daher zeigen sie immer `continuous` an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
