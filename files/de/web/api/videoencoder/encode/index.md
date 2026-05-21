---
title: "VideoEncoder: encode()-Methode"
short-title: encode()
slug: Web/API/VideoEncoder/encode
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`encode()`**-Methode der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Schnittstelle kodiert asynchron ein [`VideoFrame`](/de/docs/Web/API/VideoFrame). Kodierte Daten ([`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)) oder ein Fehler werden schließlich über die bei der Erstellung des [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) angegebenen Rückruffunktionen zurückgegeben.

## Syntax

```js-nolint
encode(frame)
encode(frame, options)
```

### Parameter

- `frame`
  - : Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Mitgliedern:
    - `keyFrame` {{optional_inline}}
      - : Ein {{jsxref("Boolean")}}, das standardmäßig `false` ist und dem User-Agent Flexibilität gibt, zu entscheiden, ob dieser Frame als Key-Frame kodiert werden soll. Wenn `true`, bedeutet dies, dass der gegebene Frame als Key-Frame kodiert werden muss.
    - `vp9` {{optional_inline}}
      - : Kodierungsoptionen für den [VP9](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp9)-Codec.
        - `quantizer`
          - : Frame-Quantisierungswert von 0 bis 63. Nur wirksam, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer`-Bitratenmodus konfiguriert wurde.
    - `av1` {{optional_inline}}
      - : Kodierungsoptionen für den [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1)-Codec.
        - `quantizer`
          - : Frame-Quantisierungswert von 0 bis 63. Nur wirksam, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer`-Bitratenmodus konfiguriert wurde.
    - `avc` {{optional_inline}}
      - : Kodierungsoptionen für den [AVC (H.264)](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264)-Codec.
        - `quantizer`
          - : Frame-Quantisierungswert von 0 bis 51. Nur wirksam, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer`-Bitratenmodus konfiguriert wurde.
    - `hevc` {{optional_inline}}
      - : Kodierungsoptionen für den [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265)-Codec.
        - `quantizer`
          - : Frame-Quantisierungswert von 0 bis 51. Nur wirksam, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit `quantizer`-Bitratenmodus konfiguriert wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoEncoder/state) nicht `"configured"` ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Rotation und Spiegelung des übergebenen `frame`-Objekts nicht mit der Rotation und Spiegelung des ersten an `encode()` übergebenen [`VideoFrame`](/de/docs/Web/API/VideoFrame) übereinstimmt (die "aktive Orientierung").

## Beispiele

Im folgenden Beispiel wird `encode` ein `VideoFrame` übergeben, und der Options-Parameter, der angibt, dass dieser Frame als Keyframe betrachtet werden sollte.

```js
encoder.encode(frame, { keyFrame: true });
```

Festlegen des QP-Werts pro Frame zur Kodierung einzelner Frames.

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
