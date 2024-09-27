---
title: "VideoDecoder: VideoDecoder() Konstruktor"
short-title: VideoDecoder()
slug: Web/API/VideoDecoder/VideoDecoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoDecoder()`**-Konstruktor erstellt ein neues [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Objekt mit dem bereitgestellten `init.output`-Rückruf als Ausgabe-Rückruf, dem bereitgestellten `init.error`-Rückruf als Fehler-Rückruf und dem [`VideoDecoder.state`](/de/docs/Web/API/VideoDecoder/state) auf `"unconfigured"` gesetzt.

## Syntax

```js-nolint
new VideoDecoder(options)
```

### Parameter

- `options`
  - : Ein Objekt, das zwei Rückrufe enthält.
    - `output`
      - : Ein Rückruf, der ein [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt als einziges Argument übernimmt.
    - `error`
      - : Ein Rückruf, der ein {{jsxref("Error")}}-Objekt als einziges Argument übernimmt.

## Beispiele

Im folgenden Beispiel wird ein `VideoDecoder` mit den beiden erforderlichen Rückruffunktionen erstellt, eine, um den dekodierten Frame zu verarbeiten, und die andere, um Fehler zu behandeln.

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
