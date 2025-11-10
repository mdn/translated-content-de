---
title: "VideoDecoder: configure() Methode"
short-title: configure()
slug: Web/API/VideoDecoder/configure
l10n:
  sourceCommit: 4c4e14a03ff66ad7fcdcef2a4c149bd892aacbce
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) Schnittstelle stellt eine Steuerungsanfrage in die Warteschlange, um den Videodecoder für das Decodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#video-codec-registry) enthält. Siehe ["codecs" Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion von Codec-Strings.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das eine Sequenz von codecspezifischen Bytes enthält, allgemein bekannt als "extradata".
    - `codedWidth` {{optional_inline}}
      - : Ein Integer, der die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixel angibt, einschließlich jeglicher nicht sichtbarer Auffüllung, vor jeder Verhältnis-Anpassung.
    - `codedHeight` {{optional_inline}}
      - : Ein Integer, der die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixel angibt, einschließlich jeglicher nicht sichtbarer Auffüllung, vor jeder Verhältnis-Anpassung.
    - `displayAspectWidth` {{optional_inline}}
      - : Ein Integer, der die horizontale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixel bei der Anzeige angibt.
    - `displayAspectHeight` {{optional_inline}}
      - : Ein Integer, der die vertikale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixel bei der Anzeige angibt.
    - `colorSpace` {{optional_inline}}
      - : Ein Objekt, das einen [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) darstellt und die folgenden Mitglieder enthält:
        - `primaries`
          - : Ein String, der den Farbraum ({{Glossary("gamut", "gamut")}}) des Videomusters darstellt. Eine Auswahl aus:
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
        - `transfer`
          - : Ein String, der die Übertragungseigenschaften darstellt. Eine Auswahl aus:
            - `"bt709"`
            - `"smpte170m"`
            - `"iec61966-2-1"`
        - `matrix`
          - : Ein String, der einen Matrizenkoeffizienten darstellt. Eine Auswahl aus:
            - `"rgb"`
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
    - `hardwareAcceleration` {{optional_inline}}
      - : Ein Hinweis auf die zu verwendende Hardwarebeschleunigungsmethode. Eine Auswahl aus:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `optimizeForLatency` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, ist dies ein Hinweis darauf, dass der ausgewählte Decoder optimiert werden sollte, um die Anzahl der [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) Objekte zu minimieren, die decodiert werden müssen, bevor ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) ausgegeben wird.
    - `flip` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, wird eine horizontale Spiegelung angewendet. Standardmäßig `false`.
    - `rotation` {{optional_inline}}
      - : Ein Integer, der die Drehung (0, 90, 180 oder 270) in Grad im Uhrzeigersinn darstellt. Standardmäßig `0`. Beliebige Zahlen (einschließlich negativer) werden auf die nächste Vierteldrehung gerundet.

> [!NOTE]
> Die Registrierungen im [WebCodecs Codec Registry](https://w3c.github.io/webcodecs/codec_registry.html#video-codec-registry) verweisen auf eine Spezifikation, die darlegt, ob und wie das optionale `description` Mitglied zu füllen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil decodieren kann.

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
