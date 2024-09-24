---
title: "TextTrack: kind Eigenschaft"
short-title: kind
slug: Web/API/TextTrack/kind
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die schreibgeschützte Eigenschaft **`kind`** der {{domxref("TextTrack")}} Schnittstelle gibt die Art des Texttracks zurück, den dieses Objekt darstellt. Dies entscheidet, wie der Track von einem Benutzeragenten behandelt wird.

## Wert

Ein String. Einer der folgenden:

- `"subtitles"`
  - : Die Hinweise werden über das Video gelegt. Die Positionierung der Hinweise wird durch die Eigenschaften eines Objekts gesteuert, das von {{domxref("TextTrackCue")}} erbt, zum Beispiel {{domxref("VTTCue")}}.
- `"captions"`
  - : Die Hinweise werden über das Video gelegt. Die Positionierung der Hinweise wird durch die Eigenschaften eines Objekts gesteuert, das von {{domxref("TextTrackCue")}} erbt, zum Beispiel {{domxref("VTTCue")}}.
- `"descriptions"`
  - : Die Hinweise werden auf nicht-visuelle Weise verfügbar gemacht.
- `"chapters"`
  - : Der Benutzeragent stellt einen Mechanismus zur Verfügung, um durch Auswahl eines Hinweises zu navigieren.
- `"metadata"`
  - : Zusätzliche Daten, die sich auf die Mediendaten beziehen und für interaktive Ansichten verwendet werden könnten.

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
