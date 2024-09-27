---
title: "VideoEncoder: configure()-Methode"
short-title: configure()
slug: Web/API/VideoEncoder/configure
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode des [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Interfaces ändert den [`state`](/de/docs/Web/API/VideoEncoder/state) des Encoders auf "configured" und bereitet den Encoder asynchron vor, um [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)s mit den angegebenen Parametern für die Kodierung zu akzeptieren. Wenn der Encoder die angegebenen Parameter nicht unterstützt oder aus anderen Gründen nicht initialisiert werden kann, wird ein Fehler über den Fehler-Callback gemeldet, der dem [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Konstruktor bereitgestellt wurde.

Wenn der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) zuvor konfiguriert wurde, wird die neue Konfiguration erst angewendet, wenn alle vorherigen Aufgaben abgeschlossen sind.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuchobjekt mit den folgenden Mitgliedern:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Siehe ["codecs"-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion des Codec-Strings.
    - `width` {{optional_inline}}
      - : Eine ganze Zahl, die die Breite jedes Ausgabe-`EncodedVideoChunk` in Pixeln darstellt, bevor Anpassungen des Verhältnisses vorgenommen werden.
    - `height` {{optional_inline}}
      - : Eine ganze Zahl, die die Höhe jedes Ausgabe-`EncodedVideoChunk` in Pixeln darstellt, bevor Anpassungen des Verhältnisses vorgenommen werden.
    - `displayWidth` {{optional_inline}}
      - : Eine ganze Zahl, die die beabsichtigte Anzeigebreite jedes Ausgabe-`EncodedVideoChunk` in Pixeln darstellt, wenn es angezeigt wird.
    - `displayHeight` {{optional_inline}}
      - : Eine ganze Zahl, die die vertikale Dimension jedes Ausgabe-`EncodedVideoChunk` in Pixeln darstellt, wenn es angezeigt wird.
    - `hardwareAcceleration`
      - : Ein Hinweis, der die Hardwarebeschleunigungsmethode dieses Codecs konfiguriert. Eine der folgenden Optionen:
        - `"no-preference"`
        - `"prefer-hardware"`
        - `"prefer-software"`
    - `bitrate`
      - : Eine ganze Zahl, die die durchschnittliche Bitrate des kodierten Videos in Bits pro Sekunde angibt.
    - `framerate`
      - : Eine ganze Zahl, die die erwartete Bildrate in Bildern pro Sekunde angibt.
    - `alpha`
      - : Ein String, der angibt, ob die Alpha-Komponente der `VideoFrame`-Eingaben vor der Kodierung beibehalten oder verworfen werden soll. Eine der folgenden Optionen:
        - `"discard"` (Standard)
        - `"keep"`
    - `scalabilityMode`
      - : Ein String, der einen Kodierungs-Skalierbarkeitsmodus-Identifier enthält, wie in [WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*) definiert.
    - `bitrateMode` {{optional_inline}}
      - : Ein String, der einen Bitratenmodus enthält. Eine der folgenden Optionen:
        - `"constant"`
          - : Der Encoder wird eine konstante Bitrate anstreben.
        - `"variable"` (Standard)
          - : Der Encoder wird eine variable Bitrate anstreben, bei der komplexe Signale mehr Speicherplatz und weniger komplexe Signale weniger Speicherplatz benötigen.
        - `"quantizer"`
          - : Der Encoder wird die `bitrate`-Option ignorieren und stattdessen codec-spezifische Quantisierungswerte verwenden, die für jedes Bild im `options`-Parameter zu [`VideoEncoder.encode()`](/de/docs/Web/API/VideoEncoder/encode) angegeben sind.
    - `latencyMode` {{optional_inline}}
      - : Ein String, der einen Wert enthält, der das Latenzverhalten dieses Codecs konfiguriert. Eine der folgenden Optionen:
        - `"quality"` (Standard)
          - : Der Encoder sollte für Kodierungsqualität optimieren.
        - `"realtime"`
          - : Der Encoder sollte für niedrige Latenz optimieren und kann sogar Bilder auslassen, um die `framerate` einzuhalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der User-Agent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

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
