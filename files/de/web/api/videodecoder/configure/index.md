---
title: "VideoDecoder: configure() Methode"
short-title: configure()
slug: Web/API/VideoDecoder/configure
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode der Schnittstelle {{domxref("VideoDecoder")}} stellt eine Steuerungsnachricht in die Warteschlange, um den Videodecoder für das Dekodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry) enthält. Siehe ["codecs" parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Erstellung von Codec-Strings.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine Sequenz von codecspezifischen Bytes enthält, die gemeinhin als Extradata bekannt sind.
    - `codedWidth` {{optional_inline}}
      - : Eine Ganzzahl, die die Breite des {{domxref("VideoFrame")}} in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Polsterung, vor jeglichen Verhältnis-Anpassungen.
    - `codedHeight` {{optional_inline}}
      - : Eine Ganzzahl, die die Höhe des {{domxref("VideoFrame")}} in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Polsterung, vor jeglichen Verhältnis-Anpassungen.
    - `displayAspectWidth` {{optional_inline}}
      - : Eine Ganzzahl, die die horizontale Dimension des {{domxref("VideoFrame")}} in Pixeln beim Anzeigen darstellt.
    - `displayAspectHeight` {{optional_inline}}
      - : Eine Ganzzahl, die die vertikale Dimension des {{domxref("VideoFrame")}} in Pixeln beim Anzeigen darstellt.
    - `colorSpace`
      - : Ein Objekt, das einen {{domxref("VideoColorSpace")}} repräsentiert, mit den folgenden Mitgliedern:
        - `primaries`
          - : Ein String, der den Farbgamut des Videobeispiels darstellt. Eine der folgenden Optionen:
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
        - `transfer`
          - : Ein String, der die Übertragungscharakteristiken darstellt. Eine der folgenden Optionen:
            - `"bt709"`
            - `"smpte170m"`
            - `"iec61966-2-1"`
        - `matrix`
          - : Ein String, der einen Matrixkoeffizienten darstellt. Eine der folgenden Optionen:
            - `"rgb"`
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
    - `hardwareAcceleration`
      - : Ein Hinweis auf die zu verwendende Hardwarebeschleunigungsmethode. Eine der folgenden Optionen:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `optimizeForLatency`
      - : Ein boolean. Wenn `true`, ist dies ein Hinweis darauf, dass der ausgewählte Decoder so optimiert werden sollte, dass die Anzahl der {{domxref("EncodedVideoChunk")}} Objekte minimiert wird, die dekodiert werden müssen, bevor ein {{domxref("VideoFrame")}} ausgegeben wird.

> [!NOTE]
> Die Einträge im [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) verweisen auf eine Spezifikation, die beschreibt, ob und wie das optionale `description` Mitglied ausgefüllt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("VideoDecoder.state","state")}} den Wert `"closed"` hat.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

Das folgende Beispiel erstellt einen neuen {{domxref("VideoDecoder")}} und konfiguriert ihn mit dem `"vp8"` Codec, einer `codedWidth` von 640 Pixeln und einer `codedHeight` von 480 Pixeln.

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

## Kompatibilität der Browser

{{Compat}}
