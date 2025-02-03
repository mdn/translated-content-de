---
title: "VideoDecoder: Methode configure()"
short-title: configure()
slug: Web/API/VideoDecoder/configure
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode des [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Interfaces reiht eine Steuerungsnachricht ein, um den Videodecoder für das Decodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Objekt mit den folgenden Mitgliedern:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry) enthält. Details zur Konstruktion von Codec-Strings finden Sie im Abschnitt ["codecs" parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container).
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine Sequenz von codecspezifischen Bytes enthält, allgemein als Extradata bekannt.
    - `codedWidth` {{optional_inline}}
      - : Ein Integer, der die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Auffüllungen, vor jeglichen Verhältnis-Anpassungen.
    - `codedHeight` {{optional_inline}}
      - : Ein Integer, der die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Auffüllungen, vor jeglichen Verhältnis-Anpassungen.
    - `displayAspectWidth` {{optional_inline}}
      - : Ein Integer, der die horizontale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei Anzeige darstellt.
    - `displayAspectHeight` {{optional_inline}}
      - : Ein Integer, der die vertikale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei Anzeige darstellt.
    - `colorSpace` {{optional_inline}}
      - : Ein Objekt, das ein [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) darstellt, mit den folgenden Mitgliedern:
        - `primaries`
          - : Ein String, der den Farbraum ({{Glossary("gamut", "gamut")}}) der Videostichprobe angibt. Einer von:
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
        - `transfer`
          - : Ein String, der die Übertragungscharakteristika angibt. Einer von:
            - `"bt709"`
            - `"smpte170m"`
            - `"iec61966-2-1"`
        - `matrix`
          - : Ein String, der einen Matrix-Koeffizienten angibt. Einer von:
            - `"rgb"`
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
    - `hardwareAcceleration` {{optional_inline}}
      - : Ein Hinweis auf die zu verwendende Hardwarebeschleunigungsmethode. Einer von:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `optimizeForLatency` {{optional_inline}}
      - : Ein Boolescher Wert. Wenn `true`, ist dies ein Hinweis, dass der ausgewählte Decoder optimiert werden sollte, um die Anzahl der [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte zu minimieren, die vor der Ausgabe eines [`VideoFrame`](/de/docs/Web/API/VideoFrame) decodiert werden müssen.

> [!NOTE]
> Die Registrierungen im [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) verlinken zu einer Spezifikation, die beschreibt, ob und wie das optionale Mitglied `description` befüllt werden sollte.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der User-Agent keinen Codec bereitstellen kann, der dieses Profil decodieren kann.

## Beispiele

Das folgende Beispiel erstellt einen neuen [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) und konfiguriert ihn mit dem Codec `"vp8"`, einer `codedWidth` von 640 Pixeln und einer `codedHeight` von 480 Pixeln.

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
