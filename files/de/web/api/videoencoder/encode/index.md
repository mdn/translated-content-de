---
title: "VideoEncoder: encode()-Methode"
short-title: encode()
slug: Web/API/VideoEncoder/encode
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`encode()`**-Methode des [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Interfaces kodiert asynchron ein [`VideoFrame`](/de/docs/Web/API/VideoFrame). Kodierte Daten ([`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)) oder ein Fehler werden schließlich über die Rückrufe bereitgestellt, die dem [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Konstruktor übergeben wurden.

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
      - : Ein {{jsxref("boolean")}}, der standardmäßig auf `false` gesetzt ist und dem Benutzeragenten Flexibilität gibt, zu entscheiden, ob dieses Frame als Keyframe kodiert werden soll. Wenn `true`, weist das darauf hin, dass das gegebene Frame als Keyframe kodiert werden muss.
    - `vp9` {{optional_inline}}
      - : Kodierungsoptionen für den [VP9](/de/docs/Web/Media/Formats/Video_codecs#vp9)-Codec.
        - `quantizer`
          - : Frame-Quantisiererwert von 0 bis 63. Nur wirksam, wenn der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer` Bitratenmodus konfiguriert wurde.
    - `av1` {{optional_inline}}
      - : Kodierungsoptionen für den [AV1](/de/docs/Web/Media/Formats/Video_codecs#av1)-Codec.
        - `quantizer`
          - : Frame-Quantisiererwert von 0 bis 63. Nur wirksam, wenn der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer` Bitratenmodus konfiguriert wurde.
    - `avc` {{optional_inline}}
      - : Kodierungsoptionen für den [AVC (H.264)](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264)-Codec.
        - `quantizer`
          - : Frame-Quantisiererwert von 0 bis 51. Nur wirksam, wenn der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer` Bitratenmodus konfiguriert wurde.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoEncoder/state) nicht `"configured"` ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `chunk` nicht dekodiert werden kann, da er sich auf andere Frames für die Dekodierung verlässt.

## Beispiele

Im folgenden Beispiel erhält `encode` ein `VideoFrame` und den Optionsparameter, der angibt, dass dieses Frame als Keyframe betrachtet werden soll.

```js
encoder.encode(frame, { keyFrame: true });
```

Festlegen des QP-Werts pro Frame für die Kodierung einzelner Frames.

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
}

encoder.encode(frame, encodeOptions);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
