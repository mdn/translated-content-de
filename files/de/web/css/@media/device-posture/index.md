---
title: device-posture
slug: Web/CSS/@media/device-posture
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{seecompattable}}

Das **`device-posture`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die [aktuelle Haltung](/de/docs/Web/API/Device_Posture_API) des Geräts zu erkennen, das heißt, ob der Viewport in einem flachen (`continuous`) oder gefalteten Zustand (`folded`) ist.

## Syntax

Das `device-posture` Merkmal wird als Schlüsselwortwert aus der unten stehenden Liste angegeben:

- `continuous`
  - : Gibt einen flachen Bildschirmzustand an. Faltbare Geräte sind `continuous`, solange sie flach sind; entweder vollständig geöffnet oder vollständig geschlossen. Nicht faltbare Geräte werden als flach betrachtet und sind daher immer `continuous` — dies schließt nahtlose gebogene Displays sowie Standard-Desktop-, Laptop-, Tablet- und Mobilbildschirme ein.
- `folded`
  - : Gibt einen gefalteten Bildschirmzustand an. Faltbare Geräte sind `folded`, wenn sie in Buch- oder Laptop-Haltung verwendet werden.

## Beispiele

In diesem Beispiel erkennt das `device-posture` Medienmerkmal, wenn sich ein Gerät in einer gefalteten Haltung befindet, und fügt basierend auf seiner [`orientation`](/de/docs/Web/CSS/@media/orientation) einen Rand hinzu, um einen größeren Abstand zwischen den zwei Panels der Anwendung für ein einfacheres Lesen zu schaffen.

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

Um den obigen Code in Aktion zu sehen, betrachten Sie die [Device Posture API-Demo](https://mdn.github.io/dom-examples/device-posture-api/) auf einem faltbaren Gerät, falls möglich. Aktuelle Browsing-Entwicklertools ermöglichen das Emulieren von faltbaren Geräten, schließen jedoch die Emulation von teilweise gefalteten Geräten nicht ein — nur vollständig geöffnete oder geschlossene Geräte — daher werden sie immer `continuous` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
- [Device Posture API](/de/docs/Web/API/Device_Posture_API)
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
