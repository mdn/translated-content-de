---
title: "VideoDecoder: configure()-Methode"
short-title: configure()
slug: Web/API/VideoDecoder/configure
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode des [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Interfaces stellt eine Kontrollnachricht in die Warteschlange, um den Video-Decoder für das Dekodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der eine [gültige Codec-Zeichenkette](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry) enthält. Siehe ["codecs"-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Erstellung von Codec-Zeichenketten.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine Folge von codec-spezifischen Bytes enthält, allgemein bekannt als Extradata.
    - `codedWidth` {{optional_inline}}
      - : Eine Ganzzahl, die die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Polsterung, vor etwaigen Seitenverhältnis-Anpassungen.
    - `codedHeight` {{optional_inline}}
      - : Eine Ganzzahl, die die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich jeglicher nicht sichtbarer Polsterung, vor etwaigen Seitenverhältnis-Anpassungen.
    - `displayAspectWidth` {{optional_inline}}
      - : Eine Ganzzahl, die die horizontale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, wenn angezeigt.
    - `displayAspectHeight` {{optional_inline}}
      - : Eine Ganzzahl, die die vertikale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, wenn angezeigt.
    - `colorSpace`
      - : Ein Objekt, das einen [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) darstellt und die folgenden Mitglieder enthält:
        - `primaries`
          - : Ein String, der den Farb-[Gamut](/de/docs/Glossary/gamut) des Videomusters darstellt. Eine der folgenden Optionen:
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
        - `transfer`
          - : Ein String, der die Übertragungseigenschaften darstellt. Eine der folgenden Optionen:
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
      - : Ein Hinweis auf die zu verwendende Methode der Hardware-Beschleunigung. Eine der folgenden Optionen:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `optimizeForLatency`
      - : Ein Boolean. Wenn `true`, ist dies ein Hinweis darauf, dass der ausgewählte Decoder so optimiert werden sollte, dass die Anzahl der [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte minimiert wird, die dekodiert werden müssen, bevor ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) ausgegeben wird.

> [!NOTE]
> Die Einträge im [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) verweisen auf eine Spezifikation, die beschreibt, ob und wie das optionale `description`-Mitglied gefüllt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die bereitgestellte `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

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
