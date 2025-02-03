---
title: "VideoEncoder: configure()-Methode"
short-title: configure()
slug: Web/API/VideoEncoder/configure
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Schnittstelle ändert den [`state`](/de/docs/Web/API/VideoEncoder/state) des Encoders zu "configured" und bereitet den Encoder asynchron darauf vor, [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Eingaben zum Kodieren mit den angegebenen Parametern zu akzeptieren. Falls der Encoder die angegebenen Parameter nicht unterstützt oder aus anderen Gründen nicht initialisiert werden kann, wird ein Fehler über den im [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Konstruktor bereitgestellten Fehler-Callback gemeldet.

Falls der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) zuvor konfiguriert wurde, wird die neue Konfiguration erst angewendet, wenn alle vorherigen Aufgaben abgeschlossen sind.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Dictionary-Objekt mit den folgenden Elementen:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Siehe ["codecs" Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion des Codec-Strings.
    - `width` {{optional_inline}}
      - : Eine Ganzzahl, die die Breite jedes Ausgabe-`EncodedVideoChunk` in Pixeln darstellt, bevor Anpassungen des Verhältnisses vorgenommen werden.
    - `height` {{optional_inline}}
      - : Eine Ganzzahl, die die Höhe jedes Ausgabe-`EncodedVideoChunk` in Pixeln darstellt, bevor Anpassungen des Verhältnisses vorgenommen werden.
    - `displayWidth` {{optional_inline}}
      - : Eine Ganzzahl, die die beabsichtigte Anzeigebreite jedes Ausgabe-`EncodedVideoChunk` in Pixeln bei der Anzeige darstellt.
    - `displayHeight` {{optional_inline}}
      - : Eine Ganzzahl, die die vertikale Dimension jedes Ausgabe-`EncodedVideoChunk` in Pixeln bei der Anzeige darstellt.
    - `hardwareAcceleration`
      - : Ein Hinweis zur Konfiguration der Hardwarebeschleunigungsmethode dieses Codecs. Einer von:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `bitrate`
      - : Eine Ganzzahl, die die durchschnittliche Bitrate des kodierten Videos in Einheiten von Bits pro Sekunde enthält.
    - `framerate`
      - : Eine Ganzzahl, die die erwartete Bildrate in Bildern pro Sekunde enthält.
    - `alpha`
      - : Ein String, der angibt, ob die Alphakomponente der `VideoFrame`-Eingaben beibehalten oder vor dem Kodieren verworfen werden soll. Einer von:
        - `"discard"` (Standardeinstellung)
        - `"keep"`
    - `scalabilityMode`
      - : Ein String, der einen Identifier für einen kodierenden Skalierbarkeitsmodus enthält, wie in [WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*) definiert.
    - `bitrateMode` {{optional_inline}}
      - : Ein String, der einen Bitratenmodus enthält. Einer von:
        - `"constant"`
          - : Der Encoder wird eine konstante Bitrate anstreben.
        - `"variable"` (Standardeinstellung)
          - : Der Encoder wird eine variable Bitrate anstreben und dadurch bei komplexen Signalen mehr Speicherplatz und bei weniger komplexen Signalen weniger Speicherplatz verwenden.
        - `"quantizer"`
          - : Der Encoder wird die `bitrate`-Option außer Acht lassen und stattdessen codec-spezifische Quantisiererwerte verwenden, die für jeden Frame im `options`-Parameter von [`VideoEncoder.encode()`](/de/docs/Web/API/VideoEncoder/encode) angegeben werden.
    - `latencyMode` {{optional_inline}}
      - : Ein String, der einen Wert enthält, mit dem das Latenzverhalten dieses Codecs konfiguriert wird. Einer von:
        - `"quality"` (Standardeinstellung)
          - : Der Encoder sollte für die Kodierungsqualität optimieren.
        - `"realtime"`
          - : Der Encoder sollte für geringe Latenz optimieren und kann sogar Frames auslassen, um die `framerate` einzuhalten.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
