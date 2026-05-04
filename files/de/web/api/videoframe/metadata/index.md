---
title: "VideoFrame: metadata()-Methode"
short-title: metadata()
slug: Web/API/VideoFrame/metadata
l10n:
  sourceCommit: e62132e5900aad53470eb84df3b61eacd35f727d
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`metadata()`**-Methode des [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Interfaces gibt die mit dem Frame verknüpfte Metadaten zurück.

## Syntax

```js-nolint
metadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das Metadaten beschreibt, die für den Video-Frame spezifisch sind, wie im [WebCodecs VideoFrame Metadata Registry](https://w3c.github.io/webcodecs/video_frame_metadata_registry.html) angegeben.
Dieses kann die folgenden Eigenschaften enthalten:

- `rtpTimestamp` {{optional_inline}}
  - : Der RTP-Zeitstempel des entsprechenden kodierten Frames. Video-Frames, die von [WebRTC](/de/docs/Web/API/WebRTC_API)-Quellen stammen, werden `rtpTimestamp`-Metadaten enthalten. Dies ermöglicht Anwendungen, die einen [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) verwenden (zum Beispiel, um dekodierte WebRTC-Frames auf einem `<canvas>` zu rendern), jeden dargestellten Frame mit seinem ursprünglichen RTP-Transport-Zeitstempel zu korrelieren. Dies ist nützlich, zum Beispiel, um Video und Audio-Segmente auszurichten oder Latenzprobleme zu debuggen.

Wenn der Video-Frame keine der aufgeführten Metadatenitems aufweist, gibt `metadata()` ein leeres Objekt zurück.

## Beispiele

### Grundlegende Verwendung

```js
const metadata = frame.metadata();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
