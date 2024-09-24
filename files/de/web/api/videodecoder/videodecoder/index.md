---
title: "VideoDecoder: VideoDecoder() Konstruktor"
short-title: VideoDecoder()
slug: Web/API/VideoDecoder/VideoDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoDecoder()`** Konstruktor erstellt ein neues {{domxref("VideoDecoder")}}-Objekt mit dem bereitgestellten `init.output` Callback als Ausgabe-Callback, dem bereitgestellten `init.error` Callback als Fehler-Callback und dem {{domxref("VideoDecoder.state")}} auf `"unconfigured"` gesetzt.

## Syntax

```js-nolint
new VideoDecoder(options)
```

### Parameter

- `options`
  - : Ein Objekt, das zwei Callbacks enthält.
    - `output`
      - : Ein Callback, das ein {{domxref("VideoFrame")}} Objekt als einziges Argument übernimmt.
    - `error`
      - : Ein Callback, das ein {{jsxref("Error")}} Objekt als einziges Argument übernimmt.

## Beispiele

Im folgenden Beispiel wird ein `VideoDecoder` mit den beiden erforderlichen Callback-Funktionen erstellt, eine zur Bearbeitung des dekodierten Frames und die andere zur Fehlerbehandlung.

```js
const videoDecoder = new VideoDecoder({
  output: processVideo,
  error: onEncoderError,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
