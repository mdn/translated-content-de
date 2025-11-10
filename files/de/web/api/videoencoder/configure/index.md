---
title: "VideoEncoder: configure() Methode"
short-title: configure()
slug: Web/API/VideoEncoder/configure
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) Schnittstelle ändert den [`state`](/de/docs/Web/API/VideoEncoder/state) des Encoders in "configured" und bereitet asynchron den Encoder darauf vor, [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) zur Kodierung mit den angegebenen Parametern zu akzeptieren. Wenn der Encoder die angegebenen Parameter nicht unterstützt oder aus anderen Gründen nicht initialisiert werden kann, wird ein Fehler über den Fehler-Callback gemeldet, der dem [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) Konstruktor übergeben wurde.

Wenn der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) zuvor konfiguriert wurde, wird die neue Konfiguration erst angewendet, wenn alle vorherigen Aufgaben abgeschlossen sind.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#video-codec-registry) enthält. Weitere Details zur Konstruktion von Codec-Strings finden Sie unter ["codecs" parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container).
    - `width` {{optional_inline}}
      - : Ein Integer, der die Breite jedes Ausgabes [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln darstellt, bevor Anpassungen des Verhältnisses vorgenommen werden.
    - `height` {{optional_inline}}
      - : Ein Integer, der die Höhe jedes Ausgabes [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln darstellt, bevor Anpassungen des Verhältnisses vorgenommen werden.
    - `displayWidth` {{optional_inline}}
      - : Ein Integer, der die vorgesehene Anzeigeweite jedes Ausgabes [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln beim Anzeigen darstellt.
    - `displayHeight` {{optional_inline}}
      - : Ein Integer, der die vertikale Dimension jedes Ausgabes [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln beim Anzeigen darstellt.
    - `hardwareAcceleration`
      - : Ein Hinweis, der die Hardwarebeschleunigungsmethode dieses Codecs konfiguriert. Eine der folgenden:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `bitrate`
      - : Ein Integer, der die durchschnittliche Bitrate des kodierten Videos in Einheiten von Bits pro Sekunde enthält.
    - `framerate`
      - : Ein Integer, der die erwartete Bildrate in Bildern pro Sekunde enthält.
    - `alpha`
      - : Ein String, der angibt, ob die Alphakomponente der `VideoFrame`-Eingaben vor der Kodierung beibehalten oder verworfen werden soll. Eine der folgenden:
        - `"discard"` (Standard)
        - `"keep"`
    - `scalabilityMode`
      - : Ein String, der einen Skalierbarkeitsmodus-Identifikator für die Kodierung wie in [WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*) definiert enthält.
    - `bitrateMode` {{optional_inline}}
      - : Ein String, der einen Bitratenmodus enthält. Eine der folgenden:
        - `"constant"`
          - : Der Encoder wird auf konstante Bitrate abzielen.
        - `"variable"` (Standard)
          - : Der Encoder wird auf eine variable Bitrate abzielen, wodurch mehr Raum für komplexe Signale und weniger Raum für weniger komplexe Signale verwendet werden kann.
        - `"quantizer"`
          - : Der Encoder wird die `bitrate`-Option ignorieren und stattdessen codecspezifische Quantisierungswerte für jedes Frame im `options` Parameter zu [`VideoEncoder.encode()`](/de/docs/Web/API/VideoEncoder/encode) verwenden.
    - `latencyMode` {{optional_inline}}
      - : Ein String, der einen Wert enthält, der das Latenzverhalten dieses Codecs konfiguriert. Eine der folgenden:
        - `"quality"` (Standard)
          - : Der Encoder sollte für höchste Kodierungsqualität optimieren.
        - `"realtime"`
          - : Der Encoder sollte für niedrige Latenz optimieren und kann sogar Frames fallen lassen, um die `framerate` einzuhalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das übergebene `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das übergebene `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

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
