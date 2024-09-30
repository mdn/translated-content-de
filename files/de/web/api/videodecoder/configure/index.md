---
title: "VideoDecoder: configure()-Methode"
short-title: configure()
slug: Web/API/VideoDecoder/configure
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Schnittstelle reiht eine Steuerungsnachricht ein, um den Videodecoder zur Dekodierung von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry) enthält. Siehe ["codecs"-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Erstellung von Codec-Strings.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder eine {{jsxref("DataView")}}, die eine Sequenz von codecspezifischen Bytes enthält, allgemein bekannt als Extradata.
    - `codedWidth` {{optional_inline}}
      - : Eine Ganzzahl, die die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Abstände, vor jeglichen Verhältnisänderungen.
    - `codedHeight` {{optional_inline}}
      - : Eine Ganzzahl, die die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Abstände, vor jeglichen Verhältnisänderungen.
    - `displayAspectWidth` {{optional_inline}}
      - : Eine Ganzzahl, die die horizontale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln beim Anzeigen darstellt.
    - `displayAspectHeight` {{optional_inline}}
      - : Eine Ganzzahl, die die vertikale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln beim Anzeigen darstellt.
    - `colorSpace`
      - : Ein Objekt, das einen [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) darstellt, der die folgenden Mitglieder enthält:
        - `primaries`
          - : Ein String, der den Farbumfang ([gamut](/de/docs/Glossary/gamut)) der Videoproben darstellt. Einer von:
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
        - `transfer`
          - : Ein String, der die Übertragungseigenschaften darstellt. Einer von:
            - `"bt709"`
            - `"smpte170m"`
            - `"iec61966-2-1"`
        - `matrix`
          - : Ein String, der einen Matrixkoeffizienten darstellt. Einer von:
            - `"rgb"`
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
    - `hardwareAcceleration`
      - : Ein Hinweis auf die zu verwendende Methode der Hardwarebeschleunigung. Einer von:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `optimizeForLatency`
      - : Ein boolean. Falls `true`, ist dies ein Hinweis darauf, dass der ausgewählte Decoder so optimiert werden sollte, dass die Anzahl der vor der Ausgabe eines [`VideoFrame`](/de/docs/Web/API/VideoFrame) zu dekodierenden [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte minimiert wird.

> [!NOTE]
> Die Registrierungen im [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) verweisen auf eine Spezifikation, die beschreibt, ob und wie das optionale `description`-Mitglied ausgefüllt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, der Benutzeragent jedoch keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

Das folgende Beispiel erstellt einen neuen [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) und konfiguriert ihn mit dem `"vp8"`-Codec, einer `codedWidth` von 640 Pixeln und einer `codedHeight` von 480 Pixeln.

```js
const init = {
  output: handleFrame,
  error: (e) => {
    console.log(e.message);
  },
};

const config = {
  codec: "vp8",
  codedWidth: 640,
  codedHeight: 480,
};

let decoder = new VideoDecoder(init);
decoder.configure(config);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
