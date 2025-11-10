---
title: "VideoEncoder: Methode encode()"
short-title: encode()
slug: Web/API/VideoEncoder/encode
l10n:
  sourceCommit: 0e6f536c6d525a8b817705c3b28a03c7eb773364
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`encode()`**-Methode der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Schnittstelle kodiert asynchron ein [`VideoFrame`](/de/docs/Web/API/VideoFrame).
Kodierte Daten ([`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)) oder ein Fehler werden schließlich über die beim [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Konstruktor bereitgestellten Rückruffunktionen zurückgegeben.

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
      - : Ein {{jsxref("boolean")}}, der standardmäßig auf `false` gesetzt ist und dem Benutzeragenten die Flexibilität gibt, zu entscheiden, ob dieses Bild als Schlüsselbild kodiert werden soll. Wenn `true`, bedeutet dies, dass das angegebene Bild als Schlüsselbild kodiert werden muss.
    - `vp9` {{optional_inline}}
      - : Kodierungsoptionen für den [VP9](/de/docs/Web/Media/Guides/Formats/Video_codecs#vp9)-Codec.
        - `quantizer`
          - : Frame-Quantisiererwert von 0 bis 63. Wirksam nur, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit dem `quantizer`-Bitraten-Modus konfiguriert wurde.
    - `av1` {{optional_inline}}
      - : Kodierungsoptionen für den [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1)-Codec.
        - `quantizer`
          - : Frame-Quantisiererwert von 0 bis 63. Wirksam nur, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit dem `quantizer`-Bitraten-Modus konfiguriert wurde.
    - `avc` {{optional_inline}}
      - : Kodierungsoptionen für den [AVC (H.264)](/de/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264)-Codec.
        - `quantizer`
          - : Frame-Quantisiererwert von 0 bis 51. Wirksam nur, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit dem `quantizer`-Bitraten-Modus konfiguriert wurde.
    - `hevc` {{optional_inline}}
      - : Kodierungsoptionen für den [HEVC (H.265)](/de/docs/Web/Media/Guides/Formats/Video_codecs#hevc_h.265)-Codec.
        - `quantizer`
          - : Frame-Quantisiererwert von 0 bis 51. Wirksam nur, wenn [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) mit dem `quantizer`-Bitraten-Modus konfiguriert wurde.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoEncoder/state) nicht `"configured"` ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Drehung und das Spiegeln des angegebenen `frame`-Objekts nicht mit der Drehung und dem Spiegeln des ersten an `encode()` übergebenen [`VideoFrame`](/de/docs/Web/API/VideoFrame) (die "aktive Orientierung") übereinstimmen.

## Beispiele

Im folgenden Beispiel wird `encode` ein `VideoFrame` und der Optionsparameter übergeben, der angibt, dass dieses Bild als Schlüsselbild betrachtet werden soll.

```js
encoder.encode(frame, { keyFrame: true });
```

Festlegen eines QP-Werts pro Frame zur Kodierung einzelner Frames.

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
