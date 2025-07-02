---
title: "VideoFrame: flip-Eigenschaft"
short-title: flip
slug: Web/API/VideoFrame/flip
l10n:
  sourceCommit: 3b1efe57f3b22a97acb9db335f2848c90cdfe40e
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Die **`flip`**-Eigenschaft des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das `VideoFrame` horizontal gespiegelt ist.

## Wert

Ein boolescher Wert. Wenn `true`, wird eine horizontale Spiegelung angewendet. Standardmäßig ist `false`.

## Beispiele

### Erkennen, wann ein Kameravideo gespiegelt wird

Angenommen, Sie haben einen Strom von Videoframes von einer Kamera, erhalten mit einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor). Sie können die `flip`-Eigenschaft der `VideoFrame`-Objekte überprüfen, um festzustellen, ob die Frames gespiegelt sind.

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
