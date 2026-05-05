---
title: "VideoFrame: metadata() Methode"
short-title: metadata()
slug: Web/API/VideoFrame/metadata
l10n:
  sourceCommit: ef6215cdb0472ba6bff093e2dcfb0e1434483db5
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Die **`metadata()`** Methode der [`VideoFrame`](/de/docs/Web/API/VideoFrame) Schnittstelle gibt die Metadaten zurück, die mit dem Frame verknüpft sind.

## Syntax

```js-nolint
metadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die Metadaten beschreibt, die durch das [WebCodecs VideoFrame Metadata Registry](https://w3c.github.io/webcodecs/video_frame_metadata_registry.html) spezifiziert werden. Es kann folgende Eigenschaften enthalten:

- `rtpTimestamp` {{optional_inline}}
  - : Der RTP-Zeitstempel des entsprechenden codierten Frames. Videoframes, die von [WebRTC](/de/docs/Web/API/WebRTC_API) Quellen stammen, enthalten `rtpTimestamp` Metadaten. Dies ermöglicht Anwendungen, die einen [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) verwenden (z.B. um dekodierte WebRTC-Frames auf einem `<canvas>` darzustellen), jeden freigelegten Frame mit seinem ursprünglichen RTP-Transport-Zeitstempel zu korrelieren. Dies ist beispielsweise nützlich, um Video mit Audiosegmenten abzugleichen oder Latenzprobleme zu debuggen.

Wenn der Videoframe keines der aufgelisteten Metadaten-Elemente aufweist, gibt `metadata()` ein leeres Objekt zurück.

## Beispiele

### Grundlegende Verwendung

```js
const metadata = frame.metadata();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
