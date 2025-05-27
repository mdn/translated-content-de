---
title: "VideoDecoder: configure() Methode"
short-title: configure()
slug: Web/API/VideoDecoder/configure
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) Schnittstelle reiht eine Steuerungsnachricht ein, um den Video-Decoder für das Dekodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry) enthält. Siehe ["codecs" parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion von Codec-Strings.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine Sequenz von codecspezifischen Bytes enthält, allgemein bekannt als extradata.
    - `codedWidth` {{optional_inline}}
      - : Ein Integer, der die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich eines nicht sichtbaren Paddings, vor jeglichen Verhältnis-Anpassungen.
    - `codedHeight` {{optional_inline}}
      - : Ein Integer, der die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich eines nicht sichtbaren Paddings, vor jeglichen Verhältnis-Anpassungen.
    - `displayAspectWidth` {{optional_inline}}
      - : Ein Integer, der die horizontale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei der Anzeige darstellt.
    - `displayAspectHeight` {{optional_inline}}
      - : Ein Integer, der die vertikale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei der Anzeige darstellt.
    - `colorSpace` {{optional_inline}}
      - : Ein Objekt, das einen [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) darstellt, mit den folgenden Mitgliedern:
        - `primaries`
          - : Ein String, der den Farbraum {{Glossary("gamut", "gamut")}} der Video-Abtastung darstellt. Einer von:
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
    - `hardwareAcceleration` {{optional_inline}}
      - : Ein Hinweis auf die zu verwendende Methode der Hardware-Beschleunigung. Einer von:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `optimizeForLatency` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, ist dies ein Hinweis darauf, dass der ausgewählte Decoder optimiert werden sollte, um die Anzahl der [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte zu minimieren, die dekodiert werden müssen, bevor ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) ausgegeben wird.

> [!NOTE]
> Die Registrierungen im [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) verweisen auf eine Spezifikation, die erläutert, ob und wie das optionale `description`-Element befüllt werden soll.

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

Das folgende Beispiel erstellt einen neuen [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) und konfiguriert ihn mit dem `"vp8"` Codec, einer `codedWidth` von 640 Pixeln und einer `codedHeight` von 480 Pixeln.

```js
const init = {
  output: handleFrame,
  error(e) {
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
