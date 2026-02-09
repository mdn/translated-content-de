---
title: "VideoDecoder: Methode configure()"
short-title: configure()
slug: Web/API/VideoDecoder/configure
l10n:
  sourceCommit: e5ccdde5b77f66395e754e019c67468e43b72ac9
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Schnittstelle reiht eine Steuernachricht ein, um den Video-Decoder für das Decodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Objekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#video-codec-registry) enthält. Siehe [„codecs“-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion von Codec-Strings.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das eine Sequenz von codec-spezifischen Bytes enthält, allgemein bekannt als Extradata.
    - `codedWidth` {{optional_inline}}
      - : Ein Ganzzahlwert, der die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich nicht sichtbarer Polsterung, vor jeglichen Verhältnis-Anpassungen.
    - `codedHeight` {{optional_inline}}
      - : Ein Ganzzahlwert, der die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, einschließlich nicht sichtbarer Polsterung, vor jeglichen Verhältnis-Anpassungen.
    - `displayAspectWidth` {{optional_inline}}
      - : Ein Ganzzahlwert, der die horizontale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei Anzeige darstellt.
    - `displayAspectHeight` {{optional_inline}}
      - : Ein Ganzzahlwert, der die vertikale Dimension des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln bei Anzeige darstellt.
    - `colorSpace` {{optional_inline}}
      - : Ein Objekt, das einen [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) repräsentiert, und die folgenden Mitglieder enthält:
        - `primaries`
          - : Ein String, der den Farb{{Glossary("gamut", "gamut")}} der Video-Probe darstellt. Einer von:
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
        - `transfer`
          - : Ein String, der Übertragungseigenschaften darstellt. Einer von:
            - `"bt709"`
            - `"smpte170m"`
            - `"iec61966-2-1"`
        - `matrix`
          - : Ein String, der einen Matrix-Koeffizienten darstellt. Einer von:
            - `"rgb"`
            - `"bt709"`
            - `"bt470bg"`
            - `"smpte170m"`
    - `hardwareAcceleration` {{optional_inline}}
      - : Ein Hinweis, welche Methode zur Hardware-Beschleunigung verwendet werden soll. Einer von:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `optimizeForLatency` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, ist dies ein Hinweis, dass der ausgewählte Decoder optimiert werden sollte, um die Anzahl der [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte zu minimieren, die dekodiert werden müssen, bevor ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) ausgegeben wird.
    - `flip` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, wird horizontale Spiegelung angewendet. Standardmäßig ist dies `false`.
    - `rotation` {{optional_inline}}
      - : Ein Ganzzahlwert, der die Rotation (0, 90, 180, oder 270) in Grad im Uhrzeigersinn darstellt. Standardmäßig `0`. Beliebige Zahlen (einschließlich negativer) werden auf die nächste Vierteldrehung gerundet.

> [!NOTE]
> Die Einträge im [WebCodecs Codec-Register](https://w3c.github.io/webcodecs/codec_registry.html#video-codec-registry) verweisen auf eine Spezifikation, die detailliert beschreibt, ob und wie das optionale `description`-Mitglied auszufüllen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der User Agent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

Das folgende Beispiel erstellt einen neuen [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) und konfiguriert ihn mit dem `"vp8"`-Codec, einer `codedWidth` von 640 Pixeln und einer `codedHeight` von 480 Pixeln.

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

## Siehe auch

- [`VideoDecoder.isConfigSupported()`](/de/docs/Web/API/VideoDecoder/isConfigSupported_static)
- [Codec String Support Table](https://webcodecsfundamentals.org/datasets/codec-support-table/)
