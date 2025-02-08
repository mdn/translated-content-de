---
title: device-posture
slug: Web/CSS/@media/device-posture
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{CSSRef}}{{seecompattable}}

Die **`device-posture`** [CSS](/de/docs/Web/CSS)-[Media-Eigenschaft](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die [aktuelle Haltung](/de/docs/Web/API/Device_Posture_API) eines Geräts zu erkennen, also ob der Viewport in einem flachen (`continuous`) oder gefalteten Zustand (`folded`) ist.

## Syntax

Die `device-posture`-Eigenschaft wird als Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird:

- `continuous`
  - : Gibt einen flachen Bildschirmzustand an. Faltbare Geräte sind `continuous`, solange sie flach sind; entweder vollständig geöffnet oder vollständig geschlossen. Nicht faltbare Geräte gelten als flach und sind daher immer `continuous`. Dies schließt nahtlos gekrümmte Displays sowie standardmäßige Desktop-, Laptop-, Tablet- und Mobilbildschirme ein.
- `folded`
  - : Gibt einen gefalteten Bildschirmzustand an. Faltbare Geräte sind `folded`, wenn sie in einer Buch- oder Laptop-Haltung verwendet werden.

## Beispiele

In diesem Beispiel erkennt die `device-posture`-Media-Eigenschaft, wenn ein Gerät in einer gefalteten Haltung ist, und fügt basierend auf seiner [`orientation`](/de/docs/Web/CSS/@media/orientation) einen Rand hinzu, um eine größere Trennlinie zwischen den zwei Panels der Anwendung für einfacheres Lesen zu schaffen.

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

Um den obigen Code in Aktion zu sehen, betrachten Sie die [Demo zur Device Posture API](https://mdn.github.io/dom-examples/device-posture-api/) auf einem faltbaren Gerät, wenn möglich. Aktuelle Entwicklerwerkzeuge von Browsern ermöglichen die Emulation von faltbaren Geräten, schließen jedoch die Emulation teilweise gefalteter Geräte aus — es werden nur vollständig offene oder geschlossene Geräte emuliert — daher wird immer `continuous` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
