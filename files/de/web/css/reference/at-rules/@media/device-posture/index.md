---
title: device-posture
slug: Web/CSS/Reference/At-rules/@media/device-posture
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{seecompattable}}

Die **`device-posture`** [CSS](/de/docs/Web/CSS)-[Medieneigenschaft](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die [aktuelle Haltung](/de/docs/Web/API/Device_Posture_API) des Geräts zu erkennen, also ob das Ansichtsfenster in einem flachen (`continuous`) oder gefalteten Zustand (`folded`) ist.

## Syntax

Die `device-posture`-Eigenschaft wird als ein Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird:

- `continuous`
  - : Zeigt einen flachen Bildschirmzustand an. Faltbare Geräte sind `continuous`, während sie flach sind; entweder vollständig geöffnet oder vollständig geschlossen. Nicht-faltbare Geräte werden als flach angesehen und sind daher immer `continuous` — dies schließt nahtlose gekrümmte Displays sowie Standard-Desktop-, Laptop-, Tablet- und Mobilbildschirme ein.
- `folded`
  - : Zeigt einen gefalteten Bildschirmzustand an. Faltbare Geräte sind `folded`, während sie in einer Buch- oder Laptop-Haltung verwendet werden.

## Beispiele

In diesem Beispiel erkennt die `device-posture`-Medieneigenschaft, wenn sich ein Gerät in einer gefalteten Haltung befindet, und fügt basierend auf seiner [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) einen Rand hinzu, um einen größeren Abstand zwischen den beiden Panels der Anwendung für ein leichteres Lesen zu schaffen.

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

Um den obigen Code in Aktion zu sehen, betrachten Sie die [Device Posture API-Demo](https://mdn.github.io/dom-examples/device-posture-api/) auf einem faltbaren Gerät, wenn möglich. Aktuelle Entwicklerwerkzeuge für Browser ermöglichen das Emulieren faltbarer Geräte, schließen jedoch die Emulation teilweise gefalteter Geräte aus — nur vollständig offene oder geschlossene Geräte — sodass sie immer `continuous` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
