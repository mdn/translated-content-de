---
title: "VideoEncoder: encode()-Methode"
short-title: encode()
slug: Web/API/VideoEncoder/encode
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`encode()`**-Methode der {{domxref("VideoEncoder")}}-Schnittstelle kodiert asynchron ein {{domxref("VideoFrame")}}.
Kodierte Daten ({{domxref("EncodedVideoChunk")}}) oder ein Fehler werden schließlich über die bei der Erstellung des {{domxref("VideoEncoder")}} bereitgestellten Rückrufmöglichkeiten zurückgegeben.

## Syntax

```js-nolint
encode(frame)
encode(frame, options)
```

### Parameter

- `frame`
  - : Ein {{domxref("VideoFrame")}}-Objekt.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Mitgliedern:
    - `keyFrame` {{optional_inline}}
      - : Ein {{jsxref("boolean")}}, standardmäßig `false`, wodurch der Benutzeragent die Flexibilität erhält, zu entscheiden, ob dieses Bild als Schlüsselbild kodiert werden soll. Wenn `true`, bedeutet dies, dass das angegebene Bild als Schlüsselbild kodiert werden muss.
    - `vp9` {{optional_inline}}
      - : Kodierungsoptionen für den [VP9](/de/docs/Web/Media/Formats/Video_codecs#vp9)-Codec.
        - `quantizer`
          - : Frame-Quantisierer-Wert von 0 bis 63. Wirksam nur, wenn {{domxref("VideoEncoder")}} mit `quantizer`-Bitratenmodus konfiguriert wurde.
    - `av1` {{optional_inline}}
      - : Kodierungsoptionen für den [AV1](/de/docs/Web/Media/Formats/Video_codecs#av1)-Codec.
        - `quantizer`
          - : Frame-Quantisierer-Wert von 0 bis 63. Wirksam nur, wenn {{domxref("VideoEncoder")}} mit `quantizer`-Bitratenmodus konfiguriert wurde.
    - `avc` {{optional_inline}}
      - : Kodierungsoptionen für den [AVC (H.264)](/de/docs/Web/Media/Formats/Video_codecs#avc_h.264)-Codec.
        - `quantizer`
          - : Frame-Quantisierer-Wert von 0 bis 51. Wirksam nur, wenn {{domxref("VideoEncoder")}} mit `quantizer`-Bitratenmodus konfiguriert wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("VideoEncoder.state","state")}} nicht `"configured"` ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `chunk` nicht dekodiert werden kann, da er auf andere Frames zum Dekodieren angewiesen ist.

## Beispiele

Im folgenden Beispiel wird `encode` ein `VideoFrame` übergeben sowie der Optionsparameter, der anzeigt, dass dieses Bild als Schlüsselbild betrachtet werden soll.

```js
encoder.encode(frame, { keyFrame: true });
```

Pro-Frame-QP-Wert für die Kodierung einzelner Frames einstellen.

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
