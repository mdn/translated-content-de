---
title: "VideoDecoder: configure()-Methode"
short-title: configure()
slug: Web/API/VideoDecoder/configure
l10n:
  sourceCommit: 9efc5c04d2dfa727a97ebcbd1a294d14a20eeba8
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Schnittstelle platziert eine Steuerungsnachricht in die Warteschlange, um den Videodecoder für das Dekodieren von Abschnitten zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Objekt, das folgende Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry) enthält. Siehe ["codecs"-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion von Codec-Strings.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine Sequenz codec-spezifischer Bytes enthält, die oft als Extradata bekannt sind.
    - `codedWidth` {{optional_inline}}
      - : Eine ganze Zahl, die die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Polsterung, vor jeglichen Verhältnis-Anpassungen.
    - `codedHeight` {{optional_inline}}
      - : Eine ganze Zahl, die die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Polsterung, vor jeglichen Verhältnis-Anpassungen.
    - `displayAspectWidth` {{optional_inline}}
      - : Eine ganze Zahl, die die horizontale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei der Anzeige darstellt.
    - `displayAspectHeight` {{optional_inline}}
      - : Eine ganze Zahl, die die vertikale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei der Anzeige darstellt.
    - `colorSpace` {{optional_inline}}
      - : Ein Objekt, das einen [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) darstellt, und die folgenden Mitglieder enthält:
        - `primaries`
          - : Ein String, der den Farb-{{Glossary("gamut", "Gamut")}} der Videoproben darstellt. Eine der Optionen:
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
        - `transfer`
          - : Ein String, der die Transfer-Eigenschaften darstellt. Eine der Optionen:
            - `"bt709"`
            - `"smpte170m"`
            - `"iec61966-2-1"`
        - `matrix`
          - : Ein String, der einen Matrixkoeffizienten darstellt. Eine der Optionen:
            - `"rgb"`
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
    - `hardwareAcceleration` {{optional_inline}}
      - : Ein Hinweis auf die zu verwendende Methode der Hardwarebeschleunigung. Eine der Optionen:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `optimizeForLatency` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, ist dies ein Hinweis, dass der ausgewählte Decoder optimiert werden soll, um die Anzahl der [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte, die vor der Ausgabe eines [`VideoFrame`](/de/docs/Web/API/VideoFrame) dekodiert werden müssen, zu minimieren.

> [!NOTE]
> Die Registrierungen im [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) verlinken zu einer Spezifikation, die beschreibt, ob und wie das optionale `description`-Mitglied zu füllen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, der User Agent jedoch keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

Das folgende Beispiel erstellt einen neuen [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) und konfiguriert ihn mit dem `"vp8"` Codec, einer `codedWidth` von 640 Pixeln und einer `codedHeight` von 480 Pixeln.

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
