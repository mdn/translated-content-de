---
title: "MediaCapabilities: encodingInfo() Methode"
short-title: encodingInfo()
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 69aa9c51ebd26b390f444f5ea88f882630042451
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`encodingInfo()`** Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Interfaces gibt ein Promise zurück, das mit den getesteten Medienkonfigurationsfähigkeiten zum Encodieren von Medien erfüllt wird.
Dies umfasst die drei booleschen Eigenschaften `supported`, `smooth` und `powerefficient`, welche beschreiben, wie kompatibel das Gerät mit der Art der Medien ist.

## Syntax

```js-nolint
encodingInfo(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt mit einer Eigenschaft `type` und _entweder_ einer `video`- oder `audio`-Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält: <!-- MediaEncodingConfiguration in the spec -->
    - `type`
      - : Der Typ der getesteten Medien. Dies nimmt einen von zwei Werten an:
        - `record`
          - : Repräsentiert eine Konfiguration zum Aufzeichnen von Medien, z.B. mit [`MediaRecorder`](/de/docs/Web/API/MediaRecorder).
        - `webrtc`
          - : Stellt eine Konfiguration dar, die über elektronische Mittel übertragen werden soll (z.B. mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)).
        - `transmission` {{non-standard_inline}}
          - : Ein Synonym für `webrtc`.

    - `video`
      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- VideoConfiguration in the spec -->
        - `contentType`
          - : String mit einem gültigen Video-MIME-Typ und (optional) einem [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu codieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Video-Wiedergabe bilden.

    - `audio`
      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- AudioConfiguration in the spec -->
        - `contentType`
          - : String mit einem gültigen Audio-MIME-Typ und (optional) einem [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die vom Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu codieren.
        - `samplerate`
          - : Die Anzahl der Audiosamples, die eine Sekunde der Audiodatei bilden.

### Rückgabewert

Ein {{jsxref('Promise')}} wird erfüllt mit einem Objekt, das drei boolesche Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt encodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien reibungslos (von hoher Qualität) ist. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient ist. Andernfalls ist es `false`.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken zu diesem Gerät aufgezeichnet wurden.
Alle unterstützten Audiocodecs werden als energieeffizient gemeldet.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `configuration`, die an die `encodingInfo()` Methode übergeben wird, ungültig ist, was aus einem der folgenden Gründe sein kann:
    - der Typ ist nicht video oder audio,
    - der `contentType` ist kein gültiger Codec-MIME-Typ,
    - es liegt ein anderer Fehler in der an die Methode übergebenen Medienkonfiguration vor, einschließlich der Auslassung eines der `configuration`-Elemente.

## Beispiele

### Festlegung einer Medienkonfiguration

```js
// Create media configuration to be tested
const mediaConfig = {
  type: "record",
  video: {
    contentType: "video/webm;codecs=vp8.0", // valid content type
    width: 1920, // width of the video
    height: 1080, // height of the video
    bitrate: 120000, // number of bits used to encode 1s of video
    framerate: 48, // number of frames making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.encodingInfo(mediaConfig).then((result) => {
  console.log(
    `This configuration is ${result.supported ? "" : "not "}supported,`,
  );
  console.log(`${result.smooth ? "" : "not "}smooth, and`);
  console.log(`${result.powerEfficient ? "" : "not "}power efficient.`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.decodingInfo()`](/de/docs/Web/API/MediaCapabilities/decodingInfo)
