---
title: "VideoEncoder: configure() Methode"
short-title: configure()
slug: Web/API/VideoEncoder/configure
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) Schnittstelle ändert den [`state`](/de/docs/Web/API/VideoEncoder/state) des Encoders auf "configured" und bereitet den Encoder asynchron vor, um [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)s für die Kodierung mit den angegebenen Parametern zu akzeptieren. Wenn der Encoder die angegebenen Parameter nicht unterstützt oder aus anderen Gründen nicht initialisiert werden kann, wird ein Fehler über den Fehler-Callback gemeldet, der dem [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Konstruktor übergeben wird.

Wenn der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) zuvor konfiguriert wurde, wird die neue Konfiguration erst angewendet, wenn alle vorherigen Aufgaben abgeschlossen sind.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuchobjekt mit den folgenden Mitgliedern:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Siehe ["codecs" Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion von Codec-Strings.
    - `width` {{optional_inline}}
      - : Ein Integer, der die Breite jedes Ausgabe- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln repräsentiert, vor jeglichen Verhältnis-Anpassungen.
    - `height` {{optional_inline}}
      - : Ein Integer, der die Höhe jedes Ausgabe- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln repräsentiert, vor jeglichen Verhältnis-Anpassungen.
    - `displayWidth` {{optional_inline}}
      - : Ein Integer, der die beabsichtigte Anzeigebreite jedes Ausgabe- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln bei der Anzeige repräsentiert.
    - `displayHeight` {{optional_inline}}
      - : Ein Integer, der die vertikale Dimension jedes Ausgabe- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) in Pixeln bei der Anzeige repräsentiert.
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
      - : Ein String, der angibt, ob die Alphakomponente der `VideoFrame` Eingaben beibehalten oder vor der Kodierung verworfen werden soll. Einer der folgenden:
        - `"discard"` (Standard)
        - `"keep"`
    - `scalabilityMode`
      - : Ein String, der einen Kodierungs-Scalability-Modus-Bezeichner wie in [WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*) definiert enthält.
    - `bitrateMode` {{optional_inline}}
      - : Ein String, der einen Bitratenmodus enthält. Einer der folgende:
        - `"constant"`
          - : Der Encoder wird auf eine konstante Bitrate abzielen.
        - `"variable"` (Standard)
          - : Der Encoder wird auf eine variable Bitrate abzielen, wodurch mehr Platz für komplexe Signale und weniger Platz für weniger komplexe Signale genutzt werden kann.
        - `"quantizer"`
          - : Der Encoder wird die `bitrate` Option ignorieren und stattdessen codec-spezifische Quantisierungswerte verwenden, die für jedes Bild im `options` Parameter zu [`VideoEncoder.encode()`](/de/docs/Web/API/VideoEncoder/encode) angegeben sind.
    - `latencyMode` {{optional_inline}}
      - : Ein String, der einen Wert enthält, der das Latenzverhalten dieses Codecs konfiguriert. Einer der folgende:
        - `"quality"` (Standard)
          - : Der Encoder sollte die Kodierqualität optimieren.
        - `"realtime"`
          - : Der Encoder sollte für niedrige Latenz optimieren und kann sogar Bilder überspringen, um die `framerate` zu ehren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

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
