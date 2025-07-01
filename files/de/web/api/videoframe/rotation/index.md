---
title: "VideoFrame: rotation-Eigenschaft"
short-title: rotation
slug: Web/API/VideoFrame/rotation
l10n:
  sourceCommit: 4c4e14a03ff66ad7fcdcef2a4c149bd892aacbce
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`rotation`**-Eigenschaft der [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Schnittstelle gibt die Rotation des Videoframes zurück.

## Wert

Ein Ganzzahlwert, der die Rotation (0, 90, 180 oder 270) in Grad im Uhrzeigersinn darstellt. Standardmäßig `0`. Beliebige Zahlen (einschließlich negativer Zahlen) werden auf die nächste Vierteldrehung gerundet.

## Beispiele

### Erkennen, wenn ein Kameravideo gedreht ist

Angenommen, Sie haben einen Stream von Videoframes von einer Kamera, der mithilfe eines [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) erhalten wurde. Sie können die `rotation`-Eigenschaft der `VideoFrame`-Objekte überprüfen, um festzustellen, ob die Frames gedreht sind oder nicht.

```js
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const track = stream.getTracks()[0];

const trackProcessor = new MediaStreamTrackProcessor(track);

const reader = trackProcessor.readable.getReader();
while (true) {
  const result = await reader.read();
  if (result.done) break;
  const frameFromCamera = result.value;
  // Returns 0, 90, 180, or 270 indicating the frame's rotation
  console.log(frameFromCamera.rotation);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
