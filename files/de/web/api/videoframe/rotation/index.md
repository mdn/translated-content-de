---
title: "VideoFrame: rotation-Eigenschaft"
short-title: rotation
slug: Web/API/VideoFrame/rotation
l10n:
  sourceCommit: 3b1efe57f3b22a97acb9db335f2848c90cdfe40e
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Die **`rotation`**-Eigenschaft des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt die Rotation des Videoframes zurück.

## Wert

Ein ganzzahliger Wert, der die Rotation (0, 90, 180 oder 270) in Grad im Uhrzeigersinn darstellt. Standardmäßig `0`. Beliebige Zahlen (einschließlich negativer Werte) werden auf die nächste Vierteldrehung gerundet.

## Beispiele

### Erkennen, wann ein Kameravideo gedreht ist

Bei einem Stream von Videoframes einer Kamera, der mit einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) erhalten wurde, können Sie die `rotation`-Eigenschaft der `VideoFrame`-Objekte überprüfen, um festzustellen, ob die Frames gedreht sind oder nicht.

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
