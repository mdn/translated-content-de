---
title: device-posture
slug: Web/CSS/Reference/At-rules/@media/device-posture
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{seecompattable}}

Das **`device-posture`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die [aktuelle Haltung](/de/docs/Web/API/Device_Posture_API) des Geräts zu erkennen, also ob das Viewport in einem flachen (`continuous`) oder gefalteten Zustand (`folded`) ist.

## Syntax

Das `device-posture`-Feature wird als ein Schlüsselwortwert angegeben, der aus der folgenden Liste gewählt wird:

- `continuous`
  - : Gibt einen flachen Bildschirmzustand an. Faltbare Geräte sind `continuous`, während sie flach sind; entweder vollständig geöffnet oder vollständig geschlossen. Nicht faltbare Geräte werden als flach betrachtet und sind daher immer `continuous` — dies schließt nahtlose gebogene Displays und standardmäßige Desktop-, Laptop-, Tablet- und Mobilbildschirme ein.
- `folded`
  - : Gibt einen gefalteten Bildschirmzustand an. Faltbare Geräte sind `folded`, während sie in einer Buch- oder Laptop-Haltung verwendet werden.

## Beispiele

In diesem Beispiel erkennt das `device-posture` Media-Feature, wenn sich ein Gerät in einer gefalteten Haltung befindet, und fügt basierend auf seiner [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) einen Rand hinzu, um einen größeren Abstand zwischen den beiden Panels der Anwendung für einfacheres Lesen zu schaffen.

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

Um den obigen Code in Aktion zu sehen, betrachten Sie die [Device Posture API-Demo](https://mdn.github.io/dom-examples/device-posture-api/) auf einem faltbaren Gerät, wenn möglich. Aktuelle Entwickler-Tools für Browser ermöglichen die Emulation faltbarer Geräte, umfassen jedoch nicht die Emulation von teilweise gefalteten Geräten — nur vollständig offene oder geschlossene Geräte — daher werden sie immer `continuous` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
