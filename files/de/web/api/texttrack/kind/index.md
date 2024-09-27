---
title: "TextTrack: Eigenschaft kind"
short-title: kind
slug: Web/API/TextTrack/kind
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die schreibgeschützte Eigenschaft **`kind`** des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces gibt die Art des Texttracks zurück, die dieses Objekt repräsentiert. Dies entscheidet, wie der Track von einem User-Agent behandelt wird.

## Wert

Ein String. Einer von:

- `"subtitles"`
  - : Die Hinweise werden über das Video gelegt. Positionierung der Hinweise wird durch die Eigenschaften eines Objekts gesteuert, das von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) erbt, zum Beispiel [`VTTCue`](/de/docs/Web/API/VTTCue).
- `"captions"`
  - : Die Hinweise werden über das Video gelegt. Positionierung der Hinweise wird durch die Eigenschaften eines Objekts gesteuert, das von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) erbt, zum Beispiel [`VTTCue`](/de/docs/Web/API/VTTCue).
- `"descriptions"`
  - : Die Hinweise werden auf nicht-visuelle Weise zur Verfügung gestellt.
- `"chapters"`
  - : Der User-Agent wird eine Mechanismus bereitstellen, um durch Auswahl eines Hinweises zu navigieren.
- `"metadata"`
  - : Zusätzliche Daten, die sich auf die Mediendaten beziehen, die für interaktive Ansichten verwendet werden könnten.

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
