---
title: "VideoEncoder: configure() Methode"
short-title: configure()
slug: Web/API/VideoEncoder/configure
l10n:
  sourceCommit: e5ccdde5b77f66395e754e019c67468e43b72ac9
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Schnittstelle ändert den [`Zustand`](/de/docs/Web/API/VideoEncoder/state) des Encoders zu "configured" und bereitet den Encoder asynchron darauf vor, [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)s für die Kodierung mit den angegebenen Parametern zu akzeptieren. Wenn der Encoder die angegebenen Parameter nicht unterstützt oder aus anderen Gründen nicht initialisiert werden kann, wird ein Fehler über den Fehler-Rückruf gemeldet, der dem [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Konstruktor übergeben wurde.

Wenn der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) zuvor konfiguriert wurde, wird die neue Konfiguration erst angewendet, nachdem alle vorherigen Aufgaben abgeschlossen sind.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#video-codec-registry) enthält. Siehe ["codecs"-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion von Codec-Strings.
    - `width` {{optional_inline}}
      - : Ein Integer, der die Breite jedes Ausgabe-[`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln vor Anpassungen des Seitenverhältnisses darstellt.
    - `height` {{optional_inline}}
      - : Ein Integer, der die Höhe jedes Ausgabe-[`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln vor Anpassungen des Seitenverhältnisses darstellt.
    - `displayWidth` {{optional_inline}}
      - : Ein Integer, der die beabsichtigte Anzeigebreite jedes Ausgabe-[`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln darstellt.
    - `displayHeight` {{optional_inline}}
      - : Ein Integer, der die vertikale Dimension jedes Ausgabe-[`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln darstellt, wenn es angezeigt wird.
    - `hardwareAcceleration`
      - : Ein Hinweis, der die Hardware-Beschleunigungsmethode dieses Codecs konfiguriert. Eine der folgenden Optionen:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `bitrate`
      - : Ein Integer, der die durchschnittliche Bitrate des kodierten Videos in Einheiten von Bits pro Sekunde enthält.
    - `framerate`
      - : Ein Integer, der die erwartete Bildrate in Bildern pro Sekunde enthält.
    - `alpha`
      - : Ein String, der angibt, ob die Alpha-Komponente der `VideoFrame`-Eingaben vor der Kodierung beibehalten oder verworfen werden soll. Eine der folgenden Optionen:
        - `"discard"` (Standard)
        - `"keep"`
    - `scalabilityMode`
      - : Ein String, der eine Kodier-Skalierbarkeitsmoduskennung gemäß [WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*) enthält.
    - `bitrateMode` {{optional_inline}}
      - : Ein String, der einen Bitratenmodus enthält. Eine der folgenden Optionen:
        - `"constant"`
          - : Der Encoder wird eine konstante Bitrate anstreben.
        - `"variable"` (Standard)
          - : Der Encoder wird eine variable Bitrate anstreben, die es ermöglicht, mehr Platz für komplexe Signale und weniger Platz für weniger komplexe Signale zu verwenden.
        - `"quantizer"`
          - : Der Encoder wird die `bitrate`-Option ignorieren und stattdessen codec-spezifische Quantisierungswerte verwenden, die für jedes Bild im `options`-Parameter zu [`VideoEncoder.encode()`](/de/docs/Web/API/VideoEncoder/encode) angegeben sind.
    - `latencyMode` {{optional_inline}}
      - : Ein String, der einen Wert enthält, der das Latenzverhalten dieses Codecs konfiguriert. Eine der folgenden Optionen:
        - `"quality"` (Standard)
          - : Der Encoder sollte für Kodierqualität optimieren.
        - `"realtime"`
          - : Der Encoder sollte für geringe Latenz optimieren und kann sogar Bilder fallenlassen, um die `framerate` einzuhalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoEncoder/state) "closed" ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die bereitgestellte `config` gültig ist, aber der User-Agent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

Das folgende Beispiel erstellt einen neuen [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) und konfiguriert ihn mit einigen der verfügbaren Optionen.

```js
const init = {
  output: handleChunk,
  error(e) {
    console.log(e.message);
  },
};

let config = {
  codec: "vp8",
  width: 640,
  height: 480,
  bitrate: 2_000_000, // 2 Mbps
  framerate: 30,
};

let encoder = new VideoEncoder(init);
encoder.configure(config);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`VideoEncoder.isConfigSupported()`](/de/docs/Web/API/VideoEncoder/isConfigSupported_static)
- [Codec String Unterstützungstabelle](https://webcodecsfundamentals.org/datasets/codec-support-table/)
