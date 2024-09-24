---
title: "VideoEncoder: configure()-Methode"
short-title: configure()
slug: Web/API/VideoEncoder/configure
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der {{domxref("VideoEncoder")}}-Schnittstelle ändert den {{domxref("VideoEncoder.state", "Zustand")}} des Encoders auf "configured" und bereitet den Encoder asynchron vor, um {{domxref("VideoEncoder")}} zur Kodierung mit den angegebenen Parametern zu akzeptieren. Wenn der Encoder die angegebenen Parameter nicht unterstützt oder aus anderen Gründen nicht initialisiert werden kann, wird ein Fehler über den im {{domxref("VideoEncoder")}} Konstruktor bereitgestellten Fehler-Callback gemeldet.

Wenn die {{domxref("VideoEncoder")}} zuvor konfiguriert wurde, wird die neue Konfiguration erst angewendet, wenn alle vorherigen Aufgaben abgeschlossen sind.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Lesen Sie ["codecs" Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Erstellung eines Codec-Strings.
    - `width` {{optional_inline}}
      - : Eine ganze Zahl, die die Breite jedes Ausgabes {{domxref("EncodedVideoChunk")}} in Pixeln darstellt, bevor irgendwelche Ratio-Anpassungen vorgenommen werden.
    - `height` {{optional_inline}}
      - : Eine ganze Zahl, die die Höhe jedes Ausgabes {{domxref("EncodedVideoChunk")}} in Pixeln darstellt, bevor irgendwelche Ratio-Anpassungen vorgenommen werden.
    - `displayWidth` {{optional_inline}}
      - : Eine ganze Zahl, die die vorgesehene Anzeige-Breite jedes Ausgabes {{domxref("EncodedVideoChunk")}} in Pixeln bei der Anzeige darstellt.
    - `displayHeight` {{optional_inline}}
      - : Eine ganze Zahl, die die vertikale Dimension jedes Ausgabes {{domxref("EncodedVideoChunk")}} in Pixeln bei der Anzeige darstellt.
    - `hardwareAcceleration`
      - : Ein Hinweis, der die Methode der Hardwarebeschleunigung dieses Codecs konfiguriert. Einer von:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `bitrate`
      - : Eine ganze Zahl, die die durchschnittliche Bitrate des kodierten Videos in Bits pro Sekunde enthält.
    - `framerate`
      - : Eine ganze Zahl, die die erwartete Bildrate in Bildern pro Sekunde enthält.
    - `alpha`
      - : Ein String, der angibt, ob die Alphakomponente der `VideoFrame`-Eingaben vor der Kodierung beibehalten oder verworfen werden soll. Einer von:
        - `"discard"` (Standard)
        - `"keep"`
    - `scalabilityMode`
      - : Ein String, der einen Identifier für den Skalierbarkeitsmodus der Kodierung enthält, wie in [WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*) definiert.
    - `bitrateMode` {{optional_inline}}
      - : Ein String, der einen Bitratenmodus enthält. Einer von:
        - `"constant"`
          - : Der Encoder wird auf konstante Bitrate abzielen.
        - `"variable"` (Standard)
          - : Der Encoder wird auf eine variable Bitrate abzielen, mehr Raum für komplexe Signale und weniger für weniger komplexe Signale zulassen.
        - `"quantizer"`
          - : Der Encoder wird die `bitrate`-Option ignorieren und stattdessen codec-spezifische Quantisierer-Werte verwenden, die für jedes einzelne Bild im `options`-Parameter von {{domxref("VideoEncoder.encode()")}} angegeben sind.
    - `latencyMode` {{optional_inline}}
      - : Ein String, der einen Wert enthält, der das Latenzverhalten dieses Codecs konfiguriert. Einer von:
        - `"quality"` (Standard)
          - : Der Encoder sollte auf die Optimierung der Kodierungsqualität abzielen.
        - `"realtime"`
          - : Der Encoder sollte auf geringe Latenz optimieren und kann sogar Bilder verwerfen, um die `framerate` einzuhalten.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("VideoEncoder.state","Zustand")}} `"closed"` ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

Das folgende Beispiel erstellt einen neuen {{domxref("VideoEncoder")}} und konfiguriert ihn mit einigen der verfügbaren Optionen.

```js
const init = {
  output: handleChunk,
  error: (e) => {
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
