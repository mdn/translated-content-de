---
title: "VideoEncoder: encode()-Methode"
short-title: encode()
slug: Web/API/VideoEncoder/encode
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`encode()`**-Methode der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Schnittstelle kodiert asynchron ein [`VideoFrame`](/de/docs/Web/API/VideoFrame).
Kodierte Daten ([`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)) oder ein Fehler werden schließlich über die Rückrufe bereitgestellt, die dem [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Konstruktor übergeben wurden.

## Syntax

```js-nolint
encode(frame)
encode(frame, options)
```

### Parameter

- `frame`
  - : Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `keyFrame` {{optional_inline}}
      - : Ein {{jsxref("boolean")}}, das standardmäßig auf `false` gesetzt ist und dem User-Agent Flexibilität gibt, zu entscheiden, ob dieses Frame als Schlüsselbild kodiert werden soll. Wenn `true`, bedeutet dies, dass das gegebene Frame als Schlüsselbild kodiert werden muss.
    - `vp9` {{optional_inline}}
      - : Kodierungsoptionen für den [VP9](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp9)-Codec.
        - `quantizer`
          - : Frame-Quantizer-Wert von 0 bis 63. Nur effektiv, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer`-Bitratenmodus konfiguriert wurde.
    - `av1` {{optional_inline}}
      - : Kodierungsoptionen für den [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1)-Codec.
        - `quantizer`
          - : Frame-Quantizer-Wert von 0 bis 63. Nur effektiv, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer`-Bitratenmodus konfiguriert wurde.
    - `avc` {{optional_inline}}
      - : Kodierungsoptionen für den [AVC (H.264)](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264)-Codec.
        - `quantizer`
          - : Frame-Quantizer-Wert von 0 bis 51. Nur effektiv, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer`-Bitratenmodus konfiguriert wurde.
    - `hevc` {{optional_inline}}
      - : Kodierungsoptionen für den [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265)-Codec.
        - `quantizer`
          - : Frame-Quantizer-Wert von 0 bis 51. Nur effektiv, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer`-Bitratenmodus konfiguriert wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoEncoder/state) nicht `"configured"` ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `chunk` aufgrund des Abhängens von anderen Frames zur Dekodierung nicht dekodiert werden kann.

## Beispiele

Im folgenden Beispiel wird `encode` ein `VideoFrame` übergeben, zusammen mit dem Optionsparameter, der angibt, dass dieses Frame als Schlüsselbild betrachtet werden soll.

```js
encoder.encode(frame, { keyFrame: true });
```

Einstellung des QP-Wertes pro Frame zum Kodieren einzelner Frames.

```js
const encoder = new VideoEncoder(init);
const encoderConfig = {
  codec: "vp09.00.10.08",
  width: 800,
  height: 600,
  bitrateMode: "quantizer",
  framerate: 30,
  latencyMode: "realtime",
};
encoder.configure(encoderConfig);

const encodeOptions = { keyFrame: false };
const qp = calculateQp(codec, frame);

if (codec.includes("vp09")) {
  encodeOptions.vp9 = { quantizer: qp };
} else if (codec.includes("av01")) {
  encodeOptions.av1 = { quantizer: qp };
} else if (codec.includes("avc")) {
  encodeOptions.avc = { quantizer: qp };
} else if (codec.includes("hvc1") || codec.includes("hev1")) {
  encodeOptions.hevc = { quantizer: qp };
}

encoder.encode(frame, encodeOptions);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
