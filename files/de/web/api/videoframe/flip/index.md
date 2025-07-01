---
title: "VideoFrame: flip-Eigenschaft"
short-title: flip
slug: Web/API/VideoFrame/flip
l10n:
  sourceCommit: 4c4e14a03ff66ad7fcdcef2a4c149bd892aacbce
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`flip`**-Eigenschaft des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das `VideoFrame` horizontal gespiegelt ist.

## Wert

Ein boolescher Wert. Wenn `true`, wird eine horizontale Spiegelung angewendet. Standardmäßig ist der Wert `false`.

## Beispiele

### Erkennen, wann ein Kameravideo gespiegelt ist

Bei einem Stream von Videoframes von einer Kamera, der mit einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) erhalten wurde, können Sie die `flip`-Eigenschaft auf den `VideoFrame`-Objekten überprüfen, um festzustellen, ob die Frames gespiegelt sind.

```js
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const track = stream.getTracks()[0];

const trackProcessor = new MediaStreamTrackProcessor(track);

const reader = trackProcessor.readable.getReader();
while (true) {
  const result = await reader.read();
  if (result.done) break;
  const frameFromCamera = result.value;
  // Returns `true` if the frame is horizontally flipped
  console.log(frameFromCamera.flip);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
