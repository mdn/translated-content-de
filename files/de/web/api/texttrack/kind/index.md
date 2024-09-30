---
title: "TextTrack: kind Eigenschaft"
short-title: kind
slug: Web/API/TextTrack/kind
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die **`kind`** schreibgeschützte Eigenschaft der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle gibt die Art des Texttracks an, den dieses Objekt repräsentiert. Dies bestimmt, wie der Track von einem Benutzeragenten behandelt wird.

## Wert

Ein String. Einer von:

- `"subtitles"`
  - : Die Cues werden auf dem Video überlagert. Die Positionierung der Cues wird mit den Eigenschaften eines Objekts gesteuert, das von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) erbt, zum Beispiel [`VTTCue`](/de/docs/Web/API/VTTCue).
- `"captions"`
  - : Die Cues werden auf dem Video überlagert. Die Positionierung der Cues wird mit den Eigenschaften eines Objekts gesteuert, das von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) erbt, zum Beispiel [`VTTCue`](/de/docs/Web/API/VTTCue).
- `"descriptions"`
  - : Die Cues werden auf nicht-visuelle Weise bereitgestellt.
- `"chapters"`
  - : Der Benutzeragent wird einen Mechanismus bereitstellen, um durch Auswahl eines Cues zu navigieren.
- `"metadata"`
  - : Zusätzliche Daten im Zusammenhang mit den Mediendaten, die für interaktive Ansichten verwendet werden könnten.

## Beispiele

Im folgenden Beispiel wird der Wert von `kind` in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.kind);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
