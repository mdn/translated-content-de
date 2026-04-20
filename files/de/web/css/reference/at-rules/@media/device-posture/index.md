---
title: "`device-posture` CSS-Media-Feature"
short-title: device-posture
slug: Web/CSS/Reference/At-rules/@media/device-posture
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{seecompattable}}

Die **`device-posture`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die [aktuelle Haltung](/de/docs/Web/API/Device_Posture_API) eines Geräts zu erkennen, d.h. ob das Viewport in einem flachen (`continuous`) oder gefalteten Zustand (`folded`) ist.

## Syntax

Die `device-posture`-Funktion wird als Schlüsselwortwert aus der folgenden Liste angegeben:

- `continuous`
  - : Gibt einen flachen Bildschirmzustand an. Faltbare Geräte sind `continuous`, solange sie flach sind; entweder vollständig geöffnet oder vollständig geschlossen. Nicht faltbare Geräte gelten als flach und sind daher immer `continuous` — dies schließt nahtlos gewölbte Displays sowie Standard-Desktop-, Laptop-, Tablet- und Mobilbildschirme ein.
- `folded`
  - : Gibt einen gefalteten Bildschirmzustand an. Faltbare Geräte sind `folded`, wenn sie in einer Buch- oder Laptop-Haltung verwendet werden.

## Beispiele

In diesem Beispiel erkennt die `device-posture` Media-Feature, wenn ein Gerät in einer gefalteten Haltung ist, und fügt basierend auf seiner [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) einen Rand hinzu, um eine größere Lücke zwischen den beiden Anwendungsbereichen für ein einfacheres Lesen zu schaffen.

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

Um den obigen Code in Aktion zu sehen, betrachten Sie die [Device Posture API-Demo](https://mdn.github.io/dom-examples/device-posture-api/) auf einem faltbaren Gerät, wenn möglich. Die aktuellen Browser-Entwicklertools ermöglichen die Emulation faltbarer Geräte, beinhalten jedoch keine Emulation von teilweise gefalteten Geräten — nur vollständig geöffnete oder geschlossene Geräte — daher wird immer `continuous` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
