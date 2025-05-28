---
title: "VideoDecoder: configure()-Methode"
short-title: configure()
slug: Web/API/VideoDecoder/configure
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um den Videodecoder für das Decodieren von Datenblöcken zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#video-codec-registry) enthält. Siehe ["codecs"-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) für Details zur Erstellung von Codec-Strings.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der eine Sequenz von codec-spezifischen Bytes enthält, üblicherweise als "extradata" bekannt.
    - `codedWidth` {{optional_inline}}
      - : Ein Integer, der die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Auffüllung, bevor Anpassungen des Seitenverhältnisses vorgenommen werden.
    - `codedHeight` {{optional_inline}}
      - : Ein Integer, der die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Auffüllung, bevor Anpassungen des Seitenverhältnisses vorgenommen werden.
    - `displayAspectWidth` {{optional_inline}}
      - : Ein Integer, der die horizontale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei der Anzeige darstellt.
    - `displayAspectHeight` {{optional_inline}}
      - : Ein Integer, der die vertikale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei der Anzeige darstellt.
    - `colorSpace` {{optional_inline}}
      - : Ein Objekt, das einen [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) darstellt und folgende Mitglieder enthält:
        - `primaries`
          - : Ein String, der den Farb-{{Glossary("gamut", "Gamut")}} des Videobeispiels repräsentiert. Einer von:
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
        - `transfer`
          - : Ein String, der Übertragungscharakteristiken darstellt. Einer von:
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
      - : Ein Hinweis auf die zu verwendende Hardware-Beschleunigungsmethode. Einer von:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `optimizeForLatency` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, ist dies ein Hinweis darauf, dass der ausgewählte Decoder so optimiert werden sollte, dass die Anzahl der zu decodierenden [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte minimiert wird, bevor ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) ausgegeben wird.

> [!NOTE]
> Die Einträge im [WebCodecs Codec Registry](https://w3c.github.io/webcodecs/codec_registry.html#video-codec-registry) verweisen auf eine Spezifikation, die beschreibt, ob und wie das optionale `description`-Mitglied gefüllt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der User Agent keinen Codec bereitstellen kann, der dieses Profil decodieren kann.

## Beispiele

Das folgende Beispiel erstellt einen neuen [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) und konfiguriert ihn mit dem `"vp8"`-Codec, einem `codedWidth` von 640 Pixeln und einem `codedHeight` von 480 Pixeln.

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
